import { DevServerJobCreateRequest } from './DevServerJobCreateRequest';


export class CreateDevServerJobRequest {
    public body?: DevServerJobCreateRequest;
    public constructor() { 
    }
    public withBody(body: DevServerJobCreateRequest): CreateDevServerJobRequest {
        this['body'] = body;
        return this;
    }
}