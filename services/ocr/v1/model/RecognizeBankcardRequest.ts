import { BankcardRequestBody } from './BankcardRequestBody';


export class RecognizeBankcardRequest {
    public body?: BankcardRequestBody;
    public constructor() { 
    }
    public withBody(body: BankcardRequestBody): RecognizeBankcardRequest {
        this['body'] = body;
        return this;
    }
}