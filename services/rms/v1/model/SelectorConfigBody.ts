

export class SelectorConfigBody {
    private 'all_supported': boolean | undefined;
    private 'resource_types': Array<string> | undefined;
    public constructor(allSupported?: any, resourceTypes?: any) { 
        this['all_supported'] = allSupported;
        this['resource_types'] = resourceTypes;
    }
    public withAllSupported(allSupported: boolean): SelectorConfigBody {
        this['all_supported'] = allSupported;
        return this;
    }
    public set allSupported(allSupported: boolean | undefined) {
        this['all_supported'] = allSupported;
    }
    public get allSupported() {
        return this['all_supported'];
    }
    public withResourceTypes(resourceTypes: Array<string>): SelectorConfigBody {
        this['resource_types'] = resourceTypes;
        return this;
    }
    public set resourceTypes(resourceTypes: Array<string> | undefined) {
        this['resource_types'] = resourceTypes;
    }
    public get resourceTypes() {
        return this['resource_types'];
    }
}