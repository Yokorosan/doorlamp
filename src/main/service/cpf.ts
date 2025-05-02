import { CpfEmitorStates } from "../enum/cpfEmitorState";
import { CalculationModules } from "../helpers/calculationModules";
import { GeneralUtilities } from "../helpers/general";
import { iValidatedCpf } from "../types/interface/validatedCpfInterface";

export class CpfOperations {
    public static validateCpf(base: string): boolean {

        const cleanBase = GeneralUtilities.stringCleaner(base)
        let calculatedBase: string

        if(!base || cleanBase.length !== 11 ) return false

        const baseToCalculate = GeneralUtilities.generalSplitter(cleanBase, ['0:9', '9'])
     
        calculatedBase = baseToCalculate[0]
        const firstDv = CalculationModules.moduleCustomCpf(calculatedBase)
        calculatedBase = calculatedBase + firstDv
        const secondDv = CalculationModules.moduleCustomCpf(calculatedBase)

        return cleanBase === (calculatedBase + secondDv)
    }

    public static generateCpf(state = ''): string {
        let generatedCpf: string
        const originState = !state ? GeneralUtilities.randomGenerator(1) : CpfEmitorStates[state]

        generatedCpf = GeneralUtilities.randomGenerator(8) + originState
        const firstDv = CalculationModules.moduleCustomCpf(generatedCpf)
        generatedCpf = generatedCpf + firstDv
        const secondDv =  CalculationModules.moduleCustomCpf(generatedCpf)

        return generatedCpf + secondDv
    }
}