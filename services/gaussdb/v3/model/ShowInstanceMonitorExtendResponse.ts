
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceMonitorExtendResponse extends SdkResponse {
    private 'monitor_switch'?: boolean;
    public period?: number;
    public allow?: boolean;
    public constructor() { 
        super();
    }
    public withMonitorSwitch(monitorSwitch: boolean): ShowInstanceMonitorExtendResponse {
        this['monitor_switch'] = monitorSwitch;
        return this;
    }
    public set monitorSwitch(monitorSwitch: boolean  | undefined) {
        this['monitor_switch'] = monitorSwitch;
    }
    public get monitorSwitch(): boolean | undefined {
        return this['monitor_switch'];
    }
    public withPeriod(period: number): ShowInstanceMonitorExtendResponse {
        this['period'] = period;
        return this;
    }
    public withAllow(allow: boolean): ShowInstanceMonitorExtendResponse {
        this['allow'] = allow;
        return this;
    }
}