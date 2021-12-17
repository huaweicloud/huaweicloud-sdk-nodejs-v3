import { ThailandLicensePlateRequestBody } from './ThailandLicensePlateRequestBody';


export class RecognizeThailandLicensePlateRequest {
    public body?: ThailandLicensePlateRequestBody;
    public constructor() { 
    }
    public withBody(body: ThailandLicensePlateRequestBody): RecognizeThailandLicensePlateRequest {
        this['body'] = body;
        return this;
    }
}