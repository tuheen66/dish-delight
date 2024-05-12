/* eslint-disable react/prop-types */
import CurrentlyCooking from "./CurrentlyCooking";
import WantToCook from "./WantToCook";

const CookingContainer = ({
  wantToCook,
  handlePreparing,
  currentlyCookings,
  preparingTime,
  calories,
}) => {
  return (
    <div className=" lg:w-[550px]  border-2 rounded-xl text-[#282828] shadow-xl shadow-green-200 ">
      <div>
        <h2 className="text-center font-bold mb-2 py-4 text-2xl">
          Want to cook: <span> </span>
        </h2>

        <hr />

        <div className="mt-4">
          <div className="justify-around mb-4 ">
            <table className="w-full mb-2">
              <tbody>
                <tr className="text-[#878787] ">
                  
                  <td className="w-[25%] text-start pl-10 lg:pl-8">Name</td>
                  <td className="w-[25%] text-start pl-16 lg:pl-10">Time </td>
                  <td className="w-[25%] text-start pl-16 lg:pl-6">Calories </td>
                  <td className="w-[25%]"></td>
                </tr>
              </tbody>
            </table>
            {wantToCook.map((wantToCook) => (
              <WantToCook
                key={wantToCook.id}
                wantToCook={wantToCook}
                handlePreparing={handlePreparing}
              ></WantToCook>
            ))}
          </div>
        </div>
      </div>

      {/* currently cooking */}
      <hr />
      <div>
        <h2 className="text-center font-bold mb-2 py-4 text-2xl ">
          Currently Cooking: <span></span>
        </h2>

        <hr />

        <table className="mt-4">
          <tbody className="mb-4 ">
            <tr className="text-[#878787] w-full mb-2">
              <td className="w-[4%] px-2"></td>
              <td className="w-[32%] lg:pl-4">Name</td>
              <td className="w-[32%] lg:pl-12">Time</td>
              <td className="w-[32%] lg:pl-20">Calories</td>
            </tr>
          </tbody>
        </table>
      </div>

      {currentlyCookings.map((nowCooking, idx) => (
        <CurrentlyCooking key={idx} nowCooking={nowCooking}></CurrentlyCooking>
      ))}

      <div className="flex justify-end gap-4 md:gap-32 lg:gap-16  px-2 md:px-28 lg:px-12 font-bold text-[#282828CC]">
        <p>
          Total Time = <br />
          <span>{preparingTime}</span> minutes
        </p>
        <p>
          Total Calories = <br />
          <span>{calories} </span> calories
        </p>
      </div>
    </div>
  );
};

export default CookingContainer;
