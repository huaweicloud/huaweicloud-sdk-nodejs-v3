import { DeleteImageRequestBody } from './DeleteImageRequestBody';


export class DeleteImageRequest {
    public id?: string;
    public body?: DeleteImageRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteImageRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: DeleteImageRequestBody): DeleteImageRequest {
        this['body'] = body;
        return this;
    }
}