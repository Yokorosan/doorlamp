import { CalculationModules } from "../helpers/calculationModules"
import { GeneralUtilities } from "../helpers/general"

export class CnpjsOperations {
    public static validateCnpj(base: string): boolean {
        const cleanBase = GeneralUtilities.stringCleaner(base)
        console.log(cleanBase)
        let calculatedBase: string

        if (!base || cleanBase.length !== 14) return false

        calculatedBase = GeneralUtilities.generalSplitter(cleanBase, ["0:12", "12"])[0]

        const firstDv = CalculationModules.module11(calculatedBase)
        calculatedBase = calculatedBase + firstDv
        const secondDv = CalculationModules.module11(calculatedBase)

        return (calculatedBase + secondDv) === cleanBase
    };

    public static generateCnpj(format = false): string {
        let generatedCnpj: string

        generatedCnpj = GeneralUtilities.randomGenerator(8) + `000${GeneralUtilities.randomGenerator(1, 2)}`
        const firstDv = CalculationModules.module11(generatedCnpj)
        generatedCnpj = generatedCnpj + firstDv
        const secondDv = CalculationModules.module11(generatedCnpj)

        if (format) {
            generatedCnpj = (generatedCnpj + secondDv).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
        } else {
            generatedCnpj = generatedCnpj + secondDv
        }

        return generatedCnpj

    };
}