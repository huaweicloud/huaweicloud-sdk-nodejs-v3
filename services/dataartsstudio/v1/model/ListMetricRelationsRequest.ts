

export class ListMetricRelationsRequest {
    public workspace?: string;
    public id?: string;
    private 'biz_type'?: string;
    public constructor(workspace?: string, id?: string, bizType?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
        this['biz_type'] = bizType;
    }
    public withWorkspace(workspace: string): ListMetricRelationsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): ListMetricRelationsRequest {
        this['id'] = id;
        return this;
    }
    public withBizType(bizType: string): ListMetricRelationsRequest {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: string  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): string | undefined {
        return this['biz_type'];
    }
}