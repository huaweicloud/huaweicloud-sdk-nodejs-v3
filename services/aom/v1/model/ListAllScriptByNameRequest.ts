import { SearchScriptsRequestBody } from './SearchScriptsRequestBody';


export class ListAllScriptByNameRequest {
    public body?: SearchScriptsRequestBody;
    public constructor() { 
    }
    public withBody(body: SearchScriptsRequestBody): ListAllScriptByNameRequest {
        this['body'] = body;
        return this;
    }
}