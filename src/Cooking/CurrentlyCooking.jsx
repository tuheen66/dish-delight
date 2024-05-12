/* eslint-disable react/prop-types */


const CurrentlyCooking = ({nowCooking}) => {
    const { name, preparing_time, calories } = nowCooking[0];
  return (
    <div className="items-center  bg-[#28282808] py-2">
      <table className="w-full mb-2">
        <tbody>
          <tr className="text-[#878787] flex">
            <td className="w-[4%] px-2"></td>
            <td className="w-[32%] px-2">{name}</td>
            <td className="w-[32%] px-2">
              <span>{preparing_time} </span>Minutes
            </td>
            <td className="w-[32%] px-2">
              <span>{calories} </span>Calories
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CurrentlyCooking;