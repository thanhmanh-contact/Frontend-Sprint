import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";

interface Patient {
  id: number;
  hoTen: string;
  gioiTinh: string;
  namSinh: string;
  diaChi: string;
}

export default function App() {
  const [patients, setPatients] = useState<Patient[]>([
    {
      id: 1,
      hoTen: "",
      gioiTinh: "",
      namSinh: "",
      diaChi: "",
    },
  ]);

  const addPatient = () => {
    const newPatient: Patient = {
      id: Date.now(),
      hoTen: "",
      gioiTinh: "",
      namSinh: "",
      diaChi: "",
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
      <div className="w-[1000px] mx-auto">
        {/* Form */}
        <div className="bg-white border-2 rounded-lg shadow-sm">
          {/* Header inside form */}
          <div className="border-b border-gray-200 p-3 flex justify-between items-center">
            
            <h1 className="text-xl">Lập báo cáo sử dụng thuốc theo tháng</h1>
            <button className="text-gray-500 hover:text-gray-700 text-2xl leading-none">
              ×
            </button>
          </div>
        
          
          <div className="p-2">
            <div className="grid grid-cols-3 gap-2 mb-1">
              
              <div>
                <label className="block text-lg text-gray-700 mb-1">
                  Năm lập báo cáo
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="< Năm hiện hành >"
                    className="w-full px-2 py-1 pr-10 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                  {/* <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" /> */}
                </div>
              </div>
    
              
              {/* Loại phòng khám */}
              <div>
                <label className="block text-lg text-gray-700 mb-1">
                  Tháng lập báo cáo
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="< Tháng hiện hành >"
                    className="w-full px-2 py-1 pr-10 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                  {/* <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" /> */}
                </div>
              </div>
          
              {/* Tên phòng khám */}
              <div>
                {/* <label className="block text-lg text-gray-700 mb-1">
                  Loại phòng khám
                </label>
                <div className="relative">
                  <input
                  type="text"
                  className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                  />
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div> */}
              </div>

            </div>
          </div>
 

            {/* Danh sách bệnh nhân label */}
            {/* <div className="mb-3">
              <label className="block text-sm text-gray-700">
                Danh sách khám bệnh
              </label>
            </div> */}

            {/* Table */}
            <div className="border border-gray-300 rounded-md overflow-hidden bg-white m-2">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-300">
                      <th className="px-4 py-3 text-center text-sm text-gray-700 border-r border-gray-300 w-16">
                        STT
                      </th>
                      <th className="px-4 py-3 text-left text-sm text-gray-700 border-r border-gray-300">
                        Tên thuốc
                      </th>
                      <th className="px-4 py-3 text-left text-sm text-gray-700 border-r border-gray-300">
                        Đơn vị tính
                      </th>
                      <th className="px-4 py-3 text-left text-sm text-gray-700 border-r border-gray-300">
                        Số lượng tồn
                      </th>
                      <th className="px-4 py-3 text-left text-sm text-gray-700">
                        Số lượng dùng
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
                          <input
                            type="text"
                            value={patient.hoTen}
                            onChange={(e) =>
                              updatePatient(
                                patient.id,
                                "hoTen",
                                e.target.value,
                              )
                            }
                            className="bg-gray-100 w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400"
                          />
                        </td>
                        <td className="p-2 border-r border-gray-200">
                          <input
                            type="text"
                            value={patient.gioiTinh}
                            onChange={(e) =>
                              updatePatient(
                                patient.id,
                                "gioiTinh",
                                e.target.value,
                              )
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400"
                          />
                        </td>
                        <td className="p-2 border-r border-gray-200">
                          <input
                            type="text"
                            value={patient.namSinh}
                            onChange={(e) =>
                              updatePatient(
                                patient.id,
                                "namSinh",
                                e.target.value,
                              )
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400"
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={patient.diaChi}
                            onChange={(e) =>
                              updatePatient(
                                patient.id,
                                "diaChi",
                                e.target.value,
                              )
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-white rounded-xl">
                <div className="flex gap-3">
              
                  <button
                    onClick={addPatient}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm font-medium shadow-sm transition-colors"
                  >
                    Lập báo cáo doanh số
                  </button>
              
                  <button
                    onClick={addPatient}
                    className="flex-1  hover:bg-blue-600 text-white py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {/* Thêm bệnh nhân */}
                  </button>
              
                  <button
                    onClick={addPatient}
                    className="flex-1  hover:bg-blue-600 text-white py-2 rounded-md text-sm font-medium  transition-colors"
                  >
                    {/* Tìm kiếm bệnh nhân */}
                  </button>
              
                  <button
                    onClick={addPatient}
                    className="flex-1  hover:bg-blue-600 text-white py-2 rounded-md text-sm font-medium  transition-colors"
                  >
                    {/* Xóa bệnh nhân */}
                  </button>
              
                  <button
                    onClick={addPatient}
                    className="flex-1  hover:bg-blue-600 text-white py-2 rounded-md text-sm font-medium  transition-colors"
                  >
                    {/* Cập nhật bệnh nhân */}
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
