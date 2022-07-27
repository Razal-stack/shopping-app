export default function () {
  this.namespace = '/api';

  this.get('/products', function () {
    return {
      data: [
        {
          id: 'lp-shirt-men-l',
          type: 'products',
          attributes: {
            title: 'Louis Philipe Formal Shirt Black',
            description:
              'An excellent pick for everyday wear, these black shirt from Louis Philipe  ensures comfort in all seasons.',
            brand: 'Louis Philipe ',
            size: 'L',
            category: 'Men',
            price: '$80',
            image: 'assets/images/lp-shirt-black-final.jpg',
          },
        },
        {
          id: 'allen-solly-jean-men-36',
          type: 'products',
          attributes: {
            title: 'Allen Solly Jean Men Blue',
            description:
              'An excellent pick for everyday wear, these navy Skinny Fit jeans from Solly Jeans Co by Allen Solly ensures comfort in all seasons.',
            brand: 'Allen Solly',
            size: '36',
            category: 'Men',
            price: '$100',
            image: 'assets/images/allenn-solly-jean.jpg',
          },
        },
        {
          id: 'lee-cooper-shoe-men-42',
          type: 'products',
          attributes: {
            title: 'Lee Cooper Men Casual Shoe brown',
            description:
              'An excellent pick for everyday wear, these navy Skinny Fit jeans from Solly Jeans Co by Allen Solly ensures comfort in all seasons.',
            brand: 'Lee Cooper',
            size: '42',
            category: 'Men',
            price: '$150',
            image: 'assets/images/lee-cooper-brown-shoe.jpg',
          },
        },
        {
          id: 'van-huesen-bag',
          type: 'products',
          attributes: {
            itle: 'Van Huesen Ladies Handbag Blue',
            description:
              'An excellent pick for daily use, Spacious and trendy hand bag for young women',
            brand: 'Van Huesen',
            size: 'XL',
            category: 'Women',
            price: '$200',
            image: 'assets/images/van-huesen-bag.jpg',
          },
        },
      ],
    };
  });
}
