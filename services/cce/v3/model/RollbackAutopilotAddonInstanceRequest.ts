import { AddonInstanceRollbackRequest } from './AddonInstanceRollbackRequest';


export class RollbackAutopilotAddonInstanceRequest {
    public id?: string;
    public body?: AddonInstanceRollbackRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): RollbackAutopilotAddonInstanceRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: AddonInstanceRollbackRequest): RollbackAutopilotAddonInstanceRequest {
        this['body'] = body;
        return this;
    }
}