import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/about');
  };
  return (
    <div>
      <h1>
        Home
        <p onClick={onClick}>go to about </p>
      </h1>
      <div className=''></div>
    </div>
  );
};

export default Home;
