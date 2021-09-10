import { VehicleLicenseRequestBody } from './VehicleLicenseRequestBody';


export class RecognizeVehicleLicenseRequest {
    public body?: VehicleLicenseRequestBody;
    public constructor() { 
    }
    public withBody(body: VehicleLicenseRequestBody): RecognizeVehicleLicenseRequest {
        this['body'] = body;
        return this;
    }
}