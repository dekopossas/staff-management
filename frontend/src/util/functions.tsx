import {
  VALOR_PARA,
  TAXA,
  PARCELA,
  DEDUCAO,
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
  const dependentes = parseInt(dependents) * DEDUCAO.POR_DEPENDETE
  
  const resultado_SALARIOIR = salario - desconto - dependentes;
  
  return resultado_SALARIOIR;
};

export const descontaAliquotaEIRPF = (salarioIR: number) => {
  if (salarioIR <= VALOR_PARA.ISENCAO) {
    return salarioIR;
  } else if (salarioIR <= VALOR_PARA.ALIQUOTA_MENOR_E_PARCELA_MENOR_DE_IRPF) {
    return salarioIR * TAXA.ALIQUOTA_MENOR - PARCELA.MENOR_IRPF;
  } else if (salarioIR <= VALOR_PARA.ALIQUOTA_MEDIA_E_PARCELA_MEDIA_DE_IRPF) {
    return salarioIR * TAXA.ALIQUOTA_MEDIA - PARCELA.MEDIA_DE_IRPF;
  } else if (salarioIR <= VALOR_PARA.ALIQUOTA_GRANDE_E_PARCELA_GRANDE_DE_IRPF) {
    return salarioIR * TAXA.ALIQUOTA_GRANDE - PARCELA.GRANDE_DE_IRPF;
  }
  return salarioIR * TAXA.MAXIMA - PARCELA.MAXIMA;
};
