import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

// getStaticProps => runs only in build time = dont use it in run time to fetch data, only in build time
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()

  return {
    props: { ninjas: data },
  }
}

const Ninjas = ({ ninjas }) => {
  console.log(ninjas)
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas &&
        ninjas.map((ninja) => (
          <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
    </div>
  )
}

export default Ninjas
