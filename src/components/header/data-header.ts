export const useGetHeaderList = () => {
  const headerLists: {
    name: string;
    link: string;
  }[] = [
    {
      name: "Indonesia",
      link: "/",
    },
    {
      name: "Programming",
      link: "/programming",
    },
    {
      name: "COVID-19",
      link: "/covid-19",
    },
    {
      name: "Saved",
      link: "/saved",
    },
  ];
  return { headerLists };
};
