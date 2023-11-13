import { NodesInfoResp } from './NodesInfoResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNodesInformationResponse extends SdkResponse {
    private 'instance_id'?: string;
    public total?: number;
    public nodes?: Array<NodesInfoResp>;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowNodesInformationResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTotal(total: number): ShowNodesInformationResponse {
        this['total'] = total;
        return this;
    }
    public withNodes(nodes: Array<NodesInfoResp>): ShowNodesInformationResponse {
        this['nodes'] = nodes;
        return this;
    }
}