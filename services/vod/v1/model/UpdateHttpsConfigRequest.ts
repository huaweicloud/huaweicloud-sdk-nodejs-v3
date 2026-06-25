import { ConfigCdnHttpsReq } from './ConfigCdnHttpsReq';


export class UpdateHttpsConfigRequest {
    private 'X-Sdk-Date'?: string;
    public body?: ConfigCdnHttpsReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): UpdateHttpsConfigRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: ConfigCdnHttpsReq): UpdateHttpsConfigRequest {
        this['body'] = body;
        return this;
    }
}