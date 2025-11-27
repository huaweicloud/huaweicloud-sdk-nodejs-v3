import { UpdateConfigSetRequestBody } from './UpdateConfigSetRequestBody';


export class UpdateConfigSetRequest {
    public configsetid?: string;
    public body?: UpdateConfigSetRequestBody;
    public constructor(configsetid?: string) { 
        this['configsetid'] = configsetid;
    }
    public withConfigsetid(configsetid: string): UpdateConfigSetRequest {
        this['configsetid'] = configsetid;
        return this;
    }
    public withBody(body: UpdateConfigSetRequestBody): UpdateConfigSetRequest {
        this['body'] = body;
        return this;
    }
}