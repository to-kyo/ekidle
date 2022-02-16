export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['おめでとう🚉', '正解です🚃', 'すばらしい🚞']
export const GAME_COPIED_MESSAGE = '結果をコピーしました'
export const ABOUT_GAME_MESSAGE = 'このゲームについて'
export const NOT_ENOUGH_LETTERS_MESSAGE = '文字数が足りません'
export const WORD_NOT_FOUND_MESSAGE =
  '駅名が違うようです(💡広島県の駅名をひらがなで入力してください)'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `正解は ${solution} でした🚉`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'りれき'
export const GUESS_DISTRIBUTION_TEXT = '推測の数'
export const NEW_WORD_TEXT = '次のゲームまで'
export const SHARE_TEXT = 'Share'
export const TOTAL_TRIES_TEXT = '遊んだ数'
export const SUCCESS_RATE_TEXT = '成功率'
export const CURRENT_STREAK_TEXT = '正解連続数'
export const BEST_STREAK_TEXT = '連続数のベスト'
