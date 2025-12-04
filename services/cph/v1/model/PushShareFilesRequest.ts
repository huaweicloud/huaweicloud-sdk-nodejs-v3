import { PushShareFilesRequestBody } from './PushShareFilesRequestBody';


export class PushShareFilesRequest {
    public body?: PushShareFilesRequestBody;
    public constructor() { 
    }
    public withBody(body: PushShareFilesRequestBody): PushShareFilesRequest {
        this['body'] = body;
        return this;
    }
}