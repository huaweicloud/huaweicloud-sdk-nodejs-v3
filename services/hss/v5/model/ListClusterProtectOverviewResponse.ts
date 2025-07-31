
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterProtectOverviewResponse extends SdkResponse {
    private 'cluster_num'?: number;
    private 'under_protect_num'?: number;
    private 'policy_num'?: number;
    private 'event_num'?: number;
    private 'block_num'?: number;
    public constructor() { 
        super();
    }
    public withClusterNum(clusterNum: number): ListClusterProtectOverviewResponse {
        this['cluster_num'] = clusterNum;
        return this;
    }
    public set clusterNum(clusterNum: number  | undefined) {
        this['cluster_num'] = clusterNum;
    }
    public get clusterNum(): number | undefined {
        return this['cluster_num'];
    }
    public withUnderProtectNum(underProtectNum: number): ListClusterProtectOverviewResponse {
        this['under_protect_num'] = underProtectNum;
        return this;
    }
    public set underProtectNum(underProtectNum: number  | undefined) {
        this['under_protect_num'] = underProtectNum;
    }
    public get underProtectNum(): number | undefined {
        return this['under_protect_num'];
    }
    public withPolicyNum(policyNum: number): ListClusterProtectOverviewResponse {
        this['policy_num'] = policyNum;
        return this;
    }
    public set policyNum(policyNum: number  | undefined) {
        this['policy_num'] = policyNum;
    }
    public get policyNum(): number | undefined {
        return this['policy_num'];
    }
    public withEventNum(eventNum: number): ListClusterProtectOverviewResponse {
        this['event_num'] = eventNum;
        return this;
    }
    public set eventNum(eventNum: number  | undefined) {
        this['event_num'] = eventNum;
    }
    public get eventNum(): number | undefined {
        return this['event_num'];
    }
    public withBlockNum(blockNum: number): ListClusterProtectOverviewResponse {
        this['block_num'] = blockNum;
        return this;
    }
    public set blockNum(blockNum: number  | undefined) {
        this['block_num'] = blockNum;
    }
    public get blockNum(): number | undefined {
        return this['block_num'];
    }
}