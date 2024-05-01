
export const formatDate = (inputDate:any) => {
  // Create a new Date object
  const date = new Date(inputDate);

  // Define month names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get day, month, and year
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // Format the date
  const formattedDate = `${day} ${months[monthIndex]}, ${year}`;

  return formattedDate;
};
