

export class ProgramRequestBase {
    public programName: string;
    public constructor(programName?: any) { 
        this['programName'] = programName;
    }
    public withProgramName(programName: string): ProgramRequestBase {
        this['programName'] = programName;
        return this;
    }
}