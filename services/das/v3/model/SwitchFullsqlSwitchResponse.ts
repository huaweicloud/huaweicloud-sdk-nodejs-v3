
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchFullsqlSwitchResponse extends SdkResponse {
    private 'open_status'?: number;
    private 'retention_days'?: number;
    private 'can_open'?: boolean;
    private 'cant_open_msg'?: string;
    private 'last_open_time'?: number;
    public constructor() { 
        super();
    }
    public withOpenStatus(openStatus: number): SwitchFullsqlSwitchResponse {
        this['open_status'] = openStatus;
        return this;
    }
    public set openStatus(openStatus: number  | undefined) {
        this['open_status'] = openStatus;
    }
    public get openStatus(): number | undefined {
        return this['open_status'];
    }
    public withRetentionDays(retentionDays: number): SwitchFullsqlSwitchResponse {
        this['retention_days'] = retentionDays;
        return this;
    }
    public set retentionDays(retentionDays: number  | undefined) {
        this['retention_days'] = retentionDays;
    }
    public get retentionDays(): number | undefined {
        return this['retention_days'];
    }
    public withCanOpen(canOpen: boolean): SwitchFullsqlSwitchResponse {
        this['can_open'] = canOpen;
        return this;
    }
    public set canOpen(canOpen: boolean  | undefined) {
        this['can_open'] = canOpen;
    }
    public get canOpen(): boolean | undefined {
        return this['can_open'];
    }
    public withCantOpenMsg(cantOpenMsg: string): SwitchFullsqlSwitchResponse {
        this['cant_open_msg'] = cantOpenMsg;
        return this;
    }
    public set cantOpenMsg(cantOpenMsg: string  | undefined) {
        this['cant_open_msg'] = cantOpenMsg;
    }
    public get cantOpenMsg(): string | undefined {
        return this['cant_open_msg'];
    }
    public withLastOpenTime(lastOpenTime: number): SwitchFullsqlSwitchResponse {
        this['last_open_time'] = lastOpenTime;
        return this;
    }
    public set lastOpenTime(lastOpenTime: number  | undefined) {
        this['last_open_time'] = lastOpenTime;
    }
    public get lastOpenTime(): number | undefined {
        return this['last_open_time'];
    }
}