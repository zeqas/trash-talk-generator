const dataBase = require('./shitsData.json')

function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function talkShitGenerator(target) {
  if (!target) { return '請選一個角色。' }
  return `身為一個${dataBase.job[target].title}，${sample(dataBase.task[target])}，${sample(dataBase.phrase)}吧！`
}

module.exports = talkShitGenerator