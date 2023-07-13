

export class ProgramItemResponseBase {
    public materialId?: string;
    public materialName?: string;
    public filePath?: string;
    public playTime?: number;
    public constructor() { 
    }
    public withMaterialId(materialId: string): ProgramItemResponseBase {
        this['materialId'] = materialId;
        return this;
    }
    public withMaterialName(materialName: string): ProgramItemResponseBase {
        this['materialName'] = materialName;
        return this;
    }
    public withFilePath(filePath: string): ProgramItemResponseBase {
        this['filePath'] = filePath;
        return this;
    }
    public withPlayTime(playTime: number): ProgramItemResponseBase {
        this['playTime'] = playTime;
        return this;
    }
}