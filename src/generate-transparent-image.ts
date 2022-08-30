import sharp from 'sharp'

const generateTransparentImage = () => {
  sharp({
    create: {
      width: 1,
      height: 1,
      channels: 4,
      background: { r: 256, g: 256, b: 256, alpha: 0 },
    },
  })
    .webp()
    .toFile('transparent.webp', (err, info) => {
      console.log('Infomation')
      console.log(info)

      if (err) {
        console.log('err', err)
      } else {
        console.log('')
        console.log('Generate Success!!')
      }
    })
}

generateTransparentImage()
