import { FlowCompareData } from './FlowCompareData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProgressDataResponse extends SdkResponse {
    public count?: number;
    private 'create_time'?: string;
    private 'flow_compare_data'?: Array<FlowCompareData>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowProgressDataResponse {
        this['count'] = count;
        return this;
    }
    public withCreateTime(createTime: string): ShowProgressDataResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withFlowCompareData(flowCompareData: Array<FlowCompareData>): ShowProgressDataResponse {
        this['flow_compare_data'] = flowCompareData;
        return this;
    }
    public set flowCompareData(flowCompareData: Array<FlowCompareData>  | undefined) {
        this['flow_compare_data'] = flowCompareData;
    }
    public get flowCompareData(): Array<FlowCompareData> | undefined {
        return this['flow_compare_data'];
    }
}