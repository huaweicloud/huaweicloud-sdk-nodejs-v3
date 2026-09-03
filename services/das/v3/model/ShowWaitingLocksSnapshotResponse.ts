import { InnodbTrxInfo } from './InnodbTrxInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWaitingLocksSnapshotResponse extends SdkResponse {
    public trx?: Array<InnodbTrxInfo>;
    private 'lock_waits_infos'?: Array<object>;
    private 'wait_lock_count'?: number;
    private 'hold_lock_count'?: number;
    private 'time_greater_than_count'?: number;
    private 'lock_wait_threshold_second'?: number;
    public constructor() { 
        super();
    }
    public withTrx(trx: Array<InnodbTrxInfo>): ShowWaitingLocksSnapshotResponse {
        this['trx'] = trx;
        return this;
    }
    public withLockWaitsInfos(lockWaitsInfos: Array<object>): ShowWaitingLocksSnapshotResponse {
        this['lock_waits_infos'] = lockWaitsInfos;
        return this;
    }
    public set lockWaitsInfos(lockWaitsInfos: Array<object>  | undefined) {
        this['lock_waits_infos'] = lockWaitsInfos;
    }
    public get lockWaitsInfos(): Array<object> | undefined {
        return this['lock_waits_infos'];
    }
    public withWaitLockCount(waitLockCount: number): ShowWaitingLocksSnapshotResponse {
        this['wait_lock_count'] = waitLockCount;
        return this;
    }
    public set waitLockCount(waitLockCount: number  | undefined) {
        this['wait_lock_count'] = waitLockCount;
    }
    public get waitLockCount(): number | undefined {
        return this['wait_lock_count'];
    }
    public withHoldLockCount(holdLockCount: number): ShowWaitingLocksSnapshotResponse {
        this['hold_lock_count'] = holdLockCount;
        return this;
    }
    public set holdLockCount(holdLockCount: number  | undefined) {
        this['hold_lock_count'] = holdLockCount;
    }
    public get holdLockCount(): number | undefined {
        return this['hold_lock_count'];
    }
    public withTimeGreaterThanCount(timeGreaterThanCount: number): ShowWaitingLocksSnapshotResponse {
        this['time_greater_than_count'] = timeGreaterThanCount;
        return this;
    }
    public set timeGreaterThanCount(timeGreaterThanCount: number  | undefined) {
        this['time_greater_than_count'] = timeGreaterThanCount;
    }
    public get timeGreaterThanCount(): number | undefined {
        return this['time_greater_than_count'];
    }
    public withLockWaitThresholdSecond(lockWaitThresholdSecond: number): ShowWaitingLocksSnapshotResponse {
        this['lock_wait_threshold_second'] = lockWaitThresholdSecond;
        return this;
    }
    public set lockWaitThresholdSecond(lockWaitThresholdSecond: number  | undefined) {
        this['lock_wait_threshold_second'] = lockWaitThresholdSecond;
    }
    public get lockWaitThresholdSecond(): number | undefined {
        return this['lock_wait_threshold_second'];
    }
}