export default async function handler(req, res) {
  const alias = req.query.alias;
  const realClientIds = {
    "A13F": "NAD",
    "X9B2": "MK01",
    "P7TQ": "TEST02"
  };
  const id = realClientIds[alias];
  if (!id) return res.status(404).send("Alias inconnu");
  res.redirect(`/dashboard.html?id=${id}`);
}
