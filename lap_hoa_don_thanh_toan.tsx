import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";

interface Patient {
    hoTen: number;
    ngayKham: string;
    loaiPhongKham: string;
    loaiBenh: string;
    trieuChung: string;
}

export default function App() {
    const [patients, setPatients] = useState<Patient[]>([
        {
            id: 1,
            hoTen: "",
            ngayKham: "",
            loaiPhongKham: "",
            loaiBenh: "",
            trieuChung: "",
        },
    ]);

    const addPatient = () => {
        const newPatient: Patient = {
            id: Date.now(),
            hoTen: "",
            ngayKham: "",
            loaiPhongKham: "",
            loaiBenh: "",
            trieuChung: "",
        };
        setPatients([...patients, newPatient]);
    };

    const updatePatient = (
        id: number,
        field: keyof Patient,
        value: string,
    ) => {
        setPatients(
            patients.map((patient) =>
                patient.id === id
                    ? { ...patient, [field]: value }
                    : patient,
            ),
        );
    };

    return (
        <div className="min-h-screen bg-white p-2">
            <div className="w-[500px] mx-auto">
                {/* Form */}
                <div className="bg-white border-2 rounded-lg shadow-sm">
                    {/* Header inside form */}
                    <div className="border-b border-gray-200 p-3 flex justify-between items-center">
                        <h1 className="text-2xl">Lập hóa đơn thanh toán</h1>
                        <button className="text-gray-500 hover:text-gray-700 text-2xl leading-none">
                            ×
                        </button>
                    </div>

                    <div className="p-2">
                        <div className="grid grid-cols-2 gap-2 mb-1">


                            <div>
                                <label className="block text-lg text-gray-700 mb-1">
                                    Mã phiếu khám bệnh
                                </label>

                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full px-2 py-1 border border-gray-300 rounded-md pr-10 cursor-not-allowed"
                                        readOnly
                                    />

                                    <div className="absolute top-0 right-0 w-10 h-full bg-white border border-gray-300 flex items-center justify-center rounded-r-md">
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                    </div>
                                </div>
                            </div>




                            <div>
                                <label className="block text-lg text-gray-700 mb-1">
                                    Họ tên bệnh nhân
                                </label>

                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md pr-10 cursor-not-allowed"
                                        readOnly
                                    />

                                    {/* <div className="absolute top-0 right-0 w-10 h-full bg-white border border-gray-300 flex items-center justify-center rounded-r-md">
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div> */}
                                </div>
                            </div>


                            <div>
                                <label className="block text-lg text-gray-700 mb-1">
                                    Ngày khám
                                </label>

                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md pr-10 cursor-not-allowed"
                                        readOnly
                                    />

                                    {/* <div className="absolute top-0 right-0 w-10 h-full bg-white border border-gray-300 flex items-center justify-center rounded-r-md">
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div> */}
                                </div>
                            </div>


                            <div>
                                <label className="block text-lg text-gray-700 mb-1">
                                    Loại phòng khám
                                </label>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full bg-gray-100 px-2 py-1 text-center placeholder:text-center border border-gray-300 rounded-md cursor-not-allow"
                                />
                            </div>

                            <div>
                                <label className="block text-lg text-gray-700 mb-1">
                                    Tiền khám
                                </label>

                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md pr-10 cursor-not-allowed"
                                        readOnly
                                    />

                                    {/* <div className="absolute top-0 right-0 w-10 h-full bg-white border border-gray-300 flex items-center justify-center rounded-r-md">
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div> */}
                                </div>
                            </div>

                            <div>
                                <label className="block text-lg text-gray-700 mb-1">
                                    Tiền thuốc
                                </label>

                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md pr-10 cursor-not-allowed"
                                        readOnly
                                    />

                                    {/* <div className="absolute top-0 right-0 w-10 h-full bg-white border border-gray-300 flex items-center justify-center rounded-r-md">
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div> */}
                                </div>
                            </div>

                            <div>
                                <label className="block text-lg text-gray-700 mb-1">
                                    Tổng tiền
                                </label>


                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md pr-10 cursor-not-allowed"
                                        readOnly
                                    />

                                    {/* <div className="absolute top-0 right-0 w-10 h-full bg-white border border-gray-300 flex items-center justify-center rounded-r-md">
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div> */}
                                </div>



                            </div>
                        </div>
                    </div>

                    {/* <div className="p-2">
          <div className="grid grid-cols-2 gap-2 mb-1">
        
            <div className="flex items-center w-full gap-2">
        
              <label className="whitespace-nowrap text-lg text-gray-700">
                Ngày khám
              </label>
        
              <div className="flex items-center gap-2 w-full">
        
                <label className="flex-1 text-lg text-red-500">
                  từ
                </label>
        
                <input
                  type="text"
                  className="w-1/2 placeholder:text-sm px-2 py-1 border border-gray-300 rounded-md"
                />
        
                <label className="flex-1 text-lg text-red-500">
                  đến
                </label>
        
                <input
                  type="text"
                  className="w-1/2 placeholder:text-sm px-2 py-1 border border-gray-300 rounded-md"
                />
        
              </div>
    
            </div>

            <div className="flex items-center w-full gap-2">
        
              <label className="whitespace-nowrap text-lg text-gray-700">
                Năm sinh
              </label>
        
              <div className="flex items-center gap-2 w-full">
        
                <label className="flex-1 text-lg text-red-500">
                  từ
                </label>
        
                <input
                  type="text"
                  className="w-1/2 placeholder:text-sm px-2 py-1 border border-gray-300 rounded-md"
                />
        
                <label className="flex-1 text-lg text-red-500">
                  đến
                </label>
        
                <input
                  type="text"
                  className="w-1/2 placeholder:text-sm px-2 py-1 border border-gray-300 rounded-md"
                />
        
              </div>

            </div>

            <div className="flex items-center w-full gap-2">
        
              <label className="whitespace-nowrap text-lg text-gray-700">
                Số lượng thuốc kê
              </label>
        
              <div className="flex items-center gap-2 w-full">
        
                <label className="flex-1 text-lg text-red-500">
                  từ
                </label>
        
                <input
                  type="text"
                  className="w-1/2 placeholder:text-sm px-2 py-1 border border-gray-300 rounded-md"
                />
        
                <label className="flex-1 text-lg text-red-500">
                  đến
                </label>
        
                <input
                  type="text"
                  className="w-1/2 placeholder:text-sm px-2 py-1 border border-gray-300 rounded-md"
                />
        
              </div>

            </div>

          <div className="flex items-center w-full gap-2">
        
              <label className="whitespace-nowrap text-lg text-gray-700">
                Số lượng thuốc tồn
              </label>
        
              <div className="flex items-center gap-2 w-full">
        
                <label className="flex-1 text-lg text-red-500">
                  từ
                </label>
        
                <input
                  type="text"
                  className="w-1/2 placeholder:text-sm px-2 py-1 border border-gray-300 rounded-md"
                />
        
                <label className="flex-1 text-lg text-red-500">
                  đến
                </label>
        
                <input
                  type="text"
                  className="w-1/2 placeholder:text-sm px-2 py-1 border border-gray-300 rounded-md"
                />
        
              </div>

            </div>

          </div>
           
        </div> */}

                    {/* Table */}

                    {/* <div className="border border-gray-300 rounded-md overflow-hidden bg-white m-2">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-300">
                      <th className="px-4 py-3 text-center text-sm text-gray-700 border-r border-gray-300 w-16">
                        STT
                      </th>
                      <th className="px-4 py-3 text-left text-sm text-gray-700 border-r border-gray-300">
                        Họ tên bệnh nhân
                      </th>
                      <th className="px-4 py-3 text-left text-sm text-gray-700 border-r border-gray-300">
                        Ngày khám
                      </th>
                      <th className="px-4 py-3 text-left text-sm text-gray-700 border-r border-gray-300">
                        Loại phòng khám
                      </th>
                      <th className="px-4 py-3 text-left text-sm text-gray-700 border-r border-gray-300">
                        Loại bệnh
                      </th>
                      <th className="px-4 py-3 text-left text-sm text-gray-700">
                        Triệu chứng
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map((patient, index) => (
                      <tr
                        key={patient.id}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <td className="p-2 border-r border-gray-200 text-center">
                          <span className="text-gray-700">{index + 1}</span>
                        </td>
                        <td className="p-2 border-r border-gray-200">
                          <div className="relative">
                            <input
                              type="text"
                              disabled
                              className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                            />
                       */}
                    {/* <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" /> */}
                    {/* </div>
                        </td>
                        <td className="p-2 border-r border-gray-200">
                          <div className="relative">
                            <input
                              type="text"
                              disabled
                              className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                            /> */}

                    {/* <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" /> */}
                    {/* </div>
                        </td>
                        <td className="p-2 border-r border-gray-200">
                          <div className="relative">
                            <input
                              type="text"
                              disabled
                              className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                            />  */}

                    {/* <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" /> */}
                    {/* </div>
                        </td>
                        <td className="p-2 border-r border-gray-200">
                          <div className="relative">
                            <input
                              type="text"
                              disabled
                              className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                            /> */}

                    {/* <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" /> */}
                    {/* </div>
                        </td>
                        <td className="p-2">
                          <div className="relative">
                            <input
                              type="text"
                              disabled
                              className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                            />
                       */}
                    {/* <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" /> */}
                    {/* </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>  */}

                    <div className="p-1 bg-white rounded-xl">
                        <div className="flex gap-1">

                            <button
                                onClick={addPatient}
                                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm font-medium shadow-sm transition-colors"
                            >
                                Lập hóa đơn
                            </button>





                            <button
                                onClick={addPatient}
                                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm font-medium  transition-colors"
                            >
                                Tìm phiếu khám bệnh
                            </button>

                            <button
                                onClick={addPatient}
                                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm font-medium  transition-colors"
                            >
                                Thoát
                            </button>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}