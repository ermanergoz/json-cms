export const updateSLADate = async () => {
  const newData = {
    SLA_DATE: "02/04/2025",
    /*Other fields can be added here */
  };
  
    try {
      const response = await fetch('http://localhost:5001/update-sla-date', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
  
      if (response.ok) {
        console.log('SLA_DATE updated successfully');
      } else {
        console.error('Failed to update SLA_DATE');
      }
    } catch (error) {
      console.error('Error updating SLA_DATE:', error);
    }
  };
  