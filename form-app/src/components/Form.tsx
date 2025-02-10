import { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    address: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Dữ liệu:", formData);
  };

  return (
    <div className="text-center bg-neutral-50 p-5 h-full">
      <h1 className="text-5xl font-bold m-2">Xin mời nhập thông tin</h1>
      <br></br>
      <form
        className="w-2/5 justify-self-center mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full">
          <label>Họ và tên: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 m-4 ml-0 w-1/2 text-2xl shadow-inner"
            placeholder="Mời nhập tên"
          />
          <br></br>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 m-4 mr-0 w-1/2 text-2xl shadow-inner"
            placeholder="Mời nhập email"
          />
          <br></br>
          <label>Tuổi: </label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="p-4 m-4 ml-0 w-1/2 text-2xl shadow-inner"
            placeholder="Mời nhập số tuổi"
          />
          <br></br>
          <label>Số điện thoại: </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-4 m-4 mr-0 w-1/2 text-2xl shadow-inner"
            placeholder="Mời nhập số điện thoại"
          />
          <br></br>
          <label>Địa chỉ: </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="p-4 m-4 w-full h-40 mx-auto text-2xl shadow-inner"
            placeholder="Mời nhập địa chỉ"
          ></input>
        </div>
        <button
          type="submit"
          className="bg-sky-700 text-white text-xl py-4 px-24 font-bold rounded-sm"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
};
