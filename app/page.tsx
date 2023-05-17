async function getData() {
  const url: string | undefined = process.env.RAPID_API_URL;
  const options: any = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.RAPID_API_HOST,
    },
  };

  try {
    const response = await fetch(`${url}/cities`, options);
    const result = await response.text();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  // const data = await getData();

  console.log(process.env.RAPID_API_URL);

  return (
    <main className="min-h-screen p-24">
      <h1>weather app</h1>
    </main>
  );
}
