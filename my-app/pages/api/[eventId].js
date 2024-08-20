function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).jso({ message: "Invalid Input" });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    res.status(201).json({ message: "Added comment. ", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Pri", text: "A first comment" },
      { id: "c1", name: "Roj", text: "A second comment" },
    ];

    res.status(200).json({ comments: dummyList });
  }
}

export default handler;
