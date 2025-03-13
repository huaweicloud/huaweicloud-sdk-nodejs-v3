import { CreateOrUpdateSecretReq } from './CreateOrUpdateSecretReq';


export class CreateSecretRequest {
    private 'X-Enterprise-Project-ID'?: string;
    private 'X-Environment-ID'?: string;
    public body?: CreateOrUpdateSecretReq;
    public constructor(xEnvironmentID?: string) { 
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): CreateSecretRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withXEnvironmentID(xEnvironmentID: string): CreateSecretRequest {
        this['X-Environment-ID'] = xEnvironmentID;
        return this;
    }
    public set xEnvironmentID(xEnvironmentID: string  | undefined) {
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public get xEnvironmentID(): string | undefined {
        return this['X-Environment-ID'];
    }
    public withBody(body: CreateOrUpdateSecretReq): CreateSecretRequest {
        this['body'] = body;
        return this;
    }
}