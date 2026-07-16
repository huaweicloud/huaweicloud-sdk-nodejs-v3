import { ServerJobDeleteRequest } from './ServerJobDeleteRequest';


export class DeleteDevServerJobsRequest {
    public body?: ServerJobDeleteRequest;
    public constructor() { 
    }
    public withBody(body: ServerJobDeleteRequest): DeleteDevServerJobsRequest {
        this['body'] = body;
        return this;
    }
}