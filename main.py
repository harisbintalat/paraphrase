import spacy
import torch
from transformers import PegasusTokenizer, PegasusForConditionalGeneration
from fastapi.middleware.cors import CORSMiddleware
from sentence_splitter import SentenceSplitter
from fastapi import FastAPI, Request, Response
from fastapi.responses import JSONResponse

app = FastAPI()

model_name = 'tuner007/pegasus_paraphrase'
torch_device = 'cuda' if torch.cuda.is_available() else 'cpu'
tokenizer = PegasusTokenizer.from_pretrained(model_name)
model = PegasusForConditionalGeneration.from_pretrained(model_name).to(torch_device)

def get_response(input_text,num_return_sequences):
    batch = tokenizer([input_text],truncation=True,padding='longest',max_length=60, return_tensors="pt").to(torch_device)
    translated = model.generate(**batch,max_length=60,num_beams=10, num_return_sequences=num_return_sequences, temperature=1.5)
    tgt_text = tokenizer.batch_decode(translated, skip_special_tokens=True)
    return tgt_text


# Define the origins that are allowed to make CORS requests to the API
origins = ["*"]

# Add CORS middleware to the FastAPI app
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/")
async def read_root(data:dict) -> dict:
    # Split the input text into sentences
    splitter = SentenceSplitter(language='en')
    sentence_list = splitter.split(data['text'])
    # Generate paraphrased text for each sentence
    paraphrase = []
    for i in sentence_list:
        a = get_response(i,1)
        paraphrase.extend(a)
    
    # Join the paraphrased sentences into a single string
    paraphrased_text = ' '.join(paraphrase)
    
    # Return the paraphrased text in a JSON response
    response = {
        "paraphrased_text": paraphrased_text
    }
    print(response)
    return response
