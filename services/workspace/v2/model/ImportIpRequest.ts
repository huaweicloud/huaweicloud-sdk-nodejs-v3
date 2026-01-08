import { ImportIpRequestBody } from './ImportIpRequestBody';


export class ImportIpRequest {
    public body?: ImportIpRequestBody;
    public constructor() { 
    }
    public withBody(body: ImportIpRequestBody): ImportIpRequest {
        this['body'] = body;
        return this;
    }
}