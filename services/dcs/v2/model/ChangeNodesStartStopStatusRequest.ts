import { ChangeNodesStartStopStatusBody } from './ChangeNodesStartStopStatusBody';


export class ChangeNodesStartStopStatusRequest {
    private 'instance_id'?: string;
    public body?: ChangeNodesStartStopStatusBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ChangeNodesStartStopStatusRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ChangeNodesStartStopStatusBody): ChangeNodesStartStopStatusRequest {
        this['body'] = body;
        return this;
    }
}