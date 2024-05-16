import { QueueSrcAssignUpdateDTO } from './QueueSrcAssignUpdateDTO';


export class UpdateSecurityAssignedQueueRequest {
    public workspace?: string;
    public id?: string;
    public body?: QueueSrcAssignUpdateDTO;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): UpdateSecurityAssignedQueueRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): UpdateSecurityAssignedQueueRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: QueueSrcAssignUpdateDTO): UpdateSecurityAssignedQueueRequest {
        this['body'] = body;
        return this;
    }
}