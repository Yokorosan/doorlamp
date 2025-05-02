import { CalculationModules } from '../../main/helpers/calculationModules';
import { GeneralUtilities } from '../../main/helpers/general'
//to use in test 836100000006 989400403287 434969530030 101368875429
//34191094121866829293380135840009799600000455855
//34191095298146652930858794000939890000048176
//34193984900000481761095280146652938558794000
//23790.21401 95094.000031 97006.275701 1 10570000173200
//Venc 20/04/2025
//Valor 1732.00
//75691.44467 01052.179502 01921.460018 7 10310000281629
//Venc 25/03/2025
//Valor: 2816.29

//836400000029   913700221041   001010202487   726562554600
//Venc 18/11/2024
//Valor 291.37

// 75691.44467 01052.179502 00831.560016 9 98190000260897
//Venc 25/08/2024
//Valor 2608.97

//838900000315 
//324200190608
//005645578038
//000080232086
//3132.42
//15-04-2025

//pixQrCode 00020101021226800014br.gov.bcb.pix2558pix.asaas.com/qr/cobv/eb168d2e-b37d-4fee-8dc0-1ea198a1179f5204000053039865802BR5925CLARA INSITUICAO DE PAGA6009Sao Paulo61080453000062070503***6304DFDD

    describe("Utilities", () => {
        describe("Module10", () => {
            it("should receive a valid number string and correct calculate the verification digit", () => {
                expect(CalculationModules.module10('033995177')).toEqual('4')
            });

            it("should receive a valid barcode and correct calculate the verification digit", () => {
                //When the third digit is 6, 7 on consumption_bills(starts with 8) the DV is calculed with module 10
                expect(CalculationModules.module10('8360000000989400403284349695300310136887542')).toEqual('1')
            })

            it("should receive a valid consumption bill segment and correct calculate the verification digit", () => {
                //When the third digit is 6, 7 on consumption_bills(starts with 8) the 12, 24, 36 and 48 position DV is calculed with module 10
                //based on this 836100000006 989400403287 434969530030 101368875429
                expect(CalculationModules.module10('43496953003')).toEqual('0')
            });

            it("should receive a valid billet digitableLine segment and correct calculate the verification digit", () => {
                expect(CalculationModules.module10('23790.2140')).toEqual('1')
            })

            it("should receive a valid billet digitableLine segment formatted and correct calculate the verification digit", () => {
                expect(CalculationModules.module10('01052.17950')).toEqual('2')
            })

            it("should fail when a invalid string is given on module 10", () => {
                expect(CalculationModules.module10('01052.1795A')).toBe(undefined)
            })
        })

        describe("Module11", () => {
            it("should receive a valid barcode and correct calculate the global verification digit", () => {
                expect(CalculationModules.module11('3419095298146652930858794000939890000048176')).toEqual('1')
            });
 
            it("should receive a valid barcode from consumption_bill and correct calulate the global verification digit", () => {
                //When the third digit is 8, 9 on consumption_bills(starts with 8) the DV is calculed with module 10
                expect(CalculationModules.module11('8380000031324200190600056455780300008023208')).toEqual('9')
            })

            it("should receive a valid barcode segment (1) from consumption_bill and correct calulate the global verification digit", () => {
                //When the third digit is 8, 9 on consumption_bills(starts with 8) the 12, 24, 36 and 48 position DV is calculed with module 11
                expect(CalculationModules.module11('83890000031')).toEqual('5')
            })

            it("should receive a valid barcode segment (2) from consumption_bill and correct calulate the global verification digit", () => {
                expect(CalculationModules.module11('32420019060')).toEqual('8')
            })

            it("should receive a valid barcode segment (3) from consumption_bill and correct calulate the global verification digit", () => {
                expect(CalculationModules.module11('00564557803')).toEqual('8')
            })

            it("should receive a valid barcode segment (4) from consumption_bill and correct calulate the global verification digit", () => {
                expect(CalculationModules.module11('00008023208')).toEqual('6')
            })

            it("should return correct DV for first 11 CNPJ digits",() => {
                expect(CalculationModules.module11('471189600001')).toEqual('1')
            })

            it("should return correct DV for first 12 CNPJ digits",() => {
                expect(CalculationModules.module11('4711896000011')).toEqual('4')
            })

            it("should return correct DV for first 11 CNPJ digits formmatted",() => {
                expect(CalculationModules.module11('46.515.727/0001-')).toEqual('0')
            })

            it("should return correct DV for first 12 CNPJ digits formmated",() => {
                expect(CalculationModules.module11('47.118.960/0001-1')).toEqual('4')
            })

            it("should fail when a invalid string is given on module 11", () => {
                expect(CalculationModules.module11('47.118.960/0001-A')).toBe(undefined)
            })

            
        })

        describe("Custom Module", () => {
            it("Should receive the firsts 9 cpf digit and calculate the DV correctly", () =>{
                expect(CalculationModules.moduleCustomCpf('581253102')).toEqual('1')
            } ) 

            it("Should receive the firsts 9 cpf digit plus the tenth DV digit and calculate the DV correctly", () => {
                expect(CalculationModules.moduleCustomCpf('190.082.518-0')).toEqual('9')
            }) 

            it("should fail when a invalid string is given on custom module", () => {
                expect(CalculationModules.moduleCustomCpf('320.925.330-7A')).toBe(undefined)
            })
        })

        describe("Date Factor", () => {
            it("should return correct date when a date factor before 9819 is given", () => {
                expect(GeneralUtilities.dateFactor('9819')).toBe("2024-08-25T00:00:00.000Z")
            })

            it("should return correct date when a date factor 9999 is given", () => {
                expect(GeneralUtilities.dateFactor('9999')).toBe("2025-02-21T00:00:00.000Z")
            })

            it("should return correct date when a date factor is given after 9999", () => {
                expect(GeneralUtilities.dateFactor('1031')).toBe("2025-03-25T00:00:00.000Z")
            })
        })

        describe("generalSplitter", () => {
            it("should correctly split any given string passing only one parameter", () => {
                expect(GeneralUtilities.generalSplitter('abcdefghijklmnopqrstuvxwyz',['0:5'])).toEqual(['abcde'])
            })

            it("should correctly split any given string passing multiple parameters", () => {
                expect(GeneralUtilities.generalSplitter('abcdefghijklmnopqrstuvxwyz',['0:5', '5:12', '12:24', '24:26'])).toEqual(['abcde', 'fghijkl', 'mnopqrstuvxw', 'yz'])
            })

            it("should correctly split any give string passing multiple parameters, mixed with negative indexes", () => {
                expect(GeneralUtilities.generalSplitter('abcdefghijklmnopqrstuvxwyz',['0:5', '-5'])).toEqual(['abcde', 'vxwyz'])
            })

            it("should correctly split any give string passing with one parameter, but it mixes with negative indexes", () => {
                expect(GeneralUtilities.generalSplitter('abcdefghijklmnopqrstuvxwyz',['0:-5'])).toEqual(['abcdefghijklmnopqrstu'])
            })

            it("should correctly return an empty value when a split is impossible", () => {
                expect(GeneralUtilities.generalSplitter('abcdefghijklmnopqrstuvxwyz',['-9:-10', '-7','-10: -20'])).toEqual(['','tuvxwyz',''])
            })

            it("should correctly return an empty array when a empty string is given", () => {
                expect(GeneralUtilities.generalSplitter('',['0:5', '5:12', '12:24', '24'])).toEqual([])
            })
        })
    }) 