import { InstanceSimpleDto } from './InstanceSimpleDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNotSetChargeModeInstanceResponse extends SdkResponse {
    private 'instance_list'?: Array<InstanceSimpleDto>;
    private 'quota_status'?: number;
    private 'quota_num'?: number;
    private 'used_num'?: number;
    public constructor() { 
        super();
    }
    public withInstanceList(instanceList: Array<InstanceSimpleDto>): ListNotSetChargeModeInstanceResponse {
        this['instance_list'] = instanceList;
        return this;
    }
    public set instanceList(instanceList: Array<InstanceSimpleDto>  | undefined) {
        this['instance_list'] = instanceList;
    }
    public get instanceList(): Array<InstanceSimpleDto> | undefined {
        return this['instance_list'];
    }
    public withQuotaStatus(quotaStatus: number): ListNotSetChargeModeInstanceResponse {
        this['quota_status'] = quotaStatus;
        return this;
    }
    public set quotaStatus(quotaStatus: number  | undefined) {
        this['quota_status'] = quotaStatus;
    }
    public get quotaStatus(): number | undefined {
        return this['quota_status'];
    }
    public withQuotaNum(quotaNum: number): ListNotSetChargeModeInstanceResponse {
        this['quota_num'] = quotaNum;
        return this;
    }
    public set quotaNum(quotaNum: number  | undefined) {
        this['quota_num'] = quotaNum;
    }
    public get quotaNum(): number | undefined {
        return this['quota_num'];
    }
    public withUsedNum(usedNum: number): ListNotSetChargeModeInstanceResponse {
        this['used_num'] = usedNum;
        return this;
    }
    public set usedNum(usedNum: number  | undefined) {
        this['used_num'] = usedNum;
    }
    public get usedNum(): number | undefined {
        return this['used_num'];
    }
}