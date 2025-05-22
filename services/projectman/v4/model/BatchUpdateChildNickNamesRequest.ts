import { BatchUpdateChildUserNickNamesRequestBody } from './BatchUpdateChildUserNickNamesRequestBody';


export class BatchUpdateChildNickNamesRequest {
    public body?: BatchUpdateChildUserNickNamesRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchUpdateChildUserNickNamesRequestBody): BatchUpdateChildNickNamesRequest {
        this['body'] = body;
        return this;
    }
}