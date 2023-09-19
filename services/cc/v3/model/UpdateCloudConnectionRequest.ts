import { UpdateCloudConnectionRequestBody } from './UpdateCloudConnectionRequestBody';


export class UpdateCloudConnectionRequest {
    public id?: string;
    public body?: UpdateCloudConnectionRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateCloudConnectionRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateCloudConnectionRequestBody): UpdateCloudConnectionRequest {
        this['body'] = body;
        return this;
    }
}