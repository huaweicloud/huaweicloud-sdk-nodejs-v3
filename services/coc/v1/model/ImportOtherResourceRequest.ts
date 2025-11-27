import { ImportOtherResourceRequestBody } from './ImportOtherResourceRequestBody';


export class ImportOtherResourceRequest {
    public body?: ImportOtherResourceRequestBody;
    public constructor() { 
    }
    public withBody(body: ImportOtherResourceRequestBody): ImportOtherResourceRequest {
        this['body'] = body;
        return this;
    }
}