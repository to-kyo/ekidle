// 日本語の入力処理は https://github.com/motemen/kanjile を参考にさせていただきました
import classNames from 'classnames'
import { ChangeEvent, FormEvent, useEffect, useRef } from 'react'
import { MAX_WORD_LENGTH } from '../../constants/settings'

type Props = {
  onText: (value: string) => void
  onEnter: () => void
  guessIsEmpty: boolean
}

export const NihongoKeyboard = ({ onText, onEnter, guessIsEmpty }: Props) => {
  const refText = useRef<HTMLInputElement>(null)

  useEffect(() => {
    refText.current?.focus()
    window.addEventListener('click', () => {
      refText.current?.focus()
    })
  })

  useEffect(() => {
    if (guessIsEmpty && refText.current?.value.length !== 0) {
      refText.current!.value = ''
    }
  }, [guessIsEmpty])

  const classes = classNames(
    'w-60 h-14 absolute bg-transparent text-transparent focus:outline-none'
  )
  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    onText(ev.target.value)
  }

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault()
    onEnter()
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex justify-center mb-1">
        <input
          ref={refText}
          className={classes}
          type="text"
          onChange={onChange}
          maxLength={MAX_WORD_LENGTH}
        ></input>
      </div>
    </form>
  )
}
