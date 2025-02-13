import { CreateEnvironmentRequestBody } from './CreateEnvironmentRequestBody';


export class CreateEnvironmentRequest {
    private 'X-Enterprise-Project-ID'?: string;
    public body?: CreateEnvironmentRequestBody;
    public constructor() { 
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): CreateEnvironmentRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withBody(body: CreateEnvironmentRequestBody): CreateEnvironmentRequest {
        this['body'] = body;
        return this;
    }
}