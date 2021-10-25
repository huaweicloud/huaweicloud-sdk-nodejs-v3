import { InsurancePolicyRequestBody } from './InsurancePolicyRequestBody';


export class RecognizeInsurancePolicyRequest {
    public body?: InsurancePolicyRequestBody;
    public constructor() { 
    }
    public withBody(body: InsurancePolicyRequestBody): RecognizeInsurancePolicyRequest {
        this['body'] = body;
        return this;
    }
}