import { UpdateTenantAccessInfoReq } from './UpdateTenantAccessInfoReq';


export class UpdateTenantAccessInfoRequest {
    private 'x-language'?: string;
    public body?: UpdateTenantAccessInfoReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): UpdateTenantAccessInfoRequest {
        this['x-language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['x-language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['x-language'];
    }
    public withBody(body: UpdateTenantAccessInfoReq): UpdateTenantAccessInfoRequest {
        this['body'] = body;
        return this;
    }
}