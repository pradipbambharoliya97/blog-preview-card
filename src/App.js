import { memo, useEffect, useState } from "react";
import "./App.scss";
import { auth } from "./axios/apiCall";
import { cardData } from "./utils/copnstants";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    handleLogin();
  }, []);

  const handleLogin = () => {
    setLoading(true);
    auth
      .login({ username: "", password: "" })
      .then((response) => {
        console.log("Login successful:", response);
      })
      .catch((error) => {
        console.error("Login failed:", error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <main
      role="main"
      aria-labelledby="main"
      className="bg-lime h-screen w-full flex items-center justify-center p-6"
    >
      <section className="flex flex-col gap-3 card-shadow bg-white max-w-sm border border-black-50 rounded-3xl p-6">
        <div className="flex flex-col gap-2">
          <img
            src={cardData.image}
            alt="blog-image"
            className="rounded-xl"
            loading="lazy"
          />
          <p className="p-2.5 py-1 mt-4 rounded-md font-bold tracking-tight bg-lime max-w-fit">
            {cardData.tag}
          </p>
          <p className="text-sm font-medium">
            Published {cardData.publishDate}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1
            aria-labelledby="heading"
            className="text-xl sm:text-2xl transition duration-150 font-bold hover:text-lime cursor-pointer"
          >
            {cardData.title}
          </h1>
          <p className="text-base text-gray-500">{cardData.descroption}</p>
          <div className="flex items-center gap-2">
            <img
              src={cardData.avatar}
              alt="avatar"
              className="w-8"
              loading="lazy"
            />
            <a
              href="https://github.com/pradipbambharoliya97/blog-preview-card"
              target="_blank"
              className="text-lg font-bold"
              rel="noreferrer"
            >
              {cardData.name}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default memo(App);
