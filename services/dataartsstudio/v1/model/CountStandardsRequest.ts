

export class CountStandardsRequest {
    public workspace?: string;
    public id?: string;
    private 'biz_type'?: string;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): CountStandardsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): CountStandardsRequest {
        this['id'] = id;
        return this;
    }
    public withBizType(bizType: string): CountStandardsRequest {
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