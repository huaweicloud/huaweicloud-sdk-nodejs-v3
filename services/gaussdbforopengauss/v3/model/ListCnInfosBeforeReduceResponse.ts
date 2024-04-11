import { CnInfoBeforeReduce } from './CnInfoBeforeReduce';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCnInfosBeforeReduceResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'max_reduction_num'?: number;
    public nodes?: Array<CnInfoBeforeReduce>;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ListCnInfosBeforeReduceResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withMaxReductionNum(maxReductionNum: number): ListCnInfosBeforeReduceResponse {
        this['max_reduction_num'] = maxReductionNum;
        return this;
    }
    public set maxReductionNum(maxReductionNum: number  | undefined) {
        this['max_reduction_num'] = maxReductionNum;
    }
    public get maxReductionNum(): number | undefined {
        return this['max_reduction_num'];
    }
    public withNodes(nodes: Array<CnInfoBeforeReduce>): ListCnInfosBeforeReduceResponse {
        this['nodes'] = nodes;
        return this;
    }
}