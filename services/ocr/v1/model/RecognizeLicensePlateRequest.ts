import { LicensePlateRequestBody } from './LicensePlateRequestBody';


export class RecognizeLicensePlateRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: LicensePlateRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeLicensePlateRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: LicensePlateRequestBody): RecognizeLicensePlateRequest {
        this['body'] = body;
        return this;
    }
}