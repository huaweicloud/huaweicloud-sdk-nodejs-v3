

export class AlterWafProductInfo {
    private 'resource_spec_code'?: string | undefined;
    public constructor() { 
    }
    public withResourceSpecCode(resourceSpecCode: string): AlterWafProductInfo {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode() {
        return this['resource_spec_code'];
    }
}