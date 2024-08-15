import { HandleExternalIncidentRequest } from './HandleExternalIncidentRequest';


export class HandleCocIncidentRequest {
    public body?: HandleExternalIncidentRequest;
    public constructor() { 
    }
    public withBody(body: HandleExternalIncidentRequest): HandleCocIncidentRequest {
        this['body'] = body;
        return this;
    }
}