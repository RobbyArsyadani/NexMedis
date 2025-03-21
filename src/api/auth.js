import axios from "axios";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post("https://reqres.in/api/login", {
      email,
      password,
    });
    const token = response.data.token;
    return { email, token };
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const registerUser = async (email, password) => {
  try {
    const response = await axios.post("https://reqres.in/api/register", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const getUser = async (email) => {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    const users = response.data.data;

    const user = users.find((user) => user.email === email);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (err) {
    console.error("Error fetching user data:", err.message);
    throw err;
  }
};

// export const getUser = async (email) => {
//   try {
//     let users = [];
//     let page = 1;
//     let totalPages = 1;

//     // Loop untuk mengambil semua halaman
//     while (page <= totalPages) {
//       const response = await axios.get(
//         `https://reqres.in/api/users?page=${page}`
//       );
//       const data = response.data;

//       users = [...users, ...data.data]; // Gabungkan data user
//       totalPages = data.total_pages; // Ambil jumlah total halaman

//       page++;
//     }

//     // Cari user berdasarkan email
//     const user = users.find((user) => user.email === email);
//     if (!user) {
//       throw new Error("User not found");
//     }

//     return user;
//   } catch (err) {
//     console.error("Error fetching user data:", err.message);
//     throw err;
//   }
// };

