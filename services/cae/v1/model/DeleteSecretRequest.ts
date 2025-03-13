

export class DeleteSecretRequest {
    private 'secret_id'?: string;
    private 'X-Enterprise-Project-ID'?: string;
    public constructor(secretId?: string) { 
        this['secret_id'] = secretId;
    }
    public withSecretId(secretId: string): DeleteSecretRequest {
        this['secret_id'] = secretId;
        return this;
    }
    public set secretId(secretId: string  | undefined) {
        this['secret_id'] = secretId;
    }
    public get secretId(): string | undefined {
        return this['secret_id'];
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): DeleteSecretRequest {
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