import { AvailableConfig } from './AvailableConfig';


export class CommonResponseErrorAvailableConfig {
    public code?: string;
    public detail?: AvailableConfig;
    public reason?: string;
    public constructor() { 
    }
    public withCode(code: string): CommonResponseErrorAvailableConfig {
        this['code'] = code;
        return this;
    }
    public withDetail(detail: AvailableConfig): CommonResponseErrorAvailableConfig {
        this['detail'] = detail;
        return this;
    }
    public withReason(reason: string): CommonResponseErrorAvailableConfig {
        this['reason'] = reason;
        return this;
    }
}