export default function handler(req, res) {
  const alias = req.query.alias;

  // Dictionnaire des alias clients
  const realClientIds = {
    "A13F": "NAD",
    "X9B2": "MK01",
    "P7TQ": "TEST02"
  };

  const id = realClientIds[alias];
  if (!id) {
    res.status(404).send("Alias inconnu");
    return;
  }

  // Redirection vers la WebApp Apps Script universelle
  const webAppURL = "https://script.google.com/macros/s/AKfycbwUhfff5D7VopLqu2OexQl_NNjjlpnkMNSCYFFSvu1FzsfNT-zM19QTYqfQFRAkFhuw/exec";

  res.writeHead(302, {
    Location: `${webAppURL}?id=${id}`
  });
  res.end();
}
