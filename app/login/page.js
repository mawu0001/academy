"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const users = {
    Gastrotools: "Gastrorules123",
    Magasin: "Magagasin123",
    Illums_bolighus: "Illum_illum123",
    Bahne: "Babahne123",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (users[username] && users[username] === password) {
      localStorage.setItem("isAuthenticated", "true");
      router.push("/forside");
    } else {
      setError("Forkert brugernavn eller adgangskode");
    }
  };

  return (
    <main className="relative mt-32 lg:mt-64">
      <section className="flex-col place-items-center gap-16 h-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-row gap-6 place-items-center">
          <Image
            src="/img/gastrotools_symbol_positive_rgb.png"
            width={80}
            height={60}
            alt="thumbnail"
            className="cursor-pointer rounded-lg"
          />
          <h1>Gastrotools Product Academy</h1>
        </div>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-6 place--center mb-32"
        >
          <div className="flex flex-wrap place-content-between gap-4">
            <label htmlFor="username">Brugernavn:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder=" Brugernavn"
              required
              className="border-solid border rounded-md"
            />
          </div>
          <div className="flex flex-wrap place-content-between gap-4">
            <label htmlFor="password">Adgangskode:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" Adgangskode"
              required
              className="border-solid border rounded-md"
            />
          </div>
          {error && <p>{error}</p>}
          <button
            type="submit"
            className="cursor-pointer text-sm place-self-center border border-solid w-fit py-3 px-8 rounded-4xl text-[#FCFBF7] bg-[#252522] hover:bg-gray-400"
          >
            Log ind
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
