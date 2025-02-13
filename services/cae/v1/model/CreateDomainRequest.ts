import { CreateDomainReq } from './CreateDomainReq';


export class CreateDomainRequest {
    private 'X-Enterprise-Project-ID'?: string;
    private 'X-Environment-ID'?: string;
    public body?: CreateDomainReq;
    public constructor(xEnvironmentID?: string) { 
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): CreateDomainRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withXEnvironmentID(xEnvironmentID: string): CreateDomainRequest {
        this['X-Environment-ID'] = xEnvironmentID;
        return this;
    }
    public set xEnvironmentID(xEnvironmentID: string  | undefined) {
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public get xEnvironmentID(): string | undefined {
        return this['X-Environment-ID'];
    }
    public withBody(body: CreateDomainReq): CreateDomainRequest {
        this['body'] = body;
        return this;
    }
}