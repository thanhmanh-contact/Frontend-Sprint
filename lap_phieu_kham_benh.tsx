import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";

interface Patient {
  id: number;
  tenThuoc: string;
  donVi: string;
  soLuongConLai: string;
  soLuongKe: string;
  cachDung: string;
}

export default function App() {
  const [patients, setPatients] = useState<Patient[]>([
    {
      id: 1,
      tenThuoc: "",
      donVi: "",
      soLuongConLai: "",
      soLuongKe: "",
      cachDung: "",
    },
  ]);

  const addPatient = () => {
    const newPatient: Patient = {
      id: Date.now(),
      tenThuoc: "",
      donVi: "",
      soLuongConLai: "",
      soLuongKe: "",
      cachDung: "",
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
      <div className="w-[900px] mx-auto">
        {/* Form */}
        <div className="bg-white border-2 rounded-lg shadow-sm">
          {/* Header inside form */}
          <div className="border-b border-gray-200 p-3 flex justify-between items-center">
            <h1 className="text-2xl">Lập phiếu khám bệnh</h1>
            <button className="text-gray-500 hover:text-gray-700 text-2xl leading-none">
              ×
            </button>
          </div>

          <div className="p-2">
            <div className="grid grid-cols-4 gap-2 mb-1">

              <div>
                <label className="block text-lg text-gray-700 mb-1">
                  Mã phiếu khám bệnh
                </label>
                <div className="relative">
                  <input
                  type="text"
                  placeholder="<Giá trị phát sinh>"
                  className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                  /> 
                  {/* <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" /> */}
                </div>
              </div>
              
              {/* Ngày khám */}
              <div>
                <label className="block text-lg text-gray-700 mb-1">
                  Ngày khám
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="<Ngày hiện hành>"
                    className="w-full px-2 py-1 pr-10 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Loại phòng khám */}
              {/* <div>
                <label className="block text-lg text-gray-700 mb-1">
                  Mã loại phòng khám
                </label>
                <input
                  type="text"
                  className="w-full px-2 py-1 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
              </div> */}

              <div>
                <label className="block text-lg text-gray-700 mb-1">
                  Tên loại phòng khám
                </label>
                <div className="relative">
                  <input
                  type="text"
                  className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                  />
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Mã bệnh nhân */}
              {/* <div>
                <label className="block text-lg text-gray-700 mb-1">
                  Mã bệnh nhân
                </label>
                <input
                  type="text"
                  disabled
                  className="w-full px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                />
              </div> */}

              <div>
                <label className="block text-lg text-gray-700 mb-1">
                  Họ tên bệnh nhân
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                  />
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>              
              </div>

              <div>
                <label className="block text-lg text-gray-700 mb-1">
                  Triệu chứng
                </label>
                <input
                  type="text"
                  disabled
                  className="w-full px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                />
              </div>

              {/* <div>
                <label className="block text-lg text-gray-700 mb-1">
                  Mã loại bệnh dự đoán
                </label>
                <input
                  type="text"
                  disabled
                  className="w-full px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                />
              </div> */}

              <div>
                <label className="block text-lg text-gray-700 mb-1">
                  Tên loại bệnh dự đoán
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                  />
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-lg text-gray-700 mb-1">
                  Ghi chú
                </label>
                <input
                  type="text"
                  disabled
                  className="w-full px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                />
              </div>

              

              {/* <div>
                <label className="block text-lg text-gray-700 mb-1">
                  Mã thuốc
                </label>
                <input
                  type="text"
                  disabled
                  className="w-full px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                />
              </div> */}

              {/* <div>
                <label className="block text-lg text-gray-700 mb-1">
                  Tên thuốc
                </label>
                <div className="relative">
                  <input
                    type="text"
                    disabled
                    className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                  />
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-lg text-gray-700 mb-1">
                  Đơn vị
                </label>
                <div className="relative">
                  <input
                    type="text"
                    disabled
                    className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                  />
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div> 
              </div>

              <div>
                <label className="block text-lg text-gray-700 mb-1">
                  Số lượng kê
                </label>
                <input
                  type="text"
                  disabled
                  className="w-full px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-lg text-gray-700 mb-1">
                  Cách dùng
                </label>
                <div className="relative">
                  <input
                  type="text"
                  disabled
                  className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                  />
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />

                </div>
              </div> */}
              <div>
                <label className="block text-lg text-gray-700 mb-1">
                  Tổng số lượng thuốc kê
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                  />
                  {/* <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" /> */}
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
            
            <div className="border border-gray-300 rounded-md overflow-hidden bg-white mb-2 mt-2">
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
                        Đơn vị 
                      </th>
                      <th className="px-4 py-3 text-left text-sm text-gray-700 border-r border-gray-300">
                        Số lượng còn lại
                      </th>
                      <th className="px-4 py-3 text-left text-sm text-gray-700 border-r border-gray-300">
                        Số lượng kê
                      </th>
                      <th className="px-4 py-3 text-left text-sm text-gray-700">
                        Cách dùng
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
                      
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                          </div>
                        </td>
                        <td className="p-2 border-r border-gray-200">
                          <div className="relative">
                            <input
                              type="text"
                              disabled
                              className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                            />
                      
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                          </div>
                        </td>
                        <td className="p-2 border-r border-gray-200">
                          <div className="relative">
                            <input
                              type="text"
                              disabled
                              className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                            />
                      
                            {/* <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" /> */}
                          </div>
                        </td>
                        <td className="p-2 border-r border-gray-200">
                          <div className="relative">
                            <input
                              type="text"
                              disabled
                              className="w-full px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                            />
                      
                            {/* <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" /> */}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="relative">
                            <input
                              type="text"
                              disabled
                              className="w-full bg-gray-100 px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
                            />
                      
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-1 bg-white rounded-xl">
                <div className="flex gap-1">
              
                  <button
                    onClick={addPatient}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm font-medium shadow-sm transition-colors"
                  >
                    Lập phiếu khám bệnh
                  </button>
              
                  <button
                    onClick={addPatient}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Tra cứu bệnh nhân
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
    </div>
  );
}