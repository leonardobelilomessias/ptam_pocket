import { ScrollView, StyleSheet, Text, View } from "react-native";
import { chauvenetLimits } from "../../constants/chauvnet";
import { itmType } from "../types/typeItems";
import { TabeleCalcule } from "@/components/TableCalculeXi";
import { TabeleCalculeD } from "@/components/TableCalculeD";
import { TabeleCalculeXiXm2 } from "@/components/TableCalculeXiXm2";
import { TabeleCalculeOutCv } from "@/components/TableCalculeOutCv";

export default function Calcule() {
  const items = [
    { title: "teste1", price: 399000, mt: 38, xi: 0, xm: 0, d: 0, s: 0, powXiXm2: 0, cv: 0, outCv: 0 },
    { title: "teste1", price: 398000, mt: 40, xi: 0, xm: 0, d: 0, s: 0, powXiXm2: 0, cv: 0, outCv: 0 },
    { title: "teste1", price: 299000, mt: 32, xi: 0, xm: 0, d: 0, s: 0, powXiXm2: 0, cv: 0, outCv: 0 },
    { title: "teste1", price: 297000, mt: 42, xi: 0, xm: 0, d: 0, s: 0, powXiXm2: 0, cv: 0, outCv: 0 },
    { title: "teste1", price: 288000, mt: 38, xi: 0, xm: 0, d: 0, s: 0, powXiXm2: 0, cv: 0, outCv: 0 },
    { title: "teste1", price: 298000, mt: 40, xi: 0, xm: 0, d: 0, s: 0, powXiXm2: 0, cv: 0, outCv: 0 },
    { title: "teste1", price: 294000, mt: 38, xi: 0, xm: 0, d: 0, s: 0, powXiXm2: 0, cv: 0, outCv: 0 },
  ];

  // Refina a amostra removendo outliers conforme o critério de Chauvenet
  const refinedItems = refineAmostra(items);

  // Área do imóvel a ser avaliado (ex: 230 m²)
  const propertyArea = 50;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ padding: 24 }}>
        <RenderCalculoXi items={refinedItems} />
        <RenderXm items={refinedItems} />
        <RenderD items={refinedItems} />
        <RenderXiXm2 items={refinedItems} />
        <RenderS items={refinedItems} />
        <RenderCv items={refinedItems} />
        <RenderOutCv items={refinedItems} />

        <RenderFinalEvaluation items={refinedItems} propertyArea={propertyArea} />

        <Text style={styles.title}>
          Chauvenet limite para {refinedItems.length} amostras ={" "}
          {chauvenetLimits[refinedItems.length] || "N/A"}
        </Text>
      </View>
    </ScrollView>
  );
}

function RenderCalculoXi({ items }: { items: itmType[] }) {
  const resultxi = calculoXi(items).sort((a, b) => a.xi - b.xi);
  return (
    <View style={{ marginVertical: 12 }}>
      <Text style={styles.title}>Cálculo das áreas das amostras (Xi)</Text>
      <TabeleCalcule items={resultxi} />
    </View>
  );
}

function RenderXm({ items }: { items: itmType[] }) {
  const media = calculoM(items);
  const mediaFormatada = media.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  
  return (
    <View style={{ marginVertical: 12 }}>
      <Text style={styles.title}>Cálculo da Média das amostras</Text>
      <Text>{mediaFormatada}</Text>
    </View>
  );
}

function RenderD({ items }: { items: itmType[] }) {
  const resultD = calculoD(items).sort((a, b) => a.xi - b.xi);
  return (
    <View style={{ marginVertical: 12 }}>
      <Text style={styles.title}>Desvio Individual (D)</Text>
      <View style={{ marginVertical: 4 }}>
        <TabeleCalculeD items={resultD} />
      </View>
    </View>
  );
}

function RenderXiXm2({ items }: { items: itmType[] }) {
  const resultPowXiXm2 = calculoPowXiXm2(items).sort((a, b) => a.xi - b.xi);
  return (
    <View style={{ marginVertical: 12 }}>
      <Text style={styles.title}>Cálculo de (Xi - Xm)²</Text>
      <TabeleCalculeXiXm2 items={resultPowXiXm2} />
    </View>
  );
}

function RenderS({ items }: { items: itmType[] }) {
  const resultadoS = calculeS(items);
  const sFormatado = resultadoS.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  
  return (
    <View style={{ marginVertical: 12 }}>
      <Text style={styles.title}>Desvio Padrão (s)</Text>
      <Text>s = {sFormatado}</Text>
    </View>
  );
}

function RenderCv({ items }: { items: itmType[] }) {
  const resultadoCv = calculeCv(items);
  const cvFormatado = resultadoCv.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  
  return (
    <View style={{ marginVertical: 12 }}>
      <Text style={styles.title}>Coeficiente de Variação</Text>
      <Text>{cvFormatado}%</Text>
    </View>
  );
}

function RenderOutCv({ items }: { items: itmType[] }) {
  const resultadoOutCv = calculeOutCV(items);
  return (
    <View style={{ marginVertical: 12 }}>
      <Text style={styles.title}>Fora do Desvio (CV)</Text>
      <TabeleCalculeOutCv items={resultadoOutCv} />
    </View>
  );
}

function RenderFinalEvaluation({ items, propertyArea }: { items: itmType[]; propertyArea: number }) {
  const media = calculoM(items); // Média dos Xi da amostra refinada
  const estimatedValue = media * propertyArea; // Valor estimado do imóvel
  const percentual = 0.05; // 5% de confiança
  const lowerLimit = estimatedValue - estimatedValue * percentual;
  const upperLimit = estimatedValue + estimatedValue * percentual;

  // Função para formatar valores no padrão brasileiro
  const formatarValorBR = (valor: number): string => {
    return valor.toLocaleString('pt-BR', { 
      style: 'currency', 
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  // Função para formatar números simples no padrão brasileiro
  const formatarNumeroBR = (valor: number): string => {
    return valor.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <View style={{ marginVertical: 12 }}>
      <Text style={styles.title}>Avaliação Final do Imóvel</Text>
      <Text style={styles.infoLabel}>Média de valor por m²: <Text style={styles.infoValue}>{formatarValorBR(media)}</Text></Text>
      <Text style={styles.infoLabel}>Área do imóvel: <Text style={styles.infoValue}>{propertyArea} m²</Text></Text>
      <Text style={styles.infoLabel}>Valor Estimado: <Text style={styles.valueHighlight}>{formatarValorBR(estimatedValue)}</Text></Text>
      
      <View style={styles.limitsContainer}>
        <Text style={styles.infoLabel}>Intervalo de Confiança (5%):</Text>
        <Text style={styles.limitsInfo}>Limite Inferior: <Text style={styles.infoValue}>{formatarValorBR(lowerLimit)}</Text></Text>
        <Text style={styles.limitsInfo}>Limite Superior: <Text style={styles.infoValue}>{formatarValorBR(upperLimit)}</Text></Text>
      </View>
      
      {/* Adicionando conclusão */}
      <View style={styles.conclusionContainer}>
        <Text style={styles.conclusionTitle}>Conclusão:</Text>
        <Text style={styles.conclusionText}>
          Com base na análise da amostra e aplicação do método comparativo direto,
          o valor de mercado do imóvel avaliando com {propertyArea} m² é de {formatarValorBR(estimatedValue)},
          com intervalo de confiança de 5%, variando entre {formatarValorBR(lowerLimit)} e {formatarValorBR(upperLimit)}.
        </Text>
      </View>
    </View>
  );
}

// Cálculo de Xi: valor unitário por metro quadrado
function calculoXi(items: itmType[]): itmType[] {
  return items.map((item) => {
    const metro2 = item.price / item.mt;
    return { ...item, xi: parseFloat(metro2.toFixed(2)) };
  });
}

// Cálculo da média (Xm)
function calculoM(items: itmType[]): number {
  const resultXi = calculoXi(items);
  const somaXi = resultXi.reduce((acc, item) => acc + item.xi, 0);
  const media = somaXi / items.length;
  return parseFloat(media.toFixed(2));
}

// Cálculo do desvio individual (d)
function calculoD(items: itmType[]): itmType[] {
  const media = calculoM(items);
  return calculoXi(items).map((item) => ({
    ...item,
    d: parseFloat((item.xi - media).toFixed(2)),
  }));
}

// Cálculo de (Xi - Xm)²
function calculoPowXiXm2(items: itmType[]): itmType[] {
  return calculoD(items).map((item) => ({
    ...item,
    powXiXm2: Math.pow(item.d, 2),
  }));
}

// Cálculo do desvio padrão (s)
function calculeS(items: itmType[]): number {
  const resultPow = calculoPowXiXm2(items);
  const soma = resultPow.reduce((acc, item) => acc + item.powXiXm2, 0);
  const nMenosUm = items.length - 1;
  const variancia = soma / nMenosUm;
  return Math.sqrt(variancia);
}

// Cálculo do coeficiente de variação (CV)
function calculeCv(items: itmType[]): number {
  const s = calculeS(items);
  const media = calculoM(items);
  const cv = (s / media) * 100;
  return parseFloat(cv.toFixed(2));
}

// Cálculo do valor |d|/s para cada amostra (outCv)
function calculeOutCV(items: itmType[]): itmType[] {
  const s = calculeS(items);
  return calculoD(items).map((item) => ({
    ...item,
    outCv: parseFloat((Math.abs(item.d) / s).toFixed(2)),
  }));
}

/**
 * Função para refinar a amostra removendo iterativamente os itens cujo |d|/s ultrapassa o limite de Chauvenet.
 */
function refineAmostra(initialItems: itmType[]): itmType[] {
  let refined = initialItems.map((item) => ({ ...item }));
  let removido;
  do {
    refined = calculoXi(refined);
    const media = calculoM(refined);
    const s = calculeS(refined);

    refined = refined.map((item) => {
      const d = parseFloat((item.xi - media).toFixed(2));
      const outCv = s !== 0 ? Math.abs(d) / s : 0;
      return { ...item, d, outCv: parseFloat(outCv.toFixed(2)) };
    });

    const currentLimit = chauvenetLimits[refined.length] || Infinity;
    const filtered = refined.filter((item) => item.outCv <= currentLimit);
    removido = filtered.length !== refined.length;
    refined = filtered;
  } while (removido);
  return refined;
}

// Estilos expandidos
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    color: '#333',
  },
  infoLabel: {
    fontSize: 15,
    marginBottom: 6,
    color: '#555'
  },
  infoValue: {
    fontWeight: '600',
    color: '#333'
  },
  valueHighlight: {
    fontWeight: '700',
    fontSize: 16,
    color: '#0066CC'
  },
  limitsContainer: {
    marginTop: 10,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5
  },
  limitsInfo: {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 4
  },
  conclusionContainer: {
    marginTop: 16,
    backgroundColor: '#e6f2ff',
    padding: 12,
    borderRadius: 6,
    borderLeftWidth: 4,
    borderLeftColor: '#0066CC'
  },
  conclusionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
    color: '#0066CC'
  },
  conclusionText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333'
  }
});