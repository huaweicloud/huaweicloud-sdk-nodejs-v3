

export class Material {
    public id?: string;
    public lastUpdatedBy?: string;
    public updateTime?: number;
    public materialName?: string;
    public materialResolution?: string;
    public materialSizeStr?: string;
    public filePath?: string;
    public constructor() { 
    }
    public withId(id: string): Material {
        this['id'] = id;
        return this;
    }
    public withLastUpdatedBy(lastUpdatedBy: string): Material {
        this['lastUpdatedBy'] = lastUpdatedBy;
        return this;
    }
    public withUpdateTime(updateTime: number): Material {
        this['updateTime'] = updateTime;
        return this;
    }
    public withMaterialName(materialName: string): Material {
        this['materialName'] = materialName;
        return this;
    }
    public withMaterialResolution(materialResolution: string): Material {
        this['materialResolution'] = materialResolution;
        return this;
    }
    public withMaterialSizeStr(materialSizeStr: string): Material {
        this['materialSizeStr'] = materialSizeStr;
        return this;
    }
    public withFilePath(filePath: string): Material {
        this['filePath'] = filePath;
        return this;
    }
}