import { QrCodeOperations } from "../../main/service/qrcode"

describe("QrCode Operations", () => {
    describe("validator", () => {
        it('should return correct qrCodeInfo', () => {
            const extracted = QrCodeOperations.qrCodeSplitter("00020101021226800014br.gov.bcb.pix2558pix.asaas.com/qr/cobv/eb168d2e-b37d-4fee-8dc0-1ea198a1179f5204000053039865802BR5925CLARA INSTITUICAO DE PAGA6009Sao Paulo61080453000062070503***6304DFDD")
            console.log(extracted)
        })
    })
})