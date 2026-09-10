
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectInstanceStatisticResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'abnormal_num'?: number;
    private 'disk_full_num'?: number;
    private 'frozen_num'?: number;
    private 'normal_num'?: number;
    private 'wait_reboot_num'?: number;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): CollectInstanceStatisticResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withAbnormalNum(abnormalNum: number): CollectInstanceStatisticResponse {
        this['abnormal_num'] = abnormalNum;
        return this;
    }
    public set abnormalNum(abnormalNum: number  | undefined) {
        this['abnormal_num'] = abnormalNum;
    }
    public get abnormalNum(): number | undefined {
        return this['abnormal_num'];
    }
    public withDiskFullNum(diskFullNum: number): CollectInstanceStatisticResponse {
        this['disk_full_num'] = diskFullNum;
        return this;
    }
    public set diskFullNum(diskFullNum: number  | undefined) {
        this['disk_full_num'] = diskFullNum;
    }
    public get diskFullNum(): number | undefined {
        return this['disk_full_num'];
    }
    public withFrozenNum(frozenNum: number): CollectInstanceStatisticResponse {
        this['frozen_num'] = frozenNum;
        return this;
    }
    public set frozenNum(frozenNum: number  | undefined) {
        this['frozen_num'] = frozenNum;
    }
    public get frozenNum(): number | undefined {
        return this['frozen_num'];
    }
    public withNormalNum(normalNum: number): CollectInstanceStatisticResponse {
        this['normal_num'] = normalNum;
        return this;
    }
    public set normalNum(normalNum: number  | undefined) {
        this['normal_num'] = normalNum;
    }
    public get normalNum(): number | undefined {
        return this['normal_num'];
    }
    public withWaitRebootNum(waitRebootNum: number): CollectInstanceStatisticResponse {
        this['wait_reboot_num'] = waitRebootNum;
        return this;
    }
    public set waitRebootNum(waitRebootNum: number  | undefined) {
        this['wait_reboot_num'] = waitRebootNum;
    }
    public get waitRebootNum(): number | undefined {
        return this['wait_reboot_num'];
    }
}