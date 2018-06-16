import readline from 'readline'

export const createIO = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return {
    ask: (question) => new Promise((resolve) => {
      rl.question(question, resolve)
    }),
    close: () => rl.close(),
    print: function() {
      // eslint-disable-next-line no-console,no-undef
      console.log.apply(null, arguments)
    }
  }
}
