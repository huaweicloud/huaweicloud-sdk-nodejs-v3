

export class ListResourcePackagesRequest {
    private 'resource_spec_code'?: string;
    public constructor() { 
    }
    public withResourceSpecCode(resourceSpecCode: string): ListResourcePackagesRequest {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
}