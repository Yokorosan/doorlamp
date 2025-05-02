import { GeneralUtilities } from "../helpers/general"

export class CnpjsOperations {
    public static validateCnpj(base: string): boolean {
        const cleanBase = GeneralUtilities.stringCleaner(base)
        let calculatedBase: string
        
        if(!base || cleanBase.length !== 14 ) return false

        
    };
    
    public static generateCnpj(): string {

        return ""

    };
}