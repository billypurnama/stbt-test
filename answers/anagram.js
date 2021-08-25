const words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']

const sort = (word) => word.split('').sort().join('')

const separateAnagram = (words) => {
  let result = []
  let anagrams = {}

  for (let i in words) {
    let word = words[i]
    let sorted = sort(word)
    
    if (anagrams[sorted] != null) anagrams[sorted].push(word)
    else anagrams[sorted] = [word]
  }

  for (let word in anagrams) result.push(anagrams[word])

  return result
}

separateAnagram(words)