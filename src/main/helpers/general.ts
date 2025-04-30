export class GeneralUtilities {
    public static module10(base: string): string {
        
        // Remove spaces and special characters
        const cleanBase = base.replace(/[^a-zA-Z0-9]/g, '');

        // Verify if there are any non-numeric characters after cleaning
        if (/[^0-9]/.test(cleanBase)) {
            throw new Error("Input contains non-numeric characters");
        }
        
        let integer = 2
        let baseLength = cleanBase.length
        let sum = 0
        
        
        while(baseLength > 0){
            baseLength--

            let multiply = parseInt(cleanBase[baseLength]) * integer

            if(String(multiply).length > 1) {
                sum += (+String(multiply)[0] + +String(multiply)[1]) 
            } else {
                sum += multiply
            }

            if(integer !== 1) {
                integer = 1
            }
            else {
                integer++
            }
        }

        let rest = sum % 10
        
        if(rest === 0) return "0"

        return (10 - rest).toString()
    };

    public static module11(base: string): string {
        // Remove spaces and special characters
        const cleanBase = base.replace(/[^a-zA-Z0-9]/g, '');

        // Verify if there are any non-numeric characters after cleaning
        if (/[^0-9]/.test(cleanBase)) {
            throw new Error("Input contains non-numeric characters");
        }

        let integer = 2
        let baseLength = cleanBase.length
 
        let sum = 0

        while(baseLength > 0){
            baseLength--
            sum += parseInt(cleanBase[baseLength]) * integer
            if(integer === 9) {
                integer = 2
            }
            else {
                integer++
            }
        }

        let rest = sum % 11
        if((rest === 0 || rest === 1 || rest === 10 || rest === 11) && cleanBase[0] !== '8' && cleanBase.length === 43) return "1"
        return (11 - rest).toString()
    };
    
}
//#TODO estudar a possibilidade de usar tree shake and separaçao de modulos
// pra permitir que so seja importado o que o usuario quiser usar
