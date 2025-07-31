import { StreamForbiddenOnceSetting } from './StreamForbiddenOnceSetting';


export class CreateStreamForbiddenOnceRequest {
    public body?: StreamForbiddenOnceSetting;
    public constructor() { 
    }
    public withBody(body: StreamForbiddenOnceSetting): CreateStreamForbiddenOnceRequest {
        this['body'] = body;
        return this;
    }
}