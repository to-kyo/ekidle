import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        駅名を当てるゲームです。
        入力した答えに応じてタイルの色が変わり、文字が合っているかわかります。
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="と" status="correct" />
        <Cell value="う" />
        <Cell value="き" />
        <Cell value="ょ" />
        <Cell value="う" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        "と"が正解の駅名に含まれていて、かつ位置も合っています。
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="し" />
        <Cell value="ん" />
        <Cell value="じ" status="present" />
        <Cell value="ゅ" />
        <Cell value="く" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        "じ"が正解の駅名に含まれていますが、位置は合っていません。
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="い" />
        <Cell value="け" />
        <Cell value="ぶ" />
        <Cell value="く" status="absent" />
        <Cell value="ろ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        "く"が正解の駅名に含まれません。
      </p>
    </BaseModal>
  )
}
