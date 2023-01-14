import { useRouter } from 'next/router';

const projects = [
  {
    id: 1,
    name: 'C3 Cargos',
    thumbnail: '/proj.jpg',
  },
  {
    id: 2,
    name: 'Aunty May Custom mugs',
    thumbnail: '/cup.jpg',
  },
  {
    id: 3,
    name: 'Miniature trains',
    thumbnail: '/train.jpg',
  },
]

export default function Project() {
  const router = useRouter()
  const { slug }: { slug: number } = router.query;
  const project = projects[slug];
  console.log(project)

  return (
    <>
      this is the page for the {project.name}
    </>
  )
}
