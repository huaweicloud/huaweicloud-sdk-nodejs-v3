import { CreateExternalIncidentRequest } from './CreateExternalIncidentRequest';


export class CreateCocIncidentRequest {
    public body?: CreateExternalIncidentRequest;
    public constructor() { 
    }
    public withBody(body: CreateExternalIncidentRequest): CreateCocIncidentRequest {
        this['body'] = body;
        return this;
    }
}