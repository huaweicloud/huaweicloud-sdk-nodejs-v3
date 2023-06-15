import { StreamForbiddenSetting } from './StreamForbiddenSetting';


export class CreateStreamForbiddenRequest {
    public body?: StreamForbiddenSetting;
    public constructor() { 
    }
    public withBody(body: StreamForbiddenSetting): CreateStreamForbiddenRequest {
        this['body'] = body;
        return this;
    }
}