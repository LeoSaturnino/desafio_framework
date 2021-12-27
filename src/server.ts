import express from "express";
import { Request, Response } from "express";

import { CalcularDivisoresController } from "./controller/calcular-divisores-controller";

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.get("/calc/:num", (req: Request, res: Response): Response => {
  const calc = new CalcularDivisoresController();
  const resp = calc.executar(req);

  return res.send(resp);
});
