export class QrCodeOperations {
    public static qrCodeSplitter (base:string): {segment: string, translation: string, content: string | {segment: string, translation: string, content: string}[]}[] {
        let iteratedString = base 
        const extracted: {segment: string, translation: string, content: string | {segment: string, translation: string, content: string}[]}[] = []
        while(iteratedString.length > 0){
            const translatedSegment: any = {} as {segment: string, translation: string, content: string | {segment: string, translation: string, content: string}[]}
            const extractedInfo = this.stringIterator(iteratedString)
            iteratedString = extractedInfo.remainingString

            translatedSegment.segment = extractedInfo.segmentId;
        
            if(extractedInfo.segmentId === "26" || extractedInfo.segmentId === "62") {
                translatedSegment.segmentLength = extractedInfo.segmentLength
                translatedSegment.content = this.qrCodeSplitter(extractedInfo.info);
            } else {
                translatedSegment.segmentLength = extractedInfo.segmentLength
                translatedSegment.content = extractedInfo.info
            }
            
            extracted.push(translatedSegment)
        }

        return extracted
    }

    public static stringIterator (base: string) {
        let index = 0
        const extracted = {
            segmentId: "",
            segmentLength: "",
            info: "",
            remainingString: ""
        }
        
        const segmentId = base.substring(index, index + 2)
        const segmentLength = base.substring(index + 2, index + 4)
        const info = base.substring(index + 4, index + (4 + Number(segmentLength)))
        const remainString = base.substring(index + (4 + Number(segmentLength)))

        extracted.segmentId = segmentId
        extracted.segmentLength = segmentLength
        extracted.info = info
        extracted.remainingString = remainString

        return extracted

    }

}