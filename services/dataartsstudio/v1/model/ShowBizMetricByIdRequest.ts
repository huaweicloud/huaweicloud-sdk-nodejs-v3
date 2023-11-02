

export class ShowBizMetricByIdRequest {
    public workspace?: string;
    public id?: string;
    public latest?: boolean;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): ShowBizMetricByIdRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): ShowBizMetricByIdRequest {
        this['id'] = id;
        return this;
    }
    public withLatest(latest: boolean): ShowBizMetricByIdRequest {
        this['latest'] = latest;
        return this;
    }
}