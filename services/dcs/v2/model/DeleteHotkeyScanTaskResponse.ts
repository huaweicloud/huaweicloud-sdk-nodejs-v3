import { HotkeysBody } from './HotkeysBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteHotkeyScanTaskResponse extends SdkResponse {
    public id?: string;
    private 'instance_id'?: string;
    public status?: DeleteHotkeyScanTaskResponseStatusEnum | string;
    private 'scan_type'?: DeleteHotkeyScanTaskResponseScanTypeEnum | string;
    private 'created_at'?: string;
    private 'started_at'?: string;
    private 'finished_at'?: string;
    public num?: number;
    public keys?: Array<HotkeysBody>;
    public constructor() { 
        super();
    }
    public withId(id: string): DeleteHotkeyScanTaskResponse {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): DeleteHotkeyScanTaskResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: DeleteHotkeyScanTaskResponseStatusEnum | string): DeleteHotkeyScanTaskResponse {
        this['status'] = status;
        return this;
    }
    public withScanType(scanType: DeleteHotkeyScanTaskResponseScanTypeEnum | string): DeleteHotkeyScanTaskResponse {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: DeleteHotkeyScanTaskResponseScanTypeEnum | string  | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType(): DeleteHotkeyScanTaskResponseScanTypeEnum | string | undefined {
        return this['scan_type'];
    }
    public withCreatedAt(createdAt: string): DeleteHotkeyScanTaskResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withStartedAt(startedAt: string): DeleteHotkeyScanTaskResponse {
        this['started_at'] = startedAt;
        return this;
    }
    public set startedAt(startedAt: string  | undefined) {
        this['started_at'] = startedAt;
    }
    public get startedAt(): string | undefined {
        return this['started_at'];
    }
    public withFinishedAt(finishedAt: string): DeleteHotkeyScanTaskResponse {
        this['finished_at'] = finishedAt;
        return this;
    }
    public set finishedAt(finishedAt: string  | undefined) {
        this['finished_at'] = finishedAt;
    }
    public get finishedAt(): string | undefined {
        return this['finished_at'];
    }
    public withNum(num: number): DeleteHotkeyScanTaskResponse {
        this['num'] = num;
        return this;
    }
    public withKeys(keys: Array<HotkeysBody>): DeleteHotkeyScanTaskResponse {
        this['keys'] = keys;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteHotkeyScanTaskResponseStatusEnum {
    WAITING = 'waiting',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteHotkeyScanTaskResponseScanTypeEnum {
    MANUAL = 'manual',
    AUTO = 'auto'
}
