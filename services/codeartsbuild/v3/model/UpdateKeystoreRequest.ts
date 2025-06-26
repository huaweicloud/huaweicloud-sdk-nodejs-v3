import { UpdateKeystoreRequestBody } from './UpdateKeystoreRequestBody';


export class UpdateKeystoreRequest {
    public id?: string;
    public body?: UpdateKeystoreRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateKeystoreRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateKeystoreRequestBody): UpdateKeystoreRequest {
        this['body'] = body;
        return this;
    }
}