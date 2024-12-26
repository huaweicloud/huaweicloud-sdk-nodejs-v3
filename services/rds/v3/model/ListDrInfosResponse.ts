import { InstanceDrInfo } from './InstanceDrInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDrInfosResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'instance_dr_infos'?: Array<InstanceDrInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListDrInfosResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withInstanceDrInfos(instanceDrInfos: Array<InstanceDrInfo>): ListDrInfosResponse {
        this['instance_dr_infos'] = instanceDrInfos;
        return this;
    }
    public set instanceDrInfos(instanceDrInfos: Array<InstanceDrInfo>  | undefined) {
        this['instance_dr_infos'] = instanceDrInfos;
    }
    public get instanceDrInfos(): Array<InstanceDrInfo> | undefined {
        return this['instance_dr_infos'];
    }
}