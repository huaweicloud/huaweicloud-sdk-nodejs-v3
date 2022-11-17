import { MyanmarDriverLicenseRequestBody } from './MyanmarDriverLicenseRequestBody';


export class RecognizeMyanmarDriverLicenseRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: MyanmarDriverLicenseRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeMyanmarDriverLicenseRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: MyanmarDriverLicenseRequestBody): RecognizeMyanmarDriverLicenseRequest {
        this['body'] = body;
        return this;
    }
}