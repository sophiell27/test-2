import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/about');
  };
  return (
    <div>
      <h1>Home</h1>
      <div className=''></div>
      <p onClick={onClick}>go to about </p>
    </div>
  );
};

export default Home;
