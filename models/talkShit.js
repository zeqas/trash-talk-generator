const list = require('../contents.json')

function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function talkShitGenerator(target) {
  if (!target) { return `身為一個使用者，點選一個對象，${sample(list.phrase)}吧!` }
  return `身為一個${list.job[target].title}，${sample(list.task[target])}，${sample(list.phrase)}吧！`
}

module.exports = talkShitGenerator