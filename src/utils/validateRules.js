export default {
  login: [v => v.length > 0 || 'Поле обязательное'],
  password: [v => v.length > 0 || 'Поле обязательное', v => v.length >= 8 || 'Минимум 8 символов']
}
