

export class GetAuthorizationSchemaV5Request {
    private 'service_code'?: string;
    public constructor(serviceCode?: string) { 
        this['service_code'] = serviceCode;
    }
    public withServiceCode(serviceCode: string): GetAuthorizationSchemaV5Request {
        this['service_code'] = serviceCode;
        return this;
    }
    public set serviceCode(serviceCode: string  | undefined) {
        this['service_code'] = serviceCode;
    }
    public get serviceCode(): string | undefined {
        return this['service_code'];
    }
}