const getHello = () => {
  axios.get("/api/hello").then((response) => console.log(response));
};
getHello();
