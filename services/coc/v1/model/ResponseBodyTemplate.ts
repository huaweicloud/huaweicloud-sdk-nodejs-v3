

export class ResponseBodyTemplate {
    public code?: string;
    private 'provider_code'?: string;
    public msg?: string;
    public constructor() { 
    }
    public withCode(code: string): ResponseBodyTemplate {
        this['code'] = code;
        return this;
    }
    public withProviderCode(providerCode: string): ResponseBodyTemplate {
        this['provider_code'] = providerCode;
        return this;
    }
    public set providerCode(providerCode: string  | undefined) {
        this['provider_code'] = providerCode;
    }
    public get providerCode(): string | undefined {
        return this['provider_code'];
    }
    public withMsg(msg: string): ResponseBodyTemplate {
        this['msg'] = msg;
        return this;
    }
}