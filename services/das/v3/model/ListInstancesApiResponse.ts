import { DASInstanceInfoDto } from './DASInstanceInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesApiResponse extends SdkResponse {
    private 'instance_infos'?: Array<DASInstanceInfoDto>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withInstanceInfos(instanceInfos: Array<DASInstanceInfoDto>): ListInstancesApiResponse {
        this['instance_infos'] = instanceInfos;
        return this;
    }
    public set instanceInfos(instanceInfos: Array<DASInstanceInfoDto>  | undefined) {
        this['instance_infos'] = instanceInfos;
    }
    public get instanceInfos(): Array<DASInstanceInfoDto> | undefined {
        return this['instance_infos'];
    }
    public withTotalCount(totalCount: number): ListInstancesApiResponse {
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