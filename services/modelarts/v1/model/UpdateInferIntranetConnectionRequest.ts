import { UpdateIntranetConnectionRequestBody } from './UpdateIntranetConnectionRequestBody';


export class UpdateInferIntranetConnectionRequest {
    public id?: string;
    public body?: UpdateIntranetConnectionRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateInferIntranetConnectionRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateIntranetConnectionRequestBody): UpdateInferIntranetConnectionRequest {
        this['body'] = body;
        return this;
    }
}