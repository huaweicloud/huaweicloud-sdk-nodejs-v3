import { BigkeysBody } from './BigkeysBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteBigkeyScanTaskResponse extends SdkResponse {
    public id?: string;
    private 'instance_id'?: string;
    public status?: DeleteBigkeyScanTaskResponseStatusEnum | string;
    private 'scan_type'?: DeleteBigkeyScanTaskResponseScanTypeEnum | string;
    private 'created_at'?: string;
    private 'started_at'?: string;
    private 'finished_at'?: string;
    public num?: number;
    public keys?: Array<BigkeysBody>;
    public constructor() { 
        super();
    }
    public withId(id: string): DeleteBigkeyScanTaskResponse {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): DeleteBigkeyScanTaskResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: DeleteBigkeyScanTaskResponseStatusEnum | string): DeleteBigkeyScanTaskResponse {
        this['status'] = status;
        return this;
    }
    public withScanType(scanType: DeleteBigkeyScanTaskResponseScanTypeEnum | string): DeleteBigkeyScanTaskResponse {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: DeleteBigkeyScanTaskResponseScanTypeEnum | string  | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType(): DeleteBigkeyScanTaskResponseScanTypeEnum | string | undefined {
        return this['scan_type'];
    }
    public withCreatedAt(createdAt: string): DeleteBigkeyScanTaskResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withStartedAt(startedAt: string): DeleteBigkeyScanTaskResponse {
        this['started_at'] = startedAt;
        return this;
    }
    public set startedAt(startedAt: string  | undefined) {
        this['started_at'] = startedAt;
    }
    public get startedAt(): string | undefined {
        return this['started_at'];
    }
    public withFinishedAt(finishedAt: string): DeleteBigkeyScanTaskResponse {
        this['finished_at'] = finishedAt;
        return this;
    }
    public set finishedAt(finishedAt: string  | undefined) {
        this['finished_at'] = finishedAt;
    }
    public get finishedAt(): string | undefined {
        return this['finished_at'];
    }
    public withNum(num: number): DeleteBigkeyScanTaskResponse {
        this['num'] = num;
        return this;
    }
    public withKeys(keys: Array<BigkeysBody>): DeleteBigkeyScanTaskResponse {
        this['keys'] = keys;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteBigkeyScanTaskResponseStatusEnum {
    WAITING = 'waiting',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteBigkeyScanTaskResponseScanTypeEnum {
    MANUAL = 'manual',
    AUTO = 'auto'
}
