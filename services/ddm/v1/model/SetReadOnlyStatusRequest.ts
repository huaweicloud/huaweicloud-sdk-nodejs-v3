import { ReadOnlySwitchReq } from './ReadOnlySwitchReq';


export class SetReadOnlyStatusRequest {
    private 'instance_id'?: string;
    public body?: ReadOnlySwitchReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetReadOnlyStatusRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ReadOnlySwitchReq): SetReadOnlyStatusRequest {
        this['body'] = body;
        return this;
    }
}