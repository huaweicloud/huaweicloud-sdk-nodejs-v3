import { Follow302StatusBody } from './Follow302StatusBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFollow302SwitchResponse extends SdkResponse {
    private 'follow_status'?: Follow302StatusBody | undefined;
    public constructor() { 
        super();
    }
    public withFollowStatus(followStatus: Follow302StatusBody): UpdateFollow302SwitchResponse {
        this['follow_status'] = followStatus;
        return this;
    }
    public set followStatus(followStatus: Follow302StatusBody | undefined) {
        this['follow_status'] = followStatus;
    }
    public get followStatus() {
        return this['follow_status'];
    }
}