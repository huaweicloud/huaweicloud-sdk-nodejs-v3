import { DeleteImageGroupRequestBody } from './DeleteImageGroupRequestBody';


export class DeleteImageGroupRequest {
    public id?: string;
    public body?: DeleteImageGroupRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteImageGroupRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: DeleteImageGroupRequestBody): DeleteImageGroupRequest {
        this['body'] = body;
        return this;
    }
}