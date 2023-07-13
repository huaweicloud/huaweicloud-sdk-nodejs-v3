import { StreamForbiddenSetting } from './StreamForbiddenSetting';


export class UpdateStreamForbiddenRequest {
    public body?: StreamForbiddenSetting;
    public constructor() { 
    }
    public withBody(body: StreamForbiddenSetting): UpdateStreamForbiddenRequest {
        this['body'] = body;
        return this;
    }
}