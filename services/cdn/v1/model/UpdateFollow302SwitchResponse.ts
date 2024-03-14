import { Follow302StatusBody } from './Follow302StatusBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFollow302SwitchResponse extends SdkResponse {
    private 'follow_status'?: Follow302StatusBody;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withFollowStatus(followStatus: Follow302StatusBody): UpdateFollow302SwitchResponse {
        this['follow_status'] = followStatus;
        return this;
    }
    public set followStatus(followStatus: Follow302StatusBody  | undefined) {
        this['follow_status'] = followStatus;
    }
    public get followStatus(): Follow302StatusBody | undefined {
        return this['follow_status'];
    }
    public withXRequestId(xRequestId: string): UpdateFollow302SwitchResponse {
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