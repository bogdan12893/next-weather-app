"use client";
import Search from "./components/Search";

export default function Home() {
  const handleOnSearchChange = (searchData: any) => {
    console.log(searchData);
  };

  return (
    <main className="min-h-screen p-24">
      <h1>weather app</h1>
      <Search onSearchChange={handleOnSearchChange} />
    </main>
  );
}
