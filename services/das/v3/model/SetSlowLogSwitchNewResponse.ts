
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetSlowLogSwitchNewResponse extends SdkResponse {
    public success?: boolean;
    private 'switch_on'?: boolean;
    private 'retention_hours'?: number;
    public retry?: boolean;
    private 'error_msg'?: string;
    private 'can_open'?: boolean;
    private 'cant_open_msg'?: string;
    private 'max_time_range'?: number;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): SetSlowLogSwitchNewResponse {
        this['success'] = success;
        return this;
    }
    public withSwitchOn(switchOn: boolean): SetSlowLogSwitchNewResponse {
        this['switch_on'] = switchOn;
        return this;
    }
    public set switchOn(switchOn: boolean  | undefined) {
        this['switch_on'] = switchOn;
    }
    public get switchOn(): boolean | undefined {
        return this['switch_on'];
    }
    public withRetentionHours(retentionHours: number): SetSlowLogSwitchNewResponse {
        this['retention_hours'] = retentionHours;
        return this;
    }
    public set retentionHours(retentionHours: number  | undefined) {
        this['retention_hours'] = retentionHours;
    }
    public get retentionHours(): number | undefined {
        return this['retention_hours'];
    }
    public withRetry(retry: boolean): SetSlowLogSwitchNewResponse {
        this['retry'] = retry;
        return this;
    }
    public withErrorMsg(errorMsg: string): SetSlowLogSwitchNewResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withCanOpen(canOpen: boolean): SetSlowLogSwitchNewResponse {
        this['can_open'] = canOpen;
        return this;
    }
    public set canOpen(canOpen: boolean  | undefined) {
        this['can_open'] = canOpen;
    }
    public get canOpen(): boolean | undefined {
        return this['can_open'];
    }
    public withCantOpenMsg(cantOpenMsg: string): SetSlowLogSwitchNewResponse {
        this['cant_open_msg'] = cantOpenMsg;
        return this;
    }
    public set cantOpenMsg(cantOpenMsg: string  | undefined) {
        this['cant_open_msg'] = cantOpenMsg;
    }
    public get cantOpenMsg(): string | undefined {
        return this['cant_open_msg'];
    }
    public withMaxTimeRange(maxTimeRange: number): SetSlowLogSwitchNewResponse {
        this['max_time_range'] = maxTimeRange;
        return this;
    }
    public set maxTimeRange(maxTimeRange: number  | undefined) {
        this['max_time_range'] = maxTimeRange;
    }
    public get maxTimeRange(): number | undefined {
        return this['max_time_range'];
    }
}