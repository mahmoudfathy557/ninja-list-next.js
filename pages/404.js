import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Error = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      // router.go(-1) '-1'=> go back || '1'=>go forward
      router.push('/')
    }, 3000)
  }, [])

  return (
    <>
      <Head>
        <title>Ninja List | 404</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div className='not-found'>
        <h1>Ooooops!!!</h1>
        <h2>Page is not found</h2>

        <p>
          Go back to the
          <Link href=''>
            <a> Homepage</a>
          </Link>
        </p>
      </div>
    </>
  )
}

export default Error
