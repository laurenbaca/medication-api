const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let drugs = {
  'amlodipine': {
    'brandName': 'norvasc',
    'class': 'calcium channel blocker',
    'indication': 'hypertension'
  },
  'zolpidem': {
    'brandName': 'ambien',
    'class': 'benzodiazepine',
    'indication': 'insomnia'
  },
  'nitrofurantoin': {
    'brandName': 'macrobid',
    'class': 'urinary anti-infectives',
    'indication': 'urinary tract infection'
  },
  'buspirone': {
    'brandName': 'buspar',
    'class': 'anxiolytic',
    'indication': 'anti-anxiety'
  },
  'warfarin': {
    'brandName': 'coumadin',
    'class': 'anticoagulant',
    'indication': 'blood clot reduction'
  },
  'unknown': {
    'brandName': 'unknown',
    'class': 'unknown',
    'indication': 'unknown'
  },

}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/drugs/:brandName', (request, response) => {
  const brand = request.params.brandName.toLowerCase()
  if(drugs[brand]){
    response.json(drugs[brand])
  }else{
    response.json(drugs['unknown'])
  }

})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on ${PORT}`);
})
