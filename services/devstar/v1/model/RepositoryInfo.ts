

export class RepositoryInfo {
    public name?: string;
    private 'project_id'?: string | undefined;
    private 'region_id'?: string | undefined;
    public constructor() { 
    }
    public withName(name: string): RepositoryInfo {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): RepositoryInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withRegionId(regionId: string): RepositoryInfo {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
}