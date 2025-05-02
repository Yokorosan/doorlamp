import { CpfOperations } from "../../main/service/cpf"

describe('Cpf Operations', () => {
    describe('Validator', () => {
        it('Should correctly determine if a cpf is valid',() => {
            const isValid = CpfOperations.validateCpf('39550717828')

            expect(isValid).toBe(true)
        });

        it('Should correctly determine if a cpf is valid even if it is formmated',() => {
            const isValid = CpfOperations.validateCpf('430.499.918-44')

            expect(isValid).toBe(true)
        })

        it('If is a invalid cpf length, it should return correct validation',() => {
            const isValid = CpfOperations.validateCpf('3955071782')

            expect(isValid).toBe(false)
        })

        it('If is a invalid cpf length even if it is formatted, it should return correct validation',() => {
            const isValid = CpfOperations.validateCpf('395.507.178-2-')

            expect(isValid).toBe(false)
        })

        it('If is a invalid cpf with wrong DVs, it should return correct validation',() => {
            const isValid = CpfOperations.validateCpf('395.507.178-27')

            expect(isValid).toBe(false)
        })

        it('If is a empty string it should return a correct validation',() => {
            const isValid = CpfOperations.validateCpf('')

            expect(isValid).toBe(false)
        })
    })

    describe('Generator CPF', () => {
        it('it should generate a valid CPF withou state', () => {
            const cpf = CpfOperations.generateCpf()

            const isValid = CpfOperations.validateCpf(cpf)
            expect(isValid).toBe(true)
        });
        it('it should generate a valid CPF with state', () => {
            const cpf = CpfOperations.generateCpf('SP')
            const isValid = CpfOperations.validateCpf(cpf)
            expect(isValid).toBe(true)
            expect(cpf[8]).toBe('8')
        });
        it('it should generate a valid CPF with another state', () => {
            const cpf = CpfOperations.generateCpf('DF')
            const isValid = CpfOperations.validateCpf(cpf)
            expect(isValid).toBe(true)
            expect(cpf[8]).toBe('1')
        })
    })
})