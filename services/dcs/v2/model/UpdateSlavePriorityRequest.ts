import { PriorityBody } from './PriorityBody';


export class UpdateSlavePriorityRequest {
    private 'instance_id': string | undefined;
    private 'group_id': string | undefined;
    private 'node_id': string | undefined;
    public body?: PriorityBody;
    public constructor(instanceId?: any, groupId?: any, nodeId?: any) { 
        this['instance_id'] = instanceId;
        this['group_id'] = groupId;
        this['node_id'] = nodeId;
    }
    public withInstanceId(instanceId: string): UpdateSlavePriorityRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withGroupId(groupId: string): UpdateSlavePriorityRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withNodeId(nodeId: string): UpdateSlavePriorityRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId() {
        return this['node_id'];
    }
    public withBody(body: PriorityBody): UpdateSlavePriorityRequest {
        this['body'] = body;
        return this;
    }
}