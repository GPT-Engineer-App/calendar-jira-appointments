import axios from "axios";

const getOutlookEvents = async () => {
  try {
    const response = await axios.get("/api/outlook/events");
    return response.data;
  } catch (error) {
    console.error("Error fetching Outlook events:", error);
    throw error;
  }
};

export { getOutlookEvents };