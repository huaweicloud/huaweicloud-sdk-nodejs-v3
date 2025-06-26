import { ServerGroupStatus } from './ServerGroupStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerGroupStateResponse extends SdkResponse {
    private 'aps_status'?: { [key: string]: number; };
    public constructor() { 
        super();
    }
    public withApsStatus(apsStatus: { [key: string]: number; }): ShowServerGroupStateResponse {
        this['aps_status'] = apsStatus;
        return this;
    }
    public set apsStatus(apsStatus: { [key: string]: number; }  | undefined) {
        this['aps_status'] = apsStatus;
    }
    public get apsStatus(): { [key: string]: number; } | undefined {
        return this['aps_status'];
    }
}