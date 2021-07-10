const contents = require('./contents.json')

function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function talkShitGenerator(target) {
  if (!target) { return '請選一個角色。' }
  return `身為一個${contents.job[target].title}，${sample(contents.task[target])}，${sample(contents.phrase)}吧！`
}

module.exports = talkShitGenerator