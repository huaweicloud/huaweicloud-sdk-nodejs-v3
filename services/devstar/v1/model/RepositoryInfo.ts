

export class RepositoryInfo {
    public name?: string;
    public projectId?: string;
    public regionId?: string;
    public constructor() { 
    }
    public withName(name?: string): RepositoryInfo {
        this.name = name;
        return this;
    }
    public withProjectId(projectId?: string): RepositoryInfo {
        this.projectId = projectId;
        return this;
    }
    public withRegionId(regionId?: string): RepositoryInfo {
        this.regionId = regionId;
        return this;
    }
    public getParseParam() {
        const parseParam = new RepositoryInfoParse();
        if(this.name !== null && this.name !== undefined) { 
            parseParam.setName(this.name);
        }
        if(this.projectId !== null && this.projectId !== undefined) { 
            parseParam.setProjectId(this.projectId);
        }
        if(this.regionId !== null && this.regionId !== undefined) { 
            parseParam.setRegionId(this.regionId);
        }
        return parseParam;
    }
}

export class RepositoryInfoParse {
    private 'name'?: any;
    private 'project_id'?: any;
    private 'region_id'?: any;

    public setName(name?: any) {
        this['name'] = name;
    }
    public setProjectId(projectId?: any) {
        this['project_id'] = projectId;
    }
    public setRegionId(regionId?: any) {
        this['region_id'] = regionId;
    }
}