

export class ShowHttpsConfigRequest {
    private 'X-Sdk-Date'?: string;
    public domain?: string;
    public constructor(domain?: string) { 
        this['domain'] = domain;
    }
    public withXSdkDate(xSdkDate: string): ShowHttpsConfigRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withDomain(domain: string): ShowHttpsConfigRequest {
        this['domain'] = domain;
        return this;
    }
}