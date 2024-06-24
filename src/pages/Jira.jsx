import { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Jira = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch JIRA tickets
    const fetchTickets = async () => {
      try {
        const response = await axios.get("/api/jira/tickets");
        setTickets(response.data);
      } catch (error) {
        console.error("Error fetching JIRA tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // Handle drag and drop logic here
    console.log("Dragged from", source, "to", destination);
  };

  return (
    <Box p={4}>
      <Heading mb={4}>JIRA Tickets</Heading>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tickets">
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {tickets.map((ticket, index) => (
                <Draggable key={ticket.id} draggableId={ticket.id} index={index}>
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      p={4}
                      mb={4}
                      borderWidth={1}
                      borderRadius="md"
                    >
                      <Text fontWeight="bold">{ticket.summary}</Text>
                      <Text>Story Points: {ticket.storyPoints}</Text>
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

export default Jira;