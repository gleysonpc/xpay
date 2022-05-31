interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'kasjflasdlifeianslnfieahnliksfeasfasdfasdffasdfasdf',
        user: {
          name: 'Gleyson Carvalho',
          email: 'gleysonpc@gmail.com',
        },
      });
    }, 2000);
  });
}
