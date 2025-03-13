import { CreateOrUpdateSecretReq } from './CreateOrUpdateSecretReq';


export class UpdateSecretRequest {
    private 'secret_id'?: string;
    private 'X-Enterprise-Project-ID'?: string;
    public body?: CreateOrUpdateSecretReq;
    public constructor(secretId?: string) { 
        this['secret_id'] = secretId;
    }
    public withSecretId(secretId: string): UpdateSecretRequest {
        this['secret_id'] = secretId;
        return this;
    }
    public set secretId(secretId: string  | undefined) {
        this['secret_id'] = secretId;
    }
    public get secretId(): string | undefined {
        return this['secret_id'];
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): UpdateSecretRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withBody(body: CreateOrUpdateSecretReq): UpdateSecretRequest {
        this['body'] = body;
        return this;
    }
}