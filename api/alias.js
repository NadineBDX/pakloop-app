import fs from "fs";
import path from "path";

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

  // Lire le contenu de dashboard.html
  const filePath = path.resolve("./", "dashboard.html");
  let html = fs.readFileSync(filePath, "utf8");

  // Remplacer <?= id ?> dans le HTML
  html = html.replace("<?= id ?>", id);

  // Envoyer la page
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(html);
}
