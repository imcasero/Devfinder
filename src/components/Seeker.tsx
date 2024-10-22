export const Seeker = () => {
  return (
    <search>
      <form>
        <input
          type="text"
          name="search"
          id="search"
          className="w-full border rounded-md border-gray-200 py-2 px-4 bg-transparent"
          placeholder="Search github user... "
        />
      </form>
    </search>
  );
};
