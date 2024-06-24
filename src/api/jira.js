import axios from "axios";

const getJiraTickets = async () => {
  try {
    const response = await axios.get("/api/jira/tickets");
    return response.data;
  } catch (error) {
    console.error("Error fetching JIRA tickets:", error);
    throw error;
  }
};

export { getJiraTickets };