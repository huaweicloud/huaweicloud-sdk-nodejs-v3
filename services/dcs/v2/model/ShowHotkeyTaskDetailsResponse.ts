import { HotkeysBody } from './HotkeysBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHotkeyTaskDetailsResponse extends SdkResponse {
    public id?: string;
    private 'instance_id'?: string;
    public status?: ShowHotkeyTaskDetailsResponseStatusEnum | string;
    private 'scan_type'?: ShowHotkeyTaskDetailsResponseScanTypeEnum | string;
    private 'created_at'?: string;
    private 'started_at'?: string;
    private 'finished_at'?: string;
    public num?: number;
    public keys?: Array<HotkeysBody>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowHotkeyTaskDetailsResponse {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): ShowHotkeyTaskDetailsResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: ShowHotkeyTaskDetailsResponseStatusEnum | string): ShowHotkeyTaskDetailsResponse {
        this['status'] = status;
        return this;
    }
    public withScanType(scanType: ShowHotkeyTaskDetailsResponseScanTypeEnum | string): ShowHotkeyTaskDetailsResponse {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: ShowHotkeyTaskDetailsResponseScanTypeEnum | string  | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType(): ShowHotkeyTaskDetailsResponseScanTypeEnum | string | undefined {
        return this['scan_type'];
    }
    public withCreatedAt(createdAt: string): ShowHotkeyTaskDetailsResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withStartedAt(startedAt: string): ShowHotkeyTaskDetailsResponse {
        this['started_at'] = startedAt;
        return this;
    }
    public set startedAt(startedAt: string  | undefined) {
        this['started_at'] = startedAt;
    }
    public get startedAt(): string | undefined {
        return this['started_at'];
    }
    public withFinishedAt(finishedAt: string): ShowHotkeyTaskDetailsResponse {
        this['finished_at'] = finishedAt;
        return this;
    }
    public set finishedAt(finishedAt: string  | undefined) {
        this['finished_at'] = finishedAt;
    }
    public get finishedAt(): string | undefined {
        return this['finished_at'];
    }
    public withNum(num: number): ShowHotkeyTaskDetailsResponse {
        this['num'] = num;
        return this;
    }
    public withKeys(keys: Array<HotkeysBody>): ShowHotkeyTaskDetailsResponse {
        this['keys'] = keys;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowHotkeyTaskDetailsResponseStatusEnum {
    WAITING = 'waiting',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowHotkeyTaskDetailsResponseScanTypeEnum {
    MANUAL = 'manual',
    AUTO = 'auto'
}
