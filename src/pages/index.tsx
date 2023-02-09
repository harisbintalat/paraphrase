import Head from "next/head";
import { NextPageWithLayout } from "@customTypes/layouts";
import { ReactElement, useState } from "react";
import ClientLayout from "@layouts/clientLayout";

const Home: NextPageWithLayout = () => {
  const [data, setData] = useState("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(data);
  };

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <textarea
              placeholder="Paste here to rephrase"
              onChange={(event) => {
                setData(event.target.value);
              }}
              className="w-full px-2 py-2 border-2 shadow-lg rounded-lg"
              rows={16}
            />
          </div>
          <div>
            <textarea
              placeholder="Rephrased text"
              className="w-full px-2 py-2 border-2 shadow-lg rounded-lg"
              rows={16}
            />
          </div>
        </div>
        <div className="grid justify-center">
          <button className="bg-green-600 rounded-xl w-40 text-white p-3">
            Rephrase
          </button>
        </div>
      </form>
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <ClientLayout>{page}</ClientLayout>;
};

export default Home;
