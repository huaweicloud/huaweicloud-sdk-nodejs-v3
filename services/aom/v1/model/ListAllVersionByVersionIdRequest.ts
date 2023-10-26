import { SearchScriptsRequestBody } from './SearchScriptsRequestBody';


export class ListAllVersionByVersionIdRequest {
    public body?: SearchScriptsRequestBody;
    public constructor() { 
    }
    public withBody(body: SearchScriptsRequestBody): ListAllVersionByVersionIdRequest {
        this['body'] = body;
        return this;
    }
}