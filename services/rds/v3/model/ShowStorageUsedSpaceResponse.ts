
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStorageUsedSpaceResponse extends SdkResponse {
    private 'node_id'?: string;
    public used?: string;
    public constructor() { 
        super();
    }
    public withNodeId(nodeId: string): ShowStorageUsedSpaceResponse {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withUsed(used: string): ShowStorageUsedSpaceResponse {
        this['used'] = used;
        return this;
    }
}