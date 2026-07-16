import { UpdateImageGroupRequestBody } from './UpdateImageGroupRequestBody';


export class UpdateImageGroupRequest {
    public id?: string;
    public body?: UpdateImageGroupRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateImageGroupRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateImageGroupRequestBody): UpdateImageGroupRequest {
        this['body'] = body;
        return this;
    }
}