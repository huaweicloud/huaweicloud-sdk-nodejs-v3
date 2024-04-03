import { GenerateMacRequestBody } from './GenerateMacRequestBody';


export class GenerateMacRequest {
    public body?: GenerateMacRequestBody;
    public constructor() { 
    }
    public withBody(body: GenerateMacRequestBody): GenerateMacRequest {
        this['body'] = body;
        return this;
    }
}