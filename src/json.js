import fs from 'fs'

export function getJsonFrame(jsonFilePath) {
    return new Promise((resolve, reject) => {    
        if (!fs.existsSync(jsonFilePath)) {
          return reject("Error: No JSON file found")
        }
    
        try {
          let JSONFile = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'))
          return resolve(JSONFile)
        } catch (err) {
          return reject(err)
        }
    })
}