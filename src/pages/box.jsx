import Instructions from '@/components/dom/Instructions'
import dynamic from 'next/dynamic'

const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

// Step 5 - delete Instructions components
const Page = () => {
  
}
Page.r3f = (
  <>
    <Box route='/' />
  </>
)

export default Page


export async function getStaticProps() {
  return {
    props: {
      title: 'Box',
    },
  }
}
