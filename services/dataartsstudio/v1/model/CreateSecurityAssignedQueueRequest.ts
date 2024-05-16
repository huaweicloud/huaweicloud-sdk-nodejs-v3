import { QueueSrcAssignCreateDTO } from './QueueSrcAssignCreateDTO';


export class CreateSecurityAssignedQueueRequest {
    public workspace?: string;
    public body?: QueueSrcAssignCreateDTO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateSecurityAssignedQueueRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: QueueSrcAssignCreateDTO): CreateSecurityAssignedQueueRequest {
        this['body'] = body;
        return this;
    }
}