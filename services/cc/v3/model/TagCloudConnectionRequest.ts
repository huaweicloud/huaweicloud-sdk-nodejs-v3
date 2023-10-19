import { TagCloudConnectionRequestBody } from './TagCloudConnectionRequestBody';


export class TagCloudConnectionRequest {
    public id?: string;
    public body?: TagCloudConnectionRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): TagCloudConnectionRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: TagCloudConnectionRequestBody): TagCloudConnectionRequest {
        this['body'] = body;
        return this;
    }
}