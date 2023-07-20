
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBigkeyAutoscanConfigResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'enable_auto_scan'?: boolean;
    private 'schedule_at'?: Array<string>;
    private 'updated_at'?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): UpdateBigkeyAutoscanConfigResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEnableAutoScan(enableAutoScan: boolean): UpdateBigkeyAutoscanConfigResponse {
        this['enable_auto_scan'] = enableAutoScan;
        return this;
    }
    public set enableAutoScan(enableAutoScan: boolean  | undefined) {
        this['enable_auto_scan'] = enableAutoScan;
    }
    public get enableAutoScan(): boolean | undefined {
        return this['enable_auto_scan'];
    }
    public withScheduleAt(scheduleAt: Array<string>): UpdateBigkeyAutoscanConfigResponse {
        this['schedule_at'] = scheduleAt;
        return this;
    }
    public set scheduleAt(scheduleAt: Array<string>  | undefined) {
        this['schedule_at'] = scheduleAt;
    }
    public get scheduleAt(): Array<string> | undefined {
        return this['schedule_at'];
    }
    public withUpdatedAt(updatedAt: string): UpdateBigkeyAutoscanConfigResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}