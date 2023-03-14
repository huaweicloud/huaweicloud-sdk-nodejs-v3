import { CreateImageVariationTaskRequestBody } from './CreateImageVariationTaskRequestBody';


export class CreateImageVariationTaskRequest {
    public body?: CreateImageVariationTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateImageVariationTaskRequestBody): CreateImageVariationTaskRequest {
        this['body'] = body;
        return this;
    }
}