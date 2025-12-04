import { ImportTrafficRequestBody } from './ImportTrafficRequestBody';


export class ImportTrafficRequest {
    public body?: ImportTrafficRequestBody;
    public constructor() { 
    }
    public withBody(body: ImportTrafficRequestBody): ImportTrafficRequest {
        this['body'] = body;
        return this;
    }
}