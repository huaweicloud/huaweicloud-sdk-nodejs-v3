import { NodeInfo } from './NodeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceNodesInfoResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public nodes?: Array<NodeInfo>;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowInstanceNodesInfoResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ShowInstanceNodesInfoResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withNodes(nodes: Array<NodeInfo>): ShowInstanceNodesInfoResponse {
        this['nodes'] = nodes;
        return this;
    }
}