import { ImportTableRequestBody } from './ImportTableRequestBody';


export class ImportTableRequest {
    public body?: ImportTableRequestBody;
    public constructor() { 
    }
    public withBody(body: ImportTableRequestBody): ImportTableRequest {
        this['body'] = body;
        return this;
    }
}