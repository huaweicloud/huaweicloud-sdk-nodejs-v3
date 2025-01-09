import { CreateScriptReq } from './CreateScriptReq';


export class CreateScriptRequest {
    public body?: CreateScriptReq;
    public constructor() { 
    }
    public withBody(body: CreateScriptReq): CreateScriptRequest {
        this['body'] = body;
        return this;
    }
}