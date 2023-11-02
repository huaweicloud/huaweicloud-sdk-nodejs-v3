

export class ShowCompoundMetricByIdRequest {
    public workspace?: string;
    public id?: string;
    public latest?: boolean;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): ShowCompoundMetricByIdRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): ShowCompoundMetricByIdRequest {
        this['id'] = id;
        return this;
    }
    public withLatest(latest: boolean): ShowCompoundMetricByIdRequest {
        this['latest'] = latest;
        return this;
    }
}