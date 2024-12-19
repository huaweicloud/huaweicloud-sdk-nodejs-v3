
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SyncLimitDataResponse extends SdkResponse {
    public result?: string;
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withResult(result: string): SyncLimitDataResponse {
        this['result'] = result;
        return this;
    }
    public withInstanceId(instanceId: string): SyncLimitDataResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): SyncLimitDataResponse {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withTotalCount(totalCount: number): SyncLimitDataResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}