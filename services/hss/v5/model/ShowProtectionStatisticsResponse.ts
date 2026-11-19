
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProtectionStatisticsResponse extends SdkResponse {
    private 'count_protected_server'?: number;
    private 'count_need_protected_server'?: number;
    private 'count_protection_event'?: number;
    public constructor() { 
        super();
    }
    public withCountProtectedServer(countProtectedServer: number): ShowProtectionStatisticsResponse {
        this['count_protected_server'] = countProtectedServer;
        return this;
    }
    public set countProtectedServer(countProtectedServer: number  | undefined) {
        this['count_protected_server'] = countProtectedServer;
    }
    public get countProtectedServer(): number | undefined {
        return this['count_protected_server'];
    }
    public withCountNeedProtectedServer(countNeedProtectedServer: number): ShowProtectionStatisticsResponse {
        this['count_need_protected_server'] = countNeedProtectedServer;
        return this;
    }
    public set countNeedProtectedServer(countNeedProtectedServer: number  | undefined) {
        this['count_need_protected_server'] = countNeedProtectedServer;
    }
    public get countNeedProtectedServer(): number | undefined {
        return this['count_need_protected_server'];
    }
    public withCountProtectionEvent(countProtectionEvent: number): ShowProtectionStatisticsResponse {
        this['count_protection_event'] = countProtectionEvent;
        return this;
    }
    public set countProtectionEvent(countProtectionEvent: number  | undefined) {
        this['count_protection_event'] = countProtectionEvent;
    }
    public get countProtectionEvent(): number | undefined {
        return this['count_protection_event'];
    }
}