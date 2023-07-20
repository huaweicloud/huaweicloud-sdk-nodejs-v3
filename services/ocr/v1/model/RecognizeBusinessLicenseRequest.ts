import { BusinessLicenseRequestBody } from './BusinessLicenseRequestBody';


export class RecognizeBusinessLicenseRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: BusinessLicenseRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeBusinessLicenseRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: BusinessLicenseRequestBody): RecognizeBusinessLicenseRequest {
        this['body'] = body;
        return this;
    }
}