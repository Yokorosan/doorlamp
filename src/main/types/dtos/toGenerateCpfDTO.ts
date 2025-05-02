import { IsNotEmpty, IsString } from "class-validator";
import { iToGenerateCpf } from "../interface/toGenerateCpfInterface";

export class ToGenerateCPfDTO implements iToGenerateCpf{
    @IsString()
    @IsNotEmpty()
    public originState: string
}