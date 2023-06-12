const postData = async (url: string, data: any, options?: RequestInit) => {
    const requestOptions: RequestInit = {
      method: "POST",
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

  export default postData;