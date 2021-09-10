import { TransportationLicenseRequestBody } from './TransportationLicenseRequestBody';


export class RecognizeTransportationLicenseRequest {
    public body?: TransportationLicenseRequestBody;
    public constructor() { 
    }
    public withBody(body: TransportationLicenseRequestBody): RecognizeTransportationLicenseRequest {
        this['body'] = body;
        return this;
    }
}