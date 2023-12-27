import { LanguageCheckInfoReq } from './LanguageCheckInfoReq';


export class CheckTextLanguageRequest {
    public body?: LanguageCheckInfoReq;
    public constructor() { 
    }
    public withBody(body: LanguageCheckInfoReq): CheckTextLanguageRequest {
        this['body'] = body;
        return this;
    }
}