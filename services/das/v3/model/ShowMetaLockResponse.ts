import { MetaLockInfo } from './MetaLockInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMetaLockResponse extends SdkResponse {
    public infos?: Array<MetaLockInfo>;
    public count?: number;
    private 'wait_lock_count'?: number;
    private 'hold_lock_count'?: number;
    private 'time_greater_than_count'?: number;
    private 'lock_wait_threshold_second'?: number;
    public constructor() { 
        super();
    }
    public withInfos(infos: Array<MetaLockInfo>): ShowMetaLockResponse {
        this['infos'] = infos;
        return this;
    }
    public withCount(count: number): ShowMetaLockResponse {
        this['count'] = count;
        return this;
    }
    public withWaitLockCount(waitLockCount: number): ShowMetaLockResponse {
        this['wait_lock_count'] = waitLockCount;
        return this;
    }
    public set waitLockCount(waitLockCount: number  | undefined) {
        this['wait_lock_count'] = waitLockCount;
    }
    public get waitLockCount(): number | undefined {
        return this['wait_lock_count'];
    }
    public withHoldLockCount(holdLockCount: number): ShowMetaLockResponse {
        this['hold_lock_count'] = holdLockCount;
        return this;
    }
    public set holdLockCount(holdLockCount: number  | undefined) {
        this['hold_lock_count'] = holdLockCount;
    }
    public get holdLockCount(): number | undefined {
        return this['hold_lock_count'];
    }
    public withTimeGreaterThanCount(timeGreaterThanCount: number): ShowMetaLockResponse {
        this['time_greater_than_count'] = timeGreaterThanCount;
        return this;
    }
    public set timeGreaterThanCount(timeGreaterThanCount: number  | undefined) {
        this['time_greater_than_count'] = timeGreaterThanCount;
    }
    public get timeGreaterThanCount(): number | undefined {
        return this['time_greater_than_count'];
    }
    public withLockWaitThresholdSecond(lockWaitThresholdSecond: number): ShowMetaLockResponse {
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