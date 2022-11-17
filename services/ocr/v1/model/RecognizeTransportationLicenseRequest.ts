import { TransportationLicenseRequestBody } from './TransportationLicenseRequestBody';


export class RecognizeTransportationLicenseRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: TransportationLicenseRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeTransportationLicenseRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: TransportationLicenseRequestBody): RecognizeTransportationLicenseRequest {
        this['body'] = body;
        return this;
    }
}