import ServicoExercicio from "../services/service.js";
const resultado = 0;
const servico = new ServicoExercicio()

export default class ControllerExercicio {

  Somar(req, res) {
    try {
      const num1 = req.body.num1;
      const num2 = req.body.num2;
  
      // Verificar se num1 e num2 não estão vazios
      if (!num1 || !num2) {
        throw new Error("Os valores de num1 e num2 devem ser fornecidos.");
      }
  
      // Validar se num1 e num2 são números
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Os valores de num1 e num2 devem ser números válidos.");
      }
  
      const result = servico.Somar(parseInt(num1), parseInt(num2));
  
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ message: "Erro ao somar", error: error.message });
    }
  }
  
  
  

  Subtrair(req, res) {
    try {
      const num1 = req.body.num1;
      const num2 = req.body.num2;

      if (!num1 || !num2) {
        throw new Error("Os valores de num1 e num2 devem ser fornecidos.");
      }

      const validaNumero =  /^-?\d*$/;
      if (!validaNumero.test(num1) || !validaNumero.test(num2)) {
        throw new Error("Os valores de num1 e num2 devem conter apenas números.");
      }

      const result = servico.Subtrair(parseInt(num1), parseInt(num2));

      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ message: "Erro ao subtrair", error: error.message });
    }
  } 

  Dividir(req, res) {
    try {
      const num1 = req.body.num1;
      const num2 = req.body.num2;
      if (!num1 || !num2) {
        throw new Error("Os valores de num1 e num2 devem ser fornecidos.");
      }

      const validaNumero =  /^-?\d*$/;
      if (!validaNumero.test(num1) || !validaNumero.test(num2)) {
        throw new Error("Os valores de num1 e num2 devem conter apenas números.");
      }

      const result = servico.Subtrair(parseInt(num1), parseInt(num2));

      res.status(200).json({ nome: result });
    } catch (error) {
      res.status(500).json({ message: "Erro ao Dividir" });
    }
  }

  Multiplicar(req, res) {
    try {
      const num1 = req.body.num1;
      const num2 = req.body.num2;

      if (!num1 || !num2) {
        throw new Error("Os valores de num1 e num2 devem ser fornecidos.");
      }

      const validaNumero =  /^-?\d*$/;
      if (!validaNumero.test(num1) || !validaNumero.test(num2)) {
        throw new Error("Os valores de num1 e num2 devem conter apenas números.");
      }

      const result = servico.Subtrair(parseInt(num1), parseInt(num2));

      res.status(200).json({ nome: result });
    } catch (error) {
      res.status(500).json({ message: "Erro ao Multiplicar" });
    }
  }

}