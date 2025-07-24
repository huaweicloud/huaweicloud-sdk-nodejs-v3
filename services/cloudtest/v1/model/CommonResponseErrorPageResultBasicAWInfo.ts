import { PageResultBasicAWInfo } from './PageResultBasicAWInfo';


export class CommonResponseErrorPageResultBasicAWInfo {
    public code?: string;
    public detail?: PageResultBasicAWInfo;
    public reason?: string;
    public constructor() { 
    }
    public withCode(code: string): CommonResponseErrorPageResultBasicAWInfo {
        this['code'] = code;
        return this;
    }
    public withDetail(detail: PageResultBasicAWInfo): CommonResponseErrorPageResultBasicAWInfo {
        this['detail'] = detail;
        return this;
    }
    public withReason(reason: string): CommonResponseErrorPageResultBasicAWInfo {
        this['reason'] = reason;
        return this;
    }
}