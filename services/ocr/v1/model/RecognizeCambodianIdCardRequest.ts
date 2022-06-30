import { CambodianIdCardRequestBody } from './CambodianIdCardRequestBody';


export class RecognizeCambodianIdCardRequest {
    public body?: CambodianIdCardRequestBody;
    public constructor() { 
    }
    public withBody(body: CambodianIdCardRequestBody): RecognizeCambodianIdCardRequest {
        this['body'] = body;
        return this;
    }
}