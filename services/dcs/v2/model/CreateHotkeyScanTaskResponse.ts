import { HotkeysBody } from './HotkeysBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateHotkeyScanTaskResponse extends SdkResponse {
    public id?: string;
    private 'instance_id'?: string | undefined;
    public status?: CreateHotkeyScanTaskResponseStatusEnum;
    private 'scan_type'?: CreateHotkeyScanTaskResponseScanTypeEnum | undefined;
    private 'created_at'?: string | undefined;
    private 'started_at'?: string | undefined;
    private 'finished_at'?: string | undefined;
    public num?: number;
    public keys?: Array<HotkeysBody>;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateHotkeyScanTaskResponse {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): CreateHotkeyScanTaskResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withStatus(status: CreateHotkeyScanTaskResponseStatusEnum): CreateHotkeyScanTaskResponse {
        this['status'] = status;
        return this;
    }
    public withScanType(scanType: CreateHotkeyScanTaskResponseScanTypeEnum): CreateHotkeyScanTaskResponse {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: CreateHotkeyScanTaskResponseScanTypeEnum | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType() {
        return this['scan_type'];
    }
    public withCreatedAt(createdAt: string): CreateHotkeyScanTaskResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withStartedAt(startedAt: string): CreateHotkeyScanTaskResponse {
        this['started_at'] = startedAt;
        return this;
    }
    public set startedAt(startedAt: string | undefined) {
        this['started_at'] = startedAt;
    }
    public get startedAt() {
        return this['started_at'];
    }
    public withFinishedAt(finishedAt: string): CreateHotkeyScanTaskResponse {
        this['finished_at'] = finishedAt;
        return this;
    }
    public set finishedAt(finishedAt: string | undefined) {
        this['finished_at'] = finishedAt;
    }
    public get finishedAt() {
        return this['finished_at'];
    }
    public withNum(num: number): CreateHotkeyScanTaskResponse {
        this['num'] = num;
        return this;
    }
    public withKeys(keys: Array<HotkeysBody>): CreateHotkeyScanTaskResponse {
        this['keys'] = keys;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateHotkeyScanTaskResponseStatusEnum {
    WAITING = 'waiting',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateHotkeyScanTaskResponseScanTypeEnum {
    MANUAL = 'manual',
    AUTO = 'auto'
}
