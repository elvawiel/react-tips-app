const API_URL = "http://localhost:5000/api/tips";

export const fetchTips = async () => {
  const response = await fetch(API_URL);

  return response.json();
};

export const createTipApi = async (tipData) => {
  const response = await fetch(API_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(tipData),
  });

  return response.json();
};

export const deleteTipApi = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};

export const fetchTipById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  return response.json();
};
