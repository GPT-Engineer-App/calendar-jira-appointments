import { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import axios from "axios";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch Outlook calendar events
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/outlook/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching calendar events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <Box p={4}>
      <Heading mb={4}>Outlook Calendar</Heading>
      {events.length === 0 ? (
        <Text>No events found.</Text>
      ) : (
        events.map((event) => (
          <Box key={event.id} p={4} mb={4} borderWidth={1} borderRadius="md">
            <Text fontWeight="bold">{event.subject}</Text>
            <Text>{new Date(event.start.dateTime).toLocaleString()}</Text>
            <Text>{new Date(event.end.dateTime).toLocaleString()}</Text>
          </Box>
        ))
      )}
    </Box>
  );
};

export default Calendar;