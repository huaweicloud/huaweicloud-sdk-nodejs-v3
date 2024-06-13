

export class RemediationRunRequestBody {
    private 'all_supported'?: boolean;
    private 'resource_ids'?: Array<string>;
    public constructor(allSupported?: boolean) { 
        this['all_supported'] = allSupported;
    }
    public withAllSupported(allSupported: boolean): RemediationRunRequestBody {
        this['all_supported'] = allSupported;
        return this;
    }
    public set allSupported(allSupported: boolean  | undefined) {
        this['all_supported'] = allSupported;
    }
    public get allSupported(): boolean | undefined {
        return this['all_supported'];
    }
    public withResourceIds(resourceIds: Array<string>): RemediationRunRequestBody {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string>  | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds(): Array<string> | undefined {
        return this['resource_ids'];
    }
}