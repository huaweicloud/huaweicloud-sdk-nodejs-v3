import { ResponsesCreate } from './ResponsesCreate';


export class CreateGatewayResponseV2Request {
    private 'instance_id'?: string;
    private 'group_id'?: string;
    public body?: ResponsesCreate;
    public constructor(instanceId?: string, groupId?: string) { 
        this['instance_id'] = instanceId;
        this['group_id'] = groupId;
    }
    public withInstanceId(instanceId: string): CreateGatewayResponseV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroupId(groupId: string): CreateGatewayResponseV2Request {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: ResponsesCreate): CreateGatewayResponseV2Request {
        this['body'] = body;
        return this;
    }
}