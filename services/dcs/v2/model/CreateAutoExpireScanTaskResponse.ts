
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAutoExpireScanTaskResponse extends SdkResponse {
    public id?: string;
    private 'instance_id'?: string | undefined;
    public status?: CreateAutoExpireScanTaskResponseStatusEnum;
    private 'scan_type'?: CreateAutoExpireScanTaskResponseScanTypeEnum | undefined;
    private 'created_at'?: string | undefined;
    private 'started_at'?: string | undefined;
    private 'finished_at'?: string | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateAutoExpireScanTaskResponse {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): CreateAutoExpireScanTaskResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withStatus(status: CreateAutoExpireScanTaskResponseStatusEnum): CreateAutoExpireScanTaskResponse {
        this['status'] = status;
        return this;
    }
    public withScanType(scanType: CreateAutoExpireScanTaskResponseScanTypeEnum): CreateAutoExpireScanTaskResponse {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: CreateAutoExpireScanTaskResponseScanTypeEnum | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType() {
        return this['scan_type'];
    }
    public withCreatedAt(createdAt: string): CreateAutoExpireScanTaskResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withStartedAt(startedAt: string): CreateAutoExpireScanTaskResponse {
        this['started_at'] = startedAt;
        return this;
    }
    public set startedAt(startedAt: string | undefined) {
        this['started_at'] = startedAt;
    }
    public get startedAt() {
        return this['started_at'];
    }
    public withFinishedAt(finishedAt: string): CreateAutoExpireScanTaskResponse {
        this['finished_at'] = finishedAt;
        return this;
    }
    public set finishedAt(finishedAt: string | undefined) {
        this['finished_at'] = finishedAt;
    }
    public get finishedAt() {
        return this['finished_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAutoExpireScanTaskResponseStatusEnum {
    WAITING = 'waiting',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateAutoExpireScanTaskResponseScanTypeEnum {
    MANUAL = 'manual',
    AUTO = 'auto'
}
