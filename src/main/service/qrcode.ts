export class QrCodeOperations {
    /*  
    000201 
    010212 
    2680
        0014br.gov.bcb.pix
        2558pix.asaas.com/qr/cobv/eb168d2e-b37d-4fee-8dc0-1ea198a1179f
    52040000
    5303986
    5802BR
    5925CLARA INSITUICAO DE PAGA
    6009Sao Paulo
    610804530000
    6207
     05
      03***
    6304DFDD
 */
    public static qrCodeSplitter (base:string) {
        let currentSegment = ""
        let iteratedString = base 
        const extracted: {segment: string, translation: string, content: string }[] = []
        while(iteratedString.length > 0){

        }

    }

    public static stringIterator (base: string, extracted: any) {
        while(currentSegment !== "63") {
            currentSegment = base.
        }
    }

}