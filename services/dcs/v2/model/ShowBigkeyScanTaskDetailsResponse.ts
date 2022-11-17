import { BigkeysBody } from './BigkeysBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBigkeyScanTaskDetailsResponse extends SdkResponse {
    public id?: string;
    private 'instance_id'?: string | undefined;
    public status?: ShowBigkeyScanTaskDetailsResponseStatusEnum;
    private 'scan_type'?: ShowBigkeyScanTaskDetailsResponseScanTypeEnum | undefined;
    private 'created_at'?: string | undefined;
    private 'started_at'?: string | undefined;
    private 'finished_at'?: string | undefined;
    public num?: number;
    public keys?: Array<BigkeysBody>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowBigkeyScanTaskDetailsResponse {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): ShowBigkeyScanTaskDetailsResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withStatus(status: ShowBigkeyScanTaskDetailsResponseStatusEnum): ShowBigkeyScanTaskDetailsResponse {
        this['status'] = status;
        return this;
    }
    public withScanType(scanType: ShowBigkeyScanTaskDetailsResponseScanTypeEnum): ShowBigkeyScanTaskDetailsResponse {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: ShowBigkeyScanTaskDetailsResponseScanTypeEnum | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType() {
        return this['scan_type'];
    }
    public withCreatedAt(createdAt: string): ShowBigkeyScanTaskDetailsResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withStartedAt(startedAt: string): ShowBigkeyScanTaskDetailsResponse {
        this['started_at'] = startedAt;
        return this;
    }
    public set startedAt(startedAt: string | undefined) {
        this['started_at'] = startedAt;
    }
    public get startedAt() {
        return this['started_at'];
    }
    public withFinishedAt(finishedAt: string): ShowBigkeyScanTaskDetailsResponse {
        this['finished_at'] = finishedAt;
        return this;
    }
    public set finishedAt(finishedAt: string | undefined) {
        this['finished_at'] = finishedAt;
    }
    public get finishedAt() {
        return this['finished_at'];
    }
    public withNum(num: number): ShowBigkeyScanTaskDetailsResponse {
        this['num'] = num;
        return this;
    }
    public withKeys(keys: Array<BigkeysBody>): ShowBigkeyScanTaskDetailsResponse {
        this['keys'] = keys;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowBigkeyScanTaskDetailsResponseStatusEnum {
    WAITING = 'waiting',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowBigkeyScanTaskDetailsResponseScanTypeEnum {
    MANUAL = 'manual',
    AUTO = 'auto'
}
