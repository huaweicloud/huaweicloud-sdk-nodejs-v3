

export class FlavorInfo {
    public id?: string;
    private 'cloud_service_type'?: string;
    private 'spec_type_code'?: string;
    private 'spec_code'?: string;
    public constructor() { 
    }
    public withId(id: string): FlavorInfo {
        this['id'] = id;
        return this;
    }
    public withCloudServiceType(cloudServiceType: string): FlavorInfo {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withSpecTypeCode(specTypeCode: string): FlavorInfo {
        this['spec_type_code'] = specTypeCode;
        return this;
    }
    public set specTypeCode(specTypeCode: string  | undefined) {
        this['spec_type_code'] = specTypeCode;
    }
    public get specTypeCode(): string | undefined {
        return this['spec_type_code'];
    }
    public withSpecCode(specCode: string): FlavorInfo {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
}