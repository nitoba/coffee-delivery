import expresso from '../assets/images/Type=Expresso.png';
import americano from '../assets/images/Type=Americano.png';
import cremoso from '../assets/images/Type=Expresso_Cremoso.png';
import gelado from '../assets/images/Type=Cafe_Gelado.png';
import comLeite from '../assets/images/Type=Cafe_com_Leite.png';
import latte from '../assets/images/Type=Latte.png';
import capuccino from '../assets/images/Type=Capuccino.png';
import macchiato from '../assets/images/Type=Macchiato.png';
import quente from '../assets/images/Type=Chocolate_Quente.png';
import cubano from '../assets/images/Type=Cubano.png';
import havaiano from '../assets/images/Type=Havaiano.png';
import irlandes from '../assets/images/Type=Irlandes.png';

export const coffees = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imageUrl: expresso,
    tags: [{ title: 'tradicional' }],
  },
  {
    id: 2,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    imageUrl: americano,
    tags: [{ title: 'tradicional' }],
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    imageUrl: cremoso,
    tags: [{ title: 'tradicional' }],
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    imageUrl: gelado,
    tags: [{ title: 'tradicional' }, { title: 'gelado' }],
  },
  {
    id: 5,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    imageUrl: comLeite,
    tags: [{ title: 'Tradicional' }, { title: 'com leite' }],
  },
  {
    id: 6,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    imageUrl: latte,
    tags: [{ title: 'tradicional' }, { title: 'com leite' }],
  },
  {
    id: 7,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    imageUrl: capuccino,
    tags: [{ title: 'tradicional' }, { title: 'com leite' }],
  },
  {
    id: 8,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    imageUrl: macchiato,
    tags: [{ title: 'tradicional' }, { title: 'com leite' }],
  },
  {
    id: 9,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    imageUrl: quente,
    tags: [{ title: 'tradicional' }, { title: 'com leite' }],
  },
  {
    id: 10,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    imageUrl: cubano,
    tags: [
      { title: 'tradicional' },
      { title: 'com leite' },
      { title: 'gelado' },
    ],
  },
  {
    id: 11,
    title: 'Havaiano',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    imageUrl: havaiano,
    tags: [{ title: 'especial' }],
  },
  {
    id: 12,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    imageUrl: irlandes,
    tags: [{ title: 'especial' }, { title: 'alcoólico' }],
  },
];
