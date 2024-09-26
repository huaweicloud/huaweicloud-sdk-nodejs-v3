import { QueryResourceByTagRequestBody } from './QueryResourceByTagRequestBody';


export class CountGcbResourceByTagRequest {
    public body?: QueryResourceByTagRequestBody;
    public constructor() { 
    }
    public withBody(body: QueryResourceByTagRequestBody): CountGcbResourceByTagRequest {
        this['body'] = body;
        return this;
    }
}