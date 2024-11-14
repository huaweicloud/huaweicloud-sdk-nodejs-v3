import { ModifyInstanceOpsWindowV3Req } from './ModifyInstanceOpsWindowV3Req';


export class ModifyInstanceMaintenanceWindowRequest {
    private 'instance_id'?: string;
    public body?: ModifyInstanceOpsWindowV3Req;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ModifyInstanceMaintenanceWindowRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ModifyInstanceOpsWindowV3Req): ModifyInstanceMaintenanceWindowRequest {
        this['body'] = body;
        return this;
    }
}