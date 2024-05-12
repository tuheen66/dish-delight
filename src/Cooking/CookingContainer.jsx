

const CookingContainer = () => {
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
                  <td className="w-[4%]  px-2"> </td>
                  <td className="w-[24%] px-2 lg:pl-10">Name</td>
                  <td className="w-[24%]  px-2 lg:pl-10">Time </td>
                  <td className="w-[24%]  px-2 lg:pl-10">Calories </td>
                  <td className="w-[24%]"></td>
                </tr>
              </tbody>
            </table>

           
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

      

      <div className="flex justify-end gap-4 md:gap-32 lg:gap-16  px-2 md:px-28 lg:px-12 font-bold text-[#282828CC]">
        <p>
          Total Time = <br />
          <span></span> minutes
        </p>
        <p>
          Total Calories = <br />
          <span> </span> calories
        </p>
      </div>
    </div>
    );
};

export default CookingContainer;