/* eslint-disable react/prop-types */



const WantToCook = ({ wantToCook, handlePreparing }) => {
  const { id, name, preparing_time, calories } = wantToCook;

 

  return (
    <div className="flex flex-col md:justify-around lg:flex-row lg:justify-center lg:gap-2 lg:px-2 items-center pb-4 mb-8 lg:pb-0 lg:mb-0 bg-[#28282808]">
      <table className="flex items-center mb py-2">
        <tbody className="w-full text-[#878787] ">
          <tr>
            
            <td className="w-[25%] md:w-[33%] md:text-start md:px-16 text-center  lg:px-8">{name} </td>
            <td className="w-[25%] md:w-[33%] md:text-start md:px-16 lg:text-center  lg:px-2">
              <span>{preparing_time} </span> minutes
            </td>
            <td className="w-[25%] md:w-[33%] md:text-start md:px-16 text-center ">
              <span>{calories} </span>Calories
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button
          onClick={() => handlePreparing(id)}
          className="bg-[#0BE58A] py-1 border-2 px-4 rounded-full font-bold text-black hover:bg-transparent hover:text-black [#0BE58A] hover:border-[#0BE58A]"
        >
          Preparing
        </button>
      </div>
    </div>
  );
};

export default WantToCook;
