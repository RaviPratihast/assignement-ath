function App() {
  return (
    <main className="flex justify-between items-center p-4 bg-[#160F41CC]">
      <h1 className="text-base text-white font-bold">AthenaHealth</h1>
      <ul className="flex gap-14 text-white">
        <li className="cursor-pointer text-white ">Perspectives</li>
        <li className="cursor-pointer text-[#FFFFFFB2] ">Research</li>
        <li className="cursor-pointer text-[#FFFFFFB2] ">Events</li>
        <li className="cursor-pointer text-[#FFFFFFB2] ">Innovation</li>
        <li className="cursor-pointer text-[#FFFFFFB2] ">About</li>
      </ul>
      <button className="bg-[#362f71cc] le border-2 border-[#655f89cc] px-6 py-1 text-white rounded-full">
        Back to AthenaHealth
      </button>
    </main>
  );
}

export default App;
