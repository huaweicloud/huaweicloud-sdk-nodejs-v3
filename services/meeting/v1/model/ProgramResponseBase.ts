

export class ProgramResponseBase {
    public id?: string;
    public lastUpdatedBy?: string;
    public updateTime?: number;
    public programName?: string;
    public materialSizeStr?: string;
    public playTime?: number;
    public constructor() { 
    }
    public withId(id: string): ProgramResponseBase {
        this['id'] = id;
        return this;
    }
    public withLastUpdatedBy(lastUpdatedBy: string): ProgramResponseBase {
        this['lastUpdatedBy'] = lastUpdatedBy;
        return this;
    }
    public withUpdateTime(updateTime: number): ProgramResponseBase {
        this['updateTime'] = updateTime;
        return this;
    }
    public withProgramName(programName: string): ProgramResponseBase {
        this['programName'] = programName;
        return this;
    }
    public withMaterialSizeStr(materialSizeStr: string): ProgramResponseBase {
        this['materialSizeStr'] = materialSizeStr;
        return this;
    }
    public withPlayTime(playTime: number): ProgramResponseBase {
        this['playTime'] = playTime;
        return this;
    }
}