import BaseComponent from "./BaseComponent";

const SwimmingAreaOpenHours: {
  type: string;
  normalHours: string;
  weekendHours: string;
}[] = [
  {
    type: "STREFA BASENOWA",
    normalHours: "9:00 - 22:00",
    weekendHours: "9:00 - 22:00",
  },
  {
    type: "STREFA SAUN",
    normalHours: "11:00 - 22:00",
    weekendHours: "9:00 - 22:00",
  },
  {
    type: "STREFA SPA",
    normalHours: "12:00 - 21:00	",
    weekendHours: "11:00 - 21:00  ",
  },
  {
    type: "STREFA SIŁOWNI",
    normalHours: "5:00 - 24:00	",
    weekendHours: "5:00 - 24:00  ",
  },
  {
    type: "BAR",
    normalHours: "19:00 - 22:00	",
    weekendHours: "18:00 - 22:00  ",
  },
];

const OpenHours = () => {
  return (
    <BaseComponent style="h-full flex flex-col justify-center items-center max-h-screen">
      <div className="overflow-x-auto mx-6 lg:-mx-8 md:w-3/4">
        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold  ">
              Godziny otwarcia
            </h2>
            <table className="min-w-full text-center my-10">
              <thead className="border-b bg-[#fb8500]">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white  py-4"
                  >
                    Typ strefy
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white  py-4"
                  >
                    Dni powszednie
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white  py-4"
                  >
                    Weekendy i święta
                  </th>
                </tr>
              </thead>
              <tbody>
                {SwimmingAreaOpenHours.map((area) => (
                  <tr className="bg-white border-b">
                    <td className="text-sm text-gray-900 font-bold  py-4 whitespace-nowrap">
                      {area.type}
                    </td>
                    <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap">
                      {area.normalHours}
                    </td>
                    <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap">
                      {area.weekendHours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </BaseComponent>
  );
};

export default OpenHours;
