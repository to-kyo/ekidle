import { MAX_CHALLENGES } from '../../constants/settings'
import { NihongoKeyboard } from '../keyboard/NihongoKeyboard'
import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'

type Props = {
  guesses: string[]
  currentGuess: string
  isRevealing?: boolean
  onText: (value: string) => void
  onEnter: () => void
}

export const Grid = ({ guesses, currentGuess, isRevealing, onText, onEnter }: Props) => {
  const empties =
    guesses.length < MAX_CHALLENGES - 1
      ? Array.from(Array(MAX_CHALLENGES - 1 - guesses.length))
      : []

  return (
    <div className="pb-6">
      {guesses.map((guess, i) => (
        <CompletedRow
          key={i}
          guess={guess}
          isRevealing={isRevealing && guesses.length - 1 === i}
        />
      ))}
      {guesses.length < MAX_CHALLENGES && <CurrentRow guess={currentGuess} />}
      <NihongoKeyboard
        onText={onText}
        onEnter={onEnter}
        guessIsEmpty={currentGuess === ''}
      />
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  )
}
