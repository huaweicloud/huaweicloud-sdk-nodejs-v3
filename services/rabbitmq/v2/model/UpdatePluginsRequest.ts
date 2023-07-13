import { UpdatePluginsReq } from './UpdatePluginsReq';


export class UpdatePluginsRequest {
    private 'instance_id': string | undefined;
    public body?: UpdatePluginsReq;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdatePluginsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: UpdatePluginsReq): UpdatePluginsRequest {
        this['body'] = body;
        return this;
    }
}