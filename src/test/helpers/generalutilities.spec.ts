    import { GeneralUtilities } from '../../main/helpers/general'
//to use in test 836100000006 989400403287 434969530030 101368875429
//34191094121866829293380135840009799600000455855
//34191095298146652930858794000939890000048176
//34193984900000481761095280146652938558794000
//23790.21401 95094.000031 97006.275701 1 10570000173200
//Venc 20/04/2025
//Valor 1732.00
    describe("Utilities", () => {
        describe("Module10", () => {
            it("should receive a valid number string and correct calculate the verification digit", () => {
                expect(GeneralUtilities.module10('033995177')).toEqual('4')
            });
            it("should receive a valid barcode and correct calculate the verification digit", () => {
                //When the third digit is 6, 7 on consumption_bills the DV is calculed with module 10
                expect(GeneralUtilities.module10('8360000000989400403284349695300310136887542')).toEqual('1')
            })
        })

        describe("Module11", () => {
            it("should receive a valid number string and correct calculate the verification digit", () => {
                expect(GeneralUtilities.module11('3419095298146652930858794000939890000048176')).toEqual('1')
            });
            
        })
    })