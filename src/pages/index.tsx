import { GetServerSideProps } from 'next';
import Head from "next/head";
import { SubscribeButton } from "../Components/SubscribeButton";
import { stripe } from '../services/stripe';
import styles from './home.module.scss'


interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  //chamada SSR (Server Side Rendering)
  //console.log(props que agora é product)




  return (
    <>
      <Head>
        <title>Home - ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>🙌 Olá, Seja Bem Vindo!</span>
          <h1>Obtenha suporte <span>Mensal</span>  para sua loja virtual</h1>
          <p>
            <br />
            <span>por {product.amount}/mês</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('Server Node Acionado');//isso aqui executa apenas do lado do servidor que no caso é o node aqui no console
  const price = await stripe.prices.retrieve('price_1JLzhcFuYEE1SfcGPgArX4JC', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format((price.unit_amount / 100)), //preço salvo em centavos, que bacana pra manipular
  }

  return {
    props: {
      product,
    }
  }
}
