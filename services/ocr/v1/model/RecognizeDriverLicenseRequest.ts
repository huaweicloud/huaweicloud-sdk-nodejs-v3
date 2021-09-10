import { DriverLicenseRequestBody } from './DriverLicenseRequestBody';


export class RecognizeDriverLicenseRequest {
    public body?: DriverLicenseRequestBody;
    public constructor() { 
    }
    public withBody(body: DriverLicenseRequestBody): RecognizeDriverLicenseRequest {
        this['body'] = body;
        return this;
    }
}