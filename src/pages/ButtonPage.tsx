import Button from "../components/Button";

const ButtonPage = () => {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <div className='App'>
      <div className='App-button'>
        <Button
          title='Hello'
          colorVariant='secondary'
          onClick={handleClick}
          onMouseEnter={handleClick}
        />
      </div>
      <div className='App-button'>
        <Button title='Hello' />
      </div>
      <div className='App-button'>
        <Button title='Hello' />
      </div>
    </div>
  );
};
export default ButtonPage;
