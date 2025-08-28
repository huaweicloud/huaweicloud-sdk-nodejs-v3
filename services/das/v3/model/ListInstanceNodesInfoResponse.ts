import { InstanceNodesInfoInstanceNodes } from './InstanceNodesInfoInstanceNodes';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceNodesInfoResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'instance_nodes'?: Array<InstanceNodesInfoInstanceNodes>;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ListInstanceNodesInfoResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ListInstanceNodesInfoResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceNodes(instanceNodes: Array<InstanceNodesInfoInstanceNodes>): ListInstanceNodesInfoResponse {
        this['instance_nodes'] = instanceNodes;
        return this;
    }
    public set instanceNodes(instanceNodes: Array<InstanceNodesInfoInstanceNodes>  | undefined) {
        this['instance_nodes'] = instanceNodes;
    }
    public get instanceNodes(): Array<InstanceNodesInfoInstanceNodes> | undefined {
        return this['instance_nodes'];
    }
}