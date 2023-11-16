import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import MainLayout from './layouts/MainLayout'
import { Input } from './_components/ui/input'
import AddBounty from './_components/AddBounty'
import BountyList from './_components/BountyList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      <h1 className='text-2xl'>Goblin Gazette</h1>
      <AddBounty />
      <BountyList bounties={[{bounty_id: 1, bounty: 500, beast: 'Balrog'}]} />
    </MainLayout>

  )
}

export default App
