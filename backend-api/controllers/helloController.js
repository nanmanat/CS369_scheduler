export const getHello = (req, res) => {
    res.json({ message: 'Hello World!' });
  };
  
  export const postHello = (req, res) => {
    const { name } = req.body;
    res.json({ message: `Hello, ${name || 'stranger'}!` });
  };
  