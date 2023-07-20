

export class SelectorConfigBody {
    private 'all_supported'?: boolean;
    private 'resource_types'?: Array<string>;
    public constructor(allSupported?: boolean, resourceTypes?: Array<string>) { 
        this['all_supported'] = allSupported;
        this['resource_types'] = resourceTypes;
    }
    public withAllSupported(allSupported: boolean): SelectorConfigBody {
        this['all_supported'] = allSupported;
        return this;
    }
    public set allSupported(allSupported: boolean  | undefined) {
        this['all_supported'] = allSupported;
    }
    public get allSupported(): boolean | undefined {
        return this['all_supported'];
    }
    public withResourceTypes(resourceTypes: Array<string>): SelectorConfigBody {
        this['resource_types'] = resourceTypes;
        return this;
    }
    public set resourceTypes(resourceTypes: Array<string>  | undefined) {
        this['resource_types'] = resourceTypes;
    }
    public get resourceTypes(): Array<string> | undefined {
        return this['resource_types'];
    }
}