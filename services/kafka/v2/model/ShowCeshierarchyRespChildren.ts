

export class ShowCeshierarchyRespChildren {
    public name?: string;
    public metrics?: Array<string>;
    private 'key_name'?: Array<string> | undefined;
    private 'dim_router'?: Array<string> | undefined;
    public constructor() { 
    }
    public withName(name: string): ShowCeshierarchyRespChildren {
        this['name'] = name;
        return this;
    }
    public withMetrics(metrics: Array<string>): ShowCeshierarchyRespChildren {
        this['metrics'] = metrics;
        return this;
    }
    public withKeyName(keyName: Array<string>): ShowCeshierarchyRespChildren {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: Array<string> | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName() {
        return this['key_name'];
    }
    public withDimRouter(dimRouter: Array<string>): ShowCeshierarchyRespChildren {
        this['dim_router'] = dimRouter;
        return this;
    }
    public set dimRouter(dimRouter: Array<string> | undefined) {
        this['dim_router'] = dimRouter;
    }
    public get dimRouter() {
        return this['dim_router'];
    }
}