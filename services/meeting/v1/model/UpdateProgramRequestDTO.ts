import { ProgramItemRequestBase } from './ProgramItemRequestBase';
import { ProgramRequestBase } from './ProgramRequestBase';


export class UpdateProgramRequestDTO {
    public programName: string;
    public programItemList?: Array<ProgramItemRequestBase>;
    public constructor(programName?: any) { 
        this['programName'] = programName;
    }
    public withProgramName(programName: string): UpdateProgramRequestDTO {
        this['programName'] = programName;
        return this;
    }
    public withProgramItemList(programItemList: Array<ProgramItemRequestBase>): UpdateProgramRequestDTO {
        this['programItemList'] = programItemList;
        return this;
    }
}