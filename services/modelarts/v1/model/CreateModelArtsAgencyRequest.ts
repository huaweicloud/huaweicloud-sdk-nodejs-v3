import { ModelArtsAgencyRequest } from './ModelArtsAgencyRequest';


export class CreateModelArtsAgencyRequest {
    public body?: ModelArtsAgencyRequest;
    public constructor() { 
    }
    public withBody(body: ModelArtsAgencyRequest): CreateModelArtsAgencyRequest {
        this['body'] = body;
        return this;
    }
}