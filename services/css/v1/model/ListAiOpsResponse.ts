import { AiOps } from './AiOps';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAiOpsResponse extends SdkResponse {
    private 'aiops_list'?: Array<AiOps>;
    private 'total_size'?: number;
    public constructor() { 
        super();
    }
    public withAiopsList(aiopsList: Array<AiOps>): ListAiOpsResponse {
        this['aiops_list'] = aiopsList;
        return this;
    }
    public set aiopsList(aiopsList: Array<AiOps>  | undefined) {
        this['aiops_list'] = aiopsList;
    }
    public get aiopsList(): Array<AiOps> | undefined {
        return this['aiops_list'];
    }
    public withTotalSize(totalSize: number): ListAiOpsResponse {
        this['total_size'] = totalSize;
        return this;
    }
    public set totalSize(totalSize: number  | undefined) {
        this['total_size'] = totalSize;
    }
    public get totalSize(): number | undefined {
        return this['total_size'];
    }
}