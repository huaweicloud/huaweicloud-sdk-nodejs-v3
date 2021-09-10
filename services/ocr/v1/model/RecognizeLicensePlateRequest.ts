import { LicensePlateRequestBody } from './LicensePlateRequestBody';


export class RecognizeLicensePlateRequest {
    public body?: LicensePlateRequestBody;
    public constructor() { 
    }
    public withBody(body: LicensePlateRequestBody): RecognizeLicensePlateRequest {
        this['body'] = body;
        return this;
    }
}