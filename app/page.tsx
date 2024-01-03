import TodoApp from '@/components/todoapp'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex items-center justify-center flex-col h-screen'> <div>Todo app</div> 
    <TodoApp />
    </div>
  )
}
