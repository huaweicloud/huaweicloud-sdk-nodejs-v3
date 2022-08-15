import { MacaoIdCardRequestBody } from './MacaoIdCardRequestBody';


export class RecognizeMacaoIdCardRequest {
    public body?: MacaoIdCardRequestBody;
    public constructor() { 
    }
    public withBody(body: MacaoIdCardRequestBody): RecognizeMacaoIdCardRequest {
        this['body'] = body;
        return this;
    }
}