

export class WorkflowDagPoliciesResp {
    private 'use_cache'?: boolean;
    public constructor() { 
    }
    public withUseCache(useCache: boolean): WorkflowDagPoliciesResp {
        this['use_cache'] = useCache;
        return this;
    }
    public set useCache(useCache: boolean  | undefined) {
        this['use_cache'] = useCache;
    }
    public get useCache(): boolean | undefined {
        return this['use_cache'];
    }
}