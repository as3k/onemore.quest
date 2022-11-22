import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const getRandomItem = (arr) => { return arr[Math.floor(Math.random()*arr.length)] }

  const sino = [true, false, true, false, true, true, false, false, false, false, false ]
  const parties = ['The Party', 'The group', 'Our Heroes', 'Our Mighty Crew', 'Our band of miscreants']
  const verbs = [ 'Attack', 'Rescue', 'Escort', 'Investigate', 'Aid', 'Transport', 'Steal', 'Fight', 'Blackmail', 'Hide', 'Shelter', 'Trick', 'Negotiate', 'Defend', 'Retrieve', 'Overcome', 'Invade', 'Kill', 'Capture', 'Free', 'Secure', 'Heal', 'Trade', 'Scare', 'Hunt', 'Find', 'Defend', 'Prevent', 'Cause', 'Serve', 'Take', 'Bargain', 'Explore', 'Sabotage', 'Kidnap', 'Lead', 'kill','assasinate','steal','plunder','sneak past','save','rescue','arrest','capture','destroy','escape','speak with','protect','infiltrate']
  const subjects = ['Human','Fey', 'Dwarf', 'Goblin','Salimar', 'Treefolk','Karhu','Lizardfolk', 'Royalty', 'Priest','Wizard', 'Scribe','Monster','Animal', 'Pirate', 'Bandit','Magic', 'Item', 'Enemy','Passenger','Riddle', 'Merchandise', 'Contraband','Performer', 'Caravan','Merchant','Thief', 'Warrior', 'Healer','Peasant', 'Beggar','Traveler','Innkeeper', 'Ghost', 'City','Watch', 'Witness', 'Alchemist',]
  const places = ['Mountain Top','Ruins','Ocean','Desert','Island','Canyon','Mountain Pass','Temple','Ice Cave','Volcano','Forest','Whirlpool','Sunken City','Subterranean City','Forbidden City','Floating Fortress','Airship Fortress','Market','Tower','City Jail','Bridge','Sewers','Docks','Dungeon ','Graveyard ','Gambling House','Faerie Realm','Land of Dreams','Other Dimension','Castle','Monastery','Mine','Enemy','Territor','Dragon’s Den','Labyrinth',]
  const hinderances = ['Ally','Betrayal','Love','Broken Promise','Deception','Rival','Mentor','Family','Attack','Trap','Physical Illness','Weather','Finances','Theft','Spy','Double Agent','Revenge','Mental Illness','Red Herring','Transportation','Hostage','Kidnapping','Assassination','City Watch','Greed','Trust','Hatred','Jealousy','Bad Luck','Pride','Laziness','Lust','Gluttony','Neglect','Forgetfulness','Ignorance',]
  const oppositions = ['City Watch','City Leader','Spy','Politics','Moneylender','Scandal','Bandits','Pirates','Secret Society','Wizards’ Guild','Thieves’ Guild','Army','Monster','Flora','Fauna','Undead','Magic','Disease','Wizard','Necromancer','Cultists','Merchants','Alchemist','Murderer','Assassin','Time','Demon','Invasion ','Evil Genius','Dragon','Robber','Imposter','Faerie ','Curse ','Parasite ','Adventurers',]
  const doThats = ['Do That', 'They must do that', 'That\'s the task', 'Complete that']

  const [party, setParty] = useState('')
  const [verb, setVerb] = useState('')
  const [verb2, setVerb2] = useState('')
  const [place, setPlace] = useState('')
  const [subject, setSubject] = useState('')
  const [hinderance, setHinderance] = useState('')
  const [opposition, setOpposition] = useState('')
  const [dothat, setDoThat] = useState('')
  const [aan, setAan] = useState(false)
  const [paired, setPaired] = useState(false)

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
    setAan(() => {
      const pattern = /^[aeiouAEIOU]\w+/
      return pattern.test(opposition)
    })
  }

  useEffect(() => reroll(), [])

  return (
    <div>
      <Head>
        <title>One More Quest</title>
        <meta name="description" content="Generate awesome quest ideas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container max-w-[658px] mx-auto py-8 md:py-16 px-4">
          <div className="quest text-3xl md:text-5xl font-bold leading-tight uppercase">
            {party} must {paired ? verb + ' and ' + verb2 : verb} the {subject} in the {place}. 
            <span className="text-xl md:text-3xl mt-4 md:mt-6 block">
              {dothat} while dealing with {hinderance} and opposing {aan ? 'an' : 'a'} {opposition}.
            </span>
          </div>
          <div className="button-container mt-16">
            <button onClick={reroll} className="px-8 py-3 border-4 border-neutral-200 uppercase">I hate that, Try again</button>
          </div>
        </div>
      </main>

      <div className="absolute bottom-0 right-0 p-8 text-right flex flex-col text-xs text-[10px]">
        <span>
          Created by&nbsp;
          <Link href="https://github.com/as3k" target="_blank">ZG</Link>
        </span>
        <span>
          If you make it, make sure you make it&nbsp;
          <Link href="https://opensource.org/">
            Open Source
          </Link>
        </span>
        <span>
          Inspired by&nbsp; 
          <Link href="https://whothefuckismydndcharacter.com/" target="_blank">
            WTFIMDNDC
          </Link>
        </span>
      </div>
    </div>
  )
}
