import { DeleteTasksReq } from './DeleteTasksReq';


export class DeleteTasksRequest {
    public body?: DeleteTasksReq;
    public constructor() { 
    }
    public withBody(body: DeleteTasksReq): DeleteTasksRequest {
        this['body'] = body;
        return this;
    }
}