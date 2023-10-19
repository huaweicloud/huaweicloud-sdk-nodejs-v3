import { UntagCloudConnectionRequestBody } from './UntagCloudConnectionRequestBody';


export class UntagCloudConnectionRequest {
    public id?: string;
    public body?: UntagCloudConnectionRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UntagCloudConnectionRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UntagCloudConnectionRequestBody): UntagCloudConnectionRequest {
        this['body'] = body;
        return this;
    }
}