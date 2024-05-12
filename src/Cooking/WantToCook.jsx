/* eslint-disable react/prop-types */



const WantToCook = ({ wantToCook, handlePreparing }) => {
  const { id, name, preparing_time, calories } = wantToCook;

 

  return (
    <div className="flex flex-col lg:flex-row items-center  bg-[#28282808]">
      <table className="flex items-center mb py-2">
        <tbody className="w-full text-[#878787] ">
          <tr className="py-4 flex gap-6">
            <td className="w-[4%] text-center  px-2">1 </td>
            <td className="w-[24%] text-center  px-2">{name} </td>
            <td className="w-[24%] text-center  px-2">
              <span>{preparing_time} </span> minutes
            </td>
            <td className="w-[24%] text-center px-2">
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
