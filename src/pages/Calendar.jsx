import { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Mock data for Outlook calendar events
    const mockEvents = [
      {
        id: "1",
        subject: "Team Meeting",
        start: { dateTime: new Date().toISOString() },
        end: { dateTime: new Date(new Date().getTime() + 60 * 60 * 1000).toISOString() },
      },
      {
        id: "2",
        subject: "Project Deadline",
        start: { dateTime: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString() },
        end: { dateTime: new Date(new Date().getTime() + 25 * 60 * 60 * 1000).toISOString() },
      },
      {
        id: "3",
        subject: "Client Call",
        start: { dateTime: new Date(new Date().getTime() + 48 * 60 * 60 * 1000).toISOString() },
        end: { dateTime: new Date(new Date().getTime() + 49 * 60 * 60 * 1000).toISOString() },
      },
    ];

    setEvents(mockEvents);
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