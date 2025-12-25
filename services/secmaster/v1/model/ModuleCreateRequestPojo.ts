

export class ModuleCreateRequestPojo {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'module_json'?: string;
    private 'module_type'?: string;
    private 'metric_ids'?: string;
    public thumbnail?: string;
    private 'data_query'?: string;
    private 'boa_version'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withId(id: string): ModuleCreateRequestPojo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ModuleCreateRequestPojo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ModuleCreateRequestPojo {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): ModuleCreateRequestPojo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): ModuleCreateRequestPojo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withModuleJson(moduleJson: string): ModuleCreateRequestPojo {
        this['module_json'] = moduleJson;
        return this;
    }
    public set moduleJson(moduleJson: string  | undefined) {
        this['module_json'] = moduleJson;
    }
    public get moduleJson(): string | undefined {
        return this['module_json'];
    }
    public withModuleType(moduleType: string): ModuleCreateRequestPojo {
        this['module_type'] = moduleType;
        return this;
    }
    public set moduleType(moduleType: string  | undefined) {
        this['module_type'] = moduleType;
    }
    public get moduleType(): string | undefined {
        return this['module_type'];
    }
    public withMetricIds(metricIds: string): ModuleCreateRequestPojo {
        this['metric_ids'] = metricIds;
        return this;
    }
    public set metricIds(metricIds: string  | undefined) {
        this['metric_ids'] = metricIds;
    }
    public get metricIds(): string | undefined {
        return this['metric_ids'];
    }
    public withThumbnail(thumbnail: string): ModuleCreateRequestPojo {
        this['thumbnail'] = thumbnail;
        return this;
    }
    public withDataQuery(dataQuery: string): ModuleCreateRequestPojo {
        this['data_query'] = dataQuery;
        return this;
    }
    public set dataQuery(dataQuery: string  | undefined) {
        this['data_query'] = dataQuery;
    }
    public get dataQuery(): string | undefined {
        return this['data_query'];
    }
    public withBoaVersion(boaVersion: string): ModuleCreateRequestPojo {
        this['boa_version'] = boaVersion;
        return this;
    }
    public set boaVersion(boaVersion: string  | undefined) {
        this['boa_version'] = boaVersion;
    }
    public get boaVersion(): string | undefined {
        return this['boa_version'];
    }
}