import { ProgramItemRequestBase } from './ProgramItemRequestBase';
import { ProgramRequestBase } from './ProgramRequestBase';


export class CreateProgramRequestDTO {
    public programName?: string;
    public programItemList?: Array<ProgramItemRequestBase>;
    public constructor(programName?: string) { 
        this['programName'] = programName;
    }
    public withProgramName(programName: string): CreateProgramRequestDTO {
        this['programName'] = programName;
        return this;
    }
    public withProgramItemList(programItemList: Array<ProgramItemRequestBase>): CreateProgramRequestDTO {
        this['programItemList'] = programItemList;
        return this;
    }
}