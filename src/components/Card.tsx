// components/Card.js
const Card = ({ children }: any) => {
    return (
      <div className="container mx-auto mt-8 bg-white shadow-md rounded-lg p-5 w-[80%]">
        {children}
      </div>
    );
  };
  
  export default Card;
  