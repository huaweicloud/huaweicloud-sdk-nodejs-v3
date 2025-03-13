

export class ListSecretsRequest {
    private 'X-Enterprise-Project-ID'?: string;
    public constructor() { 
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): ListSecretsRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
}