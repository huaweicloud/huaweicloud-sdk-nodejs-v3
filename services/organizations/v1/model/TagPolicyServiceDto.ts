

export class TagPolicyServiceDto {
    private 'service_name'?: string;
    private 'resource_types'?: Array<string>;
    private 'support_all'?: boolean;
    public constructor(serviceName?: string, resourceTypes?: Array<string>, supportAll?: boolean) { 
        this['service_name'] = serviceName;
        this['resource_types'] = resourceTypes;
        this['support_all'] = supportAll;
    }
    public withServiceName(serviceName: string): TagPolicyServiceDto {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withResourceTypes(resourceTypes: Array<string>): TagPolicyServiceDto {
        this['resource_types'] = resourceTypes;
        return this;
    }
    public set resourceTypes(resourceTypes: Array<string>  | undefined) {
        this['resource_types'] = resourceTypes;
    }
    public get resourceTypes(): Array<string> | undefined {
        return this['resource_types'];
    }
    public withSupportAll(supportAll: boolean): TagPolicyServiceDto {
        this['support_all'] = supportAll;
        return this;
    }
    public set supportAll(supportAll: boolean  | undefined) {
        this['support_all'] = supportAll;
    }
    public get supportAll(): boolean | undefined {
        return this['support_all'];
    }
}