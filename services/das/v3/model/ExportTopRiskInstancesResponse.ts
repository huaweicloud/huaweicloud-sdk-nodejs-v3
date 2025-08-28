import { TopRiskInfo } from './TopRiskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportTopRiskInstancesResponse extends SdkResponse {
    private 'top_risk_info'?: Array<TopRiskInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withTopRiskInfo(topRiskInfo: Array<TopRiskInfo>): ExportTopRiskInstancesResponse {
        this['top_risk_info'] = topRiskInfo;
        return this;
    }
    public set topRiskInfo(topRiskInfo: Array<TopRiskInfo>  | undefined) {
        this['top_risk_info'] = topRiskInfo;
    }
    public get topRiskInfo(): Array<TopRiskInfo> | undefined {
        return this['top_risk_info'];
    }
    public withTotalCount(totalCount: number): ExportTopRiskInstancesResponse {
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