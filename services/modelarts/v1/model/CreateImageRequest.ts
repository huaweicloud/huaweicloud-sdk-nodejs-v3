import { ImageCreateReq } from './ImageCreateReq';


export class CreateImageRequest {
    public id?: string;
    public body?: ImageCreateReq;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): CreateImageRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: ImageCreateReq): CreateImageRequest {
        this['body'] = body;
        return this;
    }
}