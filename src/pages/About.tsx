import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
  };
  return (
    <div>
      <h1>About</h1>
      <p onClick={onClick}>go to home </p>
    </div>
  );
};
export default About;
