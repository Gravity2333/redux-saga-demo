function applyMiddleware(middleWares = []) {
  return (store) => {
    middleWares.reverse();
    middleWares.forEach((middleWare) => middleWare(store));
  };
}

export default applyMiddleware;
