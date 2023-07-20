

export class ApplicationBaseV3 {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'region_id'?: string;
    private 'region_name'?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    public icon?: string;
    public constructor(name?: string, regionId?: string, regionName?: string, projectId?: string, projectName?: string) { 
        this['name'] = name;
        this['region_id'] = regionId;
        this['region_name'] = regionName;
        this['project_id'] = projectId;
        this['project_name'] = projectName;
    }
    public withId(id: string): ApplicationBaseV3 {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ApplicationBaseV3 {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ApplicationBaseV3 {
        this['description'] = description;
        return this;
    }
    public withRegionId(regionId: string): ApplicationBaseV3 {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withRegionName(regionName: string): ApplicationBaseV3 {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withProjectId(projectId: string): ApplicationBaseV3 {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): ApplicationBaseV3 {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withIcon(icon: string): ApplicationBaseV3 {
        this['icon'] = icon;
        return this;
    }
}