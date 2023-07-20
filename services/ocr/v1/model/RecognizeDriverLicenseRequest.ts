import { DriverLicenseRequestBody } from './DriverLicenseRequestBody';


export class RecognizeDriverLicenseRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: DriverLicenseRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeDriverLicenseRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: DriverLicenseRequestBody): RecognizeDriverLicenseRequest {
        this['body'] = body;
        return this;
    }
}