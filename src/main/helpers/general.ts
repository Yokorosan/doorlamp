export class GeneralUtilities {
    public static dateFactor(base: string): string{
        let date: Date = new Date('2025-02-22')
        const diff = Number(base) - 1000

        if (diff < 7000) {
            //This is considering the possibility to validate old barCodes, gonna be deprecated in around 5 years
            date.setDate(date.getDate() + diff)
        } else {
            date = new Date('2000-07-03') 
            date.setDate(date.getDate() + diff)
        }
        
        return date.toISOString()
    }

    public static generalSplitter(base: string, splitRanges: string[]): string[] {
        if( !base )return []

        const splitLength = splitRanges.length
        const splittedString = []
        let processedSplit = 0
        
        while(processedSplit < splitLength) {
            const rangeArray = splitRanges[processedSplit].split(":")
            const initialIndex = Number(rangeArray[0])
            const endIndex = Number(rangeArray[1]) ? Number(rangeArray[1]) : undefined 
            
            splittedString.push(base.slice(initialIndex, endIndex))
            processedSplit++
        }

        return splittedString
    }

    public static stringCleaner(base: string): string {
        const cleanBase = base.replace(/[^a-zA-Z0-9]/g, '');
        return cleanBase
    }

    public static randomGenerator(size:number, range = 9, lettersAndNumbers = false, lettersOnly = false) {
        let randomInt: number
        let randomString: string = ""
        let randomDigit: string
        let parsedSize: number = 0
        const alphabet = 'abcdefghijklmnopqrstuvxwyz'
        const alphabetPlusNumber = 'abcdefghijklmnopqrstuvxwyz0123456789'

        while(parsedSize < size) {
            if(!lettersAndNumbers && !lettersOnly) {
                randomDigit = String(Math.floor(Math.random() * (range + 1)))
                randomString += randomDigit
            } else if (!lettersAndNumbers && lettersOnly) {
                randomInt = Math.floor(Math.random() * 27)
                randomString += alphabet[randomInt]
            } else {
                randomInt = Math.floor(Math.random() * 37)
                randomString += alphabetPlusNumber[randomInt]
            }
            parsedSize++
        }

        return randomString
         
    }
}
//#TODO estudar a possibilidade de usar tree shake and separaçao de modulos
// pra permitir que so seja importado o que o usuario quiser usar
