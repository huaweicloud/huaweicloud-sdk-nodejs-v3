import { ImportFunctionRequestBody } from './ImportFunctionRequestBody';


export class ImportFunctionRequest {
    public body?: ImportFunctionRequestBody;
    public constructor() { 
    }
    public withBody(body: ImportFunctionRequestBody): ImportFunctionRequest {
        this['body'] = body;
        return this;
    }
}