import { VehicleLicenseRequestBody } from './VehicleLicenseRequestBody';


export class RecognizeVehicleLicenseRequest {
    private 'Enterprise-Project-Id'?: string | undefined;
    public body?: VehicleLicenseRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeVehicleLicenseRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: VehicleLicenseRequestBody): RecognizeVehicleLicenseRequest {
        this['body'] = body;
        return this;
    }
}