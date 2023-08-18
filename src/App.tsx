function App() {
  return (
    <>
      <h1 className="text-blue-500">Movie Kumar</h1>
      <h1 className="text-blue-500"> {import.meta.env.VITE_TMDB_API_KEY} </h1>
    </>
  );
}

export default App;
