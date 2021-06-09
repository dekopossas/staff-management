import {
  valorPara,
  taxa,
  parcela,
  deducao,
} from './constants';

interface employee {
  id: number;
  fullName: string;
  cpf: string;
  wage: string;
  discount: string;
  dependents: string;
}

export const defineSalarioIR = (valoresParaCalculoDoSalarioIR: employee) => {
  const{ wage, discount, dependents } = valoresParaCalculoDoSalarioIR
  const salario = parseInt(wage)
  const desconto = parseFloat(discount)
  const dependentes = parseInt(dependents) * deducao.POR_DEPENDETE
  
  const resultado_SALARIOIR = salario - desconto - dependentes;
  
  return resultado_SALARIOIR;
};

export const descontaAliquotaEIRPF = (salarioIR: number) => {
  if (salarioIR <= valorPara.ISENCAO) {
    return salarioIR;
  } else if (salarioIR <= valorPara.ALIQUOTA_MENOR_E_PARCELA_MENOR_DE_IRPF) {
    return salarioIR * taxa.ALIQUOTA_MENOR - parcela.MENOR_IRPF;
  } else if (salarioIR <= valorPara.ALIQUOTA_MEDIA_E_PARCELA_MEDIA_DE_IRPF) {
    return salarioIR * taxa.ALIQUOTA_MEDIA - parcela.MEDIA_DE_IRPF;
  } else if (salarioIR <= valorPara.ALIQUOTA_GRANDE_E_PARCELA_GRANDE_DE_IRPF) {
    return salarioIR * taxa.ALIQUOTA_GRANDE - parcela.GRANDE_DE_IRPF;
  }
  return salarioIR * taxa.MAXIMA - parcela.MAXIMA;
};
