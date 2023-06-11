const fetchData = async (url: string, data: any, method:string, options?: RequestInit) => {
    const requestOptions: RequestInit = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      ...options,
    };
  
    try {
      const response = await fetch(url, requestOptions);
      const responseData = await response.json();
      return responseData;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  export default fetchData;