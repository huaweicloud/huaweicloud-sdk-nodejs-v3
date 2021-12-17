import { MyanmarDriverLicenseRequestBody } from './MyanmarDriverLicenseRequestBody';


export class RecognizeMyanmarDriverLicenseRequest {
    public body?: MyanmarDriverLicenseRequestBody;
    public constructor() { 
    }
    public withBody(body: MyanmarDriverLicenseRequestBody): RecognizeMyanmarDriverLicenseRequest {
        this['body'] = body;
        return this;
    }
}