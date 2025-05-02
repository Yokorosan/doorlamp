import { CnpjsOperations } from "../../main/service/cnpjs"

describe("Cnpj Operations", () => {
    describe('Validator', () => {
        it("Should return true when is a valid cnpj", () => {
            const isValid = CnpjsOperations.validateCnpj('47118960000114')
            expect(isValid).toBe(true)
        })

        it("Should return true when is a valid formmated cnpj", () => {
            const isValid = CnpjsOperations.validateCnpj('47.118.960/0001-14')
            expect(isValid).toBe(true)
        })

        it("Should return false when is a invalid formmated cnpj", () => {
            const isValid = CnpjsOperations.validateCnpj('47.118.960/0001-1-')
            expect(isValid).toBe(false)
        })

        it("Should return false when is empty", () => {
            const isValid = CnpjsOperations.validateCnpj('')
            expect(isValid).toBe(false)
        })
    })

    describe('Generator CNPJ', () => {
            it('it should generate a valid CNPJ', () => {
                const cnpj = CnpjsOperations.generateCnpj()
    
                const isValid = CnpjsOperations.validateCnpj(cnpj)
                expect(isValid).toBe(true)
            });
            it('it should generate a valid formatted CNPJ', () => {
                const cnpj = CnpjsOperations.generateCnpj(true)
    
                const isValid = CnpjsOperations.validateCnpj(cnpj)
                expect(cnpj).toMatch(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)
                expect(isValid).toBe(true)
            });
            
        })
}) 