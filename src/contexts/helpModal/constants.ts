import Img1 from '../../assets/questions/01.png';
import Img2 from '../../assets/questions/02.png';
import Img3 from '../../assets/questions/03.png';
import Img4 from '../../assets/questions/04.png';
import Img5 from '../../assets/questions/05.png';
import Img6 from '../../assets/questions/06.png';
import Img7 from '../../assets/questions/07.png';
import Img8 from '../../assets/questions/08.png';
import Img9 from '../../assets/questions/09.png';
import Img10 from '../../assets/questions/10.png';
import Img11 from '../../assets/questions/11.png';
import Img12 from '../../assets/questions/12.png';
import Img13 from '../../assets/questions/13.png';
import Img14 from '../../assets/questions/14.png';
import Img15 from '../../assets/questions/15.png';
import Img16 from '../../assets/questions/16.png';
import Img17 from '../../assets/questions/17.png';

export const QuestionsOriginal = [
  {
    id: 1,
    question:
      'A média de consumo diário que a ONU recomenda é de 110 litros por habitante/dia, pois estudos apontam que essa quantidade é suficiente para suprir as necessidades básicas de uma pessoa. Em uma casa com 04 moradores, a quantidade de água consumida no dia foi de 660 litros. Tendo o valor de 110 litros por habitante/dia como recomendado, a média gasta por morador nesta casa foi:',
    options: [
      {
        text: '165 litros por habitante/dia, 220 litros acima do recomendado.',
        isCorrect: true,
      },
      {
        text: '165 litros por habitante/dia, dentro da quantidade recomendada',
        isCorrect: false,
      },
      {
        text: '440 litros, dentro da quantidade recomendada',
        isCorrect: false,
      },
      {
        text: '660 litros, dentro da quantidade recomendada',
        isCorrect: false,
      },
    ],
    imagem: Img1,
    knowMore: `Dividir o valor total de litros de água gastos pela quantidade de habitantes para obter a média por morador`,
  },
  {
    id: 2,
    question:
      'De acordo com a SABESP um banho de ducha por 15 minutos, com o registro meio aberto, consome 135 litros de água. Porém, cinco minutos com o registro meio aberto são suficientes para higienizar o corpo, pois ao se ensaboar você pode fechar o registro. Se você fechar o registro ao se ensaboar, e reduzir o tempo do banho para 5 minutos, e considerando que a quantidade de 1 litro de água é a mesma de uma garrafinha de refrigerante, quantas litros de água você irá economizar?',
    options: [
      {
        text: '45 litros',
        isCorrect: false,
      },
      {
        text: '90 litros',
        isCorrect: true,
      },
      {
        text: '100 litros',
        isCorrect: false,
      },
      {
        text: '09 litros',
        isCorrect: false,
      },
    ],
    imagem: Img2,
    knowMore: `A cada 05 minutos de banho com ducha utilizando registro meio aberto, você gasta em média 45 litros.`,
  },
  {
    id: 3,
    question:
      'De acordo com a SABESP ao escovar os dentes com a torneira não muito aberta durante 05 minutos, você gasta em média 12 litros de água. Porém, se você molhar a escova, fechar a torneira enquanto escova os dentes, e ainda enxaguar a boca com um copo de água, poderá reduzir seu gasto de água em aproximadamente 90%. Ao realizar essas ações conscientes você economiza aproximadamente quantos litros de água ao escovar os dentes?',
    options: [
      {
        text: '08 litros',
        isCorrect: false,
      },
      {
        text: '09 litros',
        isCorrect: false,
      },
      {
        text: '11,2 litros',
        isCorrect: false,
      },
      {
        text: '10,8 litros',
        isCorrect: true,
      },
    ],
    imagem: Img3,
    knowMore: `10% de 12 = 1,2`,
  },
  {
    id: 4,
    question:
      'De acordo com a SABESP ao lavar o rosto, fazer skin care ou se barbear durante 5 minutos, gastam-se 12 litros de água. Reduzindo o tempo da torneira aberta o consumo cai para 2 a 3 litros, e o volume economizado é o suficiente para manter-se hidratado por pelo menos 5 dias. Diante do exposto, quantos litros de água você pode economizar ao realizar estas atividades com consumo consciente?',
    options: [
      {
        text: '02 a 03 litros',
        isCorrect: false,
      },
      {
        text: '09 a 10 litros',
        isCorrect: true,
      },
      {
        text: '08 a 09 litros',
        isCorrect: false,
      },
      {
        text: '06 a 07 litros',
        isCorrect: false,
      },
    ],
    imagem: Img4,
  },
  {
    id: 5,
    question:
      'Ao lavar o carro ou a calçada com mangueira durante 15 minutos são gastos 279 litros de água. Este é um hábito comum e que traz grandes prejuízos. O ideal é reduzir este consumo para apenas 40 litros. Calcule o desperdício de água ao lavar o carro ou calçada durante 15 minutos quando você não segue estas instruções de consumo consciente:',
    options: [
      {
        text: '230 litros',
        isCorrect: false,
      },
      {
        text: '80 litros',
        isCorrect: false,
      },
      {
        text: '239 litros',
        isCorrect: true,
      },
      {
        text: '200 litros',
        isCorrect: false,
      },
    ],
    imagem: Img5,
    knowMore: `Para calcular o desperdício você precisa deduzir a diferença do valor gasto pelo valor da economia.
      Para reduzir este consumo para 40 litros, você deve:
      Adotar o hábito de usar a vassoura, e não a mangueira, para limpar a calçada e o quintal da sua casa.
      Se houver uma sujeira localizada, usar a técnica do pano umedecido com água de enxágue da roupa ou da louça.
      Não lavar o carro durante a estiagem (época do ano em que chove menos). Na época das chuvas, se necessário, usar um balde e um pano para lavar o carro ao invés de uma mangueira.
      Lavar o carro somente uma vez por mês com balde.
      `,
  },
  {
    id: 6,
    question:
      'A torneira da pia da cozinha, quando aberta, gasta em média 15 litros de água por minuto. Considerando que num determinado dia você já usou 140 litros de água e ainda precisa lavar as louças. Quantos minutos a torneira pode ficar aberta, initerruptamente, para lavar a louça sem que ultrapasse 200 litros de água neste dia?',
    options: [
      {
        text: '4 minutos',
        isCorrect: true,
      },
      {
        text: '5 minutos',
        isCorrect: false,
      },
      {
        text: '6 minutos',
        isCorrect: false,
      },
      {
        text: '7 minutos',
        isCorrect: false,
      },
    ],
    imagem: Img6,
  },
  {
    id: 7,
    question:
      'Segundo dados da SABESP, numa casa, lavando louça com a torneira meio aberta, em 15 minutos são utilizados 117 litros de água. O ideal é utilizar apenas 20 litros. Consulte o SAIBA MAIS e descubra formas de reduzir este consumo. Ao seguir as instruções do SAIBA MAIS, você economizará quantos litros de água?',
    options: [
      {
        text: '97 litros',
        isCorrect: true,
      },
      {
        text: '100 litros',
        isCorrect: false,
      },
      {
        text: '20 litros',
        isCorrect: false,
      },
      {
        text: '40 litros',
        isCorrect: false,
      },
    ],
    imagem: Img7,
    knowMore: `Segue abaixo descritas algumas alternativas para reduzir esse consumo:
      Antes de lavar a louça, limpar os restos de comida dos pratos e panelas primeiramente com papel e, se necessário, com esponja e sabão e somente depois, deve-se abrir a torneira para molhá-los.
      Em seguida, ensaboa-se tudo o que tem que ser lavado e, então, abre-se a torneira novamente para novo enxague. 
      Para lavar copos, deve-se ensaboá-los com esponja e depois enxaguá-los, procurando sempre evitar o desperdício de água. 
      `,
  },
  {
    id: 8,
    question:
      'De acordo com a SABESP, uma lavadora de roupas com capacidade de 5 quilos gasta 135 litros por lavagem. O ideal é usá-la somente com a capacidade total e utilizá-la cheia e ligá-la no máximo três vezes por semana, para assim reduzir o consumo durante a lavagem, e aproveitar a água do enxágue para lavar o quintal. Uma lavadora de 12.5 kilos gasta quantos litros de água aproximadamente utilizando sua capacidade total?',
    options: [
      {
        text: '405 litros',
        isCorrect: false,
      },
      {
        text: '337,50 litros',
        isCorrect: true,
      },
      {
        text: '137 litros',
        isCorrect: false,
      },
      {
        text: '435 litros',
        isCorrect: false,
      },
    ],
    imagem: Img8,
    knowMore: `A cada 05 quilos de capacidade a máquina gasta 135 litros por lavagem.
      Para calcular o gasto hídrico, basta dividir a capacidade da sua lavadora por 05 e multiplicar o valor por 135. E 2,5 kilos gasta a metade de 135.
      `,
  },
  {
    id: 9,
    question:
      'A reutilização da água é importante para conservar os recursos naturais e evitar o desperdício. Sendo assim, o que é reutilização da água?',
    options: [
      {
        text: 'É o processo de economizar água',
        isCorrect: false,
      },
      {
        text: 'É o processo de tornar a água limpa novamente',
        isCorrect: false,
      },
      {
        text: 'É o processo de usar a água mais de uma vez',
        isCorrect: true,
      },
      {
        text: 'É o processo de poluir a água',
        isCorrect: false,
      },
    ],
    imagem: Img9,
  },
  {
    id: 10,
    question: 'Quais são alguns exemplos práticos de reuso de água?',
    options: [
      {
        text: 'Jogar fora a água usada para lavar roupas.',
        isCorrect: false,
      },
      {
        text: 'Coletar água da chuva apenas para brincar.',
        isCorrect: false,
      },
      {
        text: 'Beber água tratada de estações de tratamento.',
        isCorrect: false,
      },
      {
        text: 'Reaproveitar a água do banho para outras tarefas, como lavar calçadas.',
        isCorrect: true,
      },
    ],
    imagem: Img10,
  },
  {
    id: 11,
    question: 'Quais são os benefícios do reaproveitamento de água em cidades?',
    options: [
      {
        text: 'Reduzir o desperdício de água tratada.',
        isCorrect: true,
      },
      {
        text: 'Usar mais água potável para todas as atividades.',
        isCorrect: false,
      },
      {
        text: 'Parar completamente o desperdício de água na cidade.',
        isCorrect: false,
      },
      {
        text: 'Aumentar a quantidade de água nos rios e lagos.',
        isCorrect: false,
      },
    ],
    imagem: Img11,
  },
  {
    id: 12,
    question:
      'Como o reuso de água pode ajudar a preservar os recursos hídricos?',
    options: [
      {
        text: 'Economizando água tratada no dia a dia.',
        isCorrect: true,
      },
      {
        text: 'Tirando mais água dos rios e lagos.',
        isCorrect: false,
      },
      {
        text: 'Tornando água doce disponível para regiões com pouca água.',
        isCorrect: false,
      },
      {
        text: 'Causando mais poluição nas águas dos rios.',
        isCorrect: false,
      },
    ],
    imagem: Img12,
  },
  {
    id: 13,
    question: 'O que é a qualidade da água?',
    options: [
      {
        text: 'Refere-se à cor da água',
        isCorrect: false,
      },
      {
        text: 'Refere-se à sua potabilidade, ou seja, à ausência de substâncias que possam ser prejudiciais à saúde das pessoas e dos animais que a utilizam.',
        isCorrect: true,
      },
      {
        text: 'Refere-se ao grau de pureza e insegurança da água para o consumo humano',
        isCorrect: false,
      },
      {
        text: 'Refere-se ao sabor da água',
        isCorrect: false,
      },
    ],
    imagem: Img13,
  },
  {
    id: 14,
    question:
      'Para que a água seja considerada segura para o consumo humano precisa estar dentro de certos limites de potabilidade. O que significa nível de coliformes fecais na água?',
    options: [
      {
        text: 'Presença de microrganismos patogênicos na água',
        isCorrect: true,
      },
      {
        text: 'O nível de acidez ou alcalinidade da água',
        isCorrect: false,
      },
      {
        text: 'A quantidade de sal na água',
        isCorrect: false,
      },
      {
        text: 'A temperatura da água',
        isCorrect: false,
      },
    ],
    imagem: Img14,
  },
  {
    id: 15,
    question:
      'Certo dia passou no noticiário da TV que o rio Tietê, em São Paulo, estava poluído. Como é a água de um rio poluído?',
    options: [
      {
        text: 'Água limpa e cristalina',
        isCorrect: false,
      },
      {
        text: 'Água com lixo e esgoto',
        isCorrect: true,
      },
      {
        text: 'Água doce e salgada',
        isCorrect: false,
      },
      {
        text: 'Água em movimento',
        isCorrect: false,
      },
    ],
    imagem: Img15,
  },
  {
    id: 16,
    question: 'Como podemos ajudar a evitar a poluição da água?',
    options: [
      {
        text: 'Jogando lixo no chão',
        isCorrect: false,
      },
      {
        text: 'Usando produtos químicos em excesso',
        isCorrect: false,
      },
      {
        text: 'Tratando o esgoto nas estações de tratamento de efluentes',
        isCorrect: true,
      },
      {
        text: 'Despejando óleo na pia',
        isCorrect: false,
      },
    ],
    imagem: Img16,
  },
  {
    id: 17,
    question:
      'Quando a água de um rio está poluída pode trazer muitas consequências para quem usufrui direto e indiretamente. Dito isso, o que acontece com a saúde de quem ingere a água poluída?',
    options: [
      {
        text: 'Ela aumenta a imunidade',
        isCorrect: false,
      },
      {
        text: 'Ela se torna mais nutritiva',
        isCorrect: false,
      },
      {
        text: 'Ela prejudica a saúde ocasionando diversas doenças',
        isCorrect: true,
      },
      {
        text: 'Ela fica mais cristalina',
        isCorrect: false,
      },
    ],
    imagem: Img17,
  },
];
