

export class AggrPrometheusInfo {
    private 'project_id'?: string;
    public prometheusIds?: Array<string>;
    public id?: string;
    public name?: string;
    public constructor(projectId?: string, prometheusIds?: Array<string>, id?: string, name?: string) { 
        this['project_id'] = projectId;
        this['prometheusIds'] = prometheusIds;
        this['id'] = id;
        this['name'] = name;
    }
    public withProjectId(projectId: string): AggrPrometheusInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPrometheusIds(prometheusIds: Array<string>): AggrPrometheusInfo {
        this['prometheusIds'] = prometheusIds;
        return this;
    }
    public withId(id: string): AggrPrometheusInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AggrPrometheusInfo {
        this['name'] = name;
        return this;
    }
}