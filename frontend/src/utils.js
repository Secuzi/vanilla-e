export const parseRequestUrl = () => {
  const url = document.location.hash.toLowerCase();
  console.log("URL: ", url);

  const request = url.split("/");
  console.log("REQUEST: ", request);
  return {
    resource: request[1],
    id: request[2],
    verb: request[3],
  };
};
