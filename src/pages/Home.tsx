import { Seeker } from "@components/Seeker";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (username: string) => {
    if (username) {
      navigate(`/${username}`);
    }
  };

  return (
    <div>
      <Seeker setSearchTerm={handleSearch} />
    </div>
  );
};
