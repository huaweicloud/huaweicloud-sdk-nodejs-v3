import { AddonInstanceRollbackRequest } from './AddonInstanceRollbackRequest';


export class RollbackAddonInstanceRequest {
    public id?: string;
    public body?: AddonInstanceRollbackRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): RollbackAddonInstanceRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: AddonInstanceRollbackRequest): RollbackAddonInstanceRequest {
        this['body'] = body;
        return this;
    }
}