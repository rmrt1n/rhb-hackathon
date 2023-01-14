import { useRouter } from 'next/router';

export default function Project() {
  const router = useRouter()
  const { slug } = router.query;

  return (
    <>
      this is the page for the { slug } project
    </>
  )
}
