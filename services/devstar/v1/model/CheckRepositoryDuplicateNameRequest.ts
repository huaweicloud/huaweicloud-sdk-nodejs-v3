

export class CheckRepositoryDuplicateNameRequest {
    private 'X-Language'?: string;
    private 'project_id'?: string;
    public name?: string;
    private 'region_id'?: string;
    public constructor(projectId?: string, name?: string, regionId?: string) { 
        this['project_id'] = projectId;
        this['name'] = name;
        this['region_id'] = regionId;
    }
    public withXLanguage(xLanguage: string): CheckRepositoryDuplicateNameRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withProjectId(projectId: string): CheckRepositoryDuplicateNameRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): CheckRepositoryDuplicateNameRequest {
        this['name'] = name;
        return this;
    }
    public withRegionId(regionId: string): CheckRepositoryDuplicateNameRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
}