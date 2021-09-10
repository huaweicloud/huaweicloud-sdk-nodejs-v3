import { BusinessLicenseRequestBody } from './BusinessLicenseRequestBody';


export class RecognizeBusinessLicenseRequest {
    public body?: BusinessLicenseRequestBody;
    public constructor() { 
    }
    public withBody(body: BusinessLicenseRequestBody): RecognizeBusinessLicenseRequest {
        this['body'] = body;
        return this;
    }
}