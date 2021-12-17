import { MyanmarIdcardRequestBody } from './MyanmarIdcardRequestBody';


export class RecognizeMyanmarIdcardRequest {
    public body?: MyanmarIdcardRequestBody;
    public constructor() { 
    }
    public withBody(body: MyanmarIdcardRequestBody): RecognizeMyanmarIdcardRequest {
        this['body'] = body;
        return this;
    }
}