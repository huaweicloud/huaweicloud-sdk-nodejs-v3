
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPacifyWordsTriggerTimeResponse extends SdkResponse {
    private 'trigger_time'?: number;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTriggerTime(triggerTime: number): ShowPacifyWordsTriggerTimeResponse {
        this['trigger_time'] = triggerTime;
        return this;
    }
    public set triggerTime(triggerTime: number  | undefined) {
        this['trigger_time'] = triggerTime;
    }
    public get triggerTime(): number | undefined {
        return this['trigger_time'];
    }
    public withXRequestId(xRequestId: string): ShowPacifyWordsTriggerTimeResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}