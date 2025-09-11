import { MonitorInfoRequest } from './MonitorInfoRequest';


export class ShowInstanceMonitorInfoRequest {
    private 'instance_id'?: string;
    public body?: MonitorInfoRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowInstanceMonitorInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: MonitorInfoRequest): ShowInstanceMonitorInfoRequest {
        this['body'] = body;
        return this;
    }
}