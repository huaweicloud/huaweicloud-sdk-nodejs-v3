import { ThailandLicensePlateRequestBody } from './ThailandLicensePlateRequestBody';


export class RecognizeThailandLicensePlateRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: ThailandLicensePlateRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeThailandLicensePlateRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: ThailandLicensePlateRequestBody): RecognizeThailandLicensePlateRequest {
        this['body'] = body;
        return this;
    }
}