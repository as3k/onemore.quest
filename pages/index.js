import { locations, descriptions, verbs as v, concepts } from 'fun-word-list'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import { verbs, subjects, places, hinderances, oppositions } from '../utils/tdwords'

export default function Home() {
  const getRandomItem = (arr) => { return arr[Math.floor(Math.random()*arr.length)] }

  const sino = [true, false, true, false, true, true, false, false, false, false, false ]
  const parties = ['The Party', 'The group', 'Our Heroes', 'Our Mighty Crew', 'Our band of miscreants']
  const doThats = ['Do That', 'They must do that', 'That\'s the task', 'Complete that']

  const [party, setParty] = useState('')
  const [verb, setVerb] = useState('')
  const [verb2, setVerb2] = useState('')
  const [place, setPlace] = useState('')
  const [subject, setSubject] = useState('')
  const [hinderance, setHinderance] = useState('')
  const [opposition, setOpposition] = useState('')
  const [dothat, setDoThat] = useState('')
  const [paired, setPaired] = useState(false)
  const [desc, setDesc] = useState('')

  const reroll = () => {
    setParty ( getRandomItem(parties) )
    setVerb ( getRandomItem(verbs) )
    setVerb2 ( getRandomItem(verbs) )
    setPlace ( getRandomItem(places) )
    setSubject ( getRandomItem(subjects) )
    setHinderance ( getRandomItem(hinderances) )
    setOpposition ( getRandomItem(oppositions) )
    setDoThat (getRandomItem(doThats) )
    setPaired( getRandomItem(sino) )
    setDesc( getRandomItem(descriptions) )
  }

  const aan = (word) => {
    const pattern = /^[aeiouAEIOU]\w+/
    return pattern.test(word)
  }

  useEffect(() => {
    reroll()
  }, [])

  return (
    <div>
      <Head>
        <title>One More Quest</title>
        <meta name="description" content="Generate awesome quest ideas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <div className="container max-w-[658px] mx-auto py-8 md:py-16 px-4">
          <div className="quest text-3xl md:text-5xl font-bold leading-tight uppercase">
            {party} must {paired ? verb + ' and ' + verb2 : verb} the {desc} {subject} in the {place}. 
            <span className="text-xl md:text-3xl mt-4 md:mt-6 block">
              {dothat} while dealing with {hinderance} and opposing {aan(opposition) ? 'an' : 'a'} {opposition}.
            </span>
          </div>
          <div className="button-container mt-16">
            <button onClick={reroll} className="px-8 py-3 border-4 border-neutral-200 uppercase">I hate that, Try again</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
