import { StartCbhRequestBody } from './StartCbhRequestBody';


export class StartCbhInstanceRequest {
    public body?: StartCbhRequestBody;
    public constructor() { 
    }
    public withBody(body: StartCbhRequestBody): StartCbhInstanceRequest {
        this['body'] = body;
        return this;
    }
}