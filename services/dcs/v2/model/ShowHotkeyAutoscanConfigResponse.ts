
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHotkeyAutoscanConfigResponse extends SdkResponse {
    private 'instance_id'?: string | undefined;
    private 'enable_auto_scan'?: boolean | undefined;
    private 'schedule_at'?: Array<string> | undefined;
    private 'updated_at'?: string | undefined;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowHotkeyAutoscanConfigResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withEnableAutoScan(enableAutoScan: boolean): ShowHotkeyAutoscanConfigResponse {
        this['enable_auto_scan'] = enableAutoScan;
        return this;
    }
    public set enableAutoScan(enableAutoScan: boolean | undefined) {
        this['enable_auto_scan'] = enableAutoScan;
    }
    public get enableAutoScan() {
        return this['enable_auto_scan'];
    }
    public withScheduleAt(scheduleAt: Array<string>): ShowHotkeyAutoscanConfigResponse {
        this['schedule_at'] = scheduleAt;
        return this;
    }
    public set scheduleAt(scheduleAt: Array<string> | undefined) {
        this['schedule_at'] = scheduleAt;
    }
    public get scheduleAt() {
        return this['schedule_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowHotkeyAutoscanConfigResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
}