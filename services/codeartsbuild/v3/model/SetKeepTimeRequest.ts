import { SetKeepTimeRequestBody } from './SetKeepTimeRequestBody';


export class SetKeepTimeRequest {
    public body?: SetKeepTimeRequestBody;
    public constructor() { 
    }
    public withBody(body: SetKeepTimeRequestBody): SetKeepTimeRequest {
        this['body'] = body;
        return this;
    }
}