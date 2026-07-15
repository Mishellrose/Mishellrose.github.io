import { useCallback, useState } from 'react'
import { LoadingScreen } from '../components/LoadingScreen'
import { Hero } from '../components/Hero'
import { SelectedWorks } from '../components/SelectedWorks'
import { Journal } from '../components/Journal'
import { Stats, Resume } from '../components/Stats'
import { Contact } from '../components/Contact'

export function Index() {
  const [isLoading, setIsLoading] = useState(true)
  const handleComplete = useCallback(() => setIsLoading(false), [])

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleComplete} />}
      <main className={isLoading ? 'h-screen overflow-hidden' : undefined}>
        <Hero ready={!isLoading} />
        <SelectedWorks />
        <Journal />
        <Stats />
        <Resume />
        <Contact />
      </main>
    </>
  )
}
