import { VehicleCertificateRequestBody } from './VehicleCertificateRequestBody';


export class RecognizeVehicleCertificateRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: VehicleCertificateRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeVehicleCertificateRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: VehicleCertificateRequestBody): RecognizeVehicleCertificateRequest {
        this['body'] = body;
        return this;
    }
}