function usePost() {
  const postRequestHandler = async (reqObj) => {
    try {
      const response = await fetch(`${reqObj.url}`, {
        method: "POST",
        body: JSON.stringify(reqObj.data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data.name;
    } catch (err) {
      console.log(err);
    }
  };

  return [postRequestHandler];
}

export default usePost;
