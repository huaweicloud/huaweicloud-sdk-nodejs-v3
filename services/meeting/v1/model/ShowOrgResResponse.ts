
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOrgResResponse extends SdkResponse {
    public usedRecStorage?: number;
    public usedAccountsCount?: number;
    public usedLiveCount?: number;
    public confCount?: number;
    public confLength?: number;
    public activeAttendeeCount?: number;
    public totalAttendeeCount?: number;
    public constructor() { 
        super();
    }
    public withUsedRecStorage(usedRecStorage: number): ShowOrgResResponse {
        this['usedRecStorage'] = usedRecStorage;
        return this;
    }
    public withUsedAccountsCount(usedAccountsCount: number): ShowOrgResResponse {
        this['usedAccountsCount'] = usedAccountsCount;
        return this;
    }
    public withUsedLiveCount(usedLiveCount: number): ShowOrgResResponse {
        this['usedLiveCount'] = usedLiveCount;
        return this;
    }
    public withConfCount(confCount: number): ShowOrgResResponse {
        this['confCount'] = confCount;
        return this;
    }
    public withConfLength(confLength: number): ShowOrgResResponse {
        this['confLength'] = confLength;
        return this;
    }
    public withActiveAttendeeCount(activeAttendeeCount: number): ShowOrgResResponse {
        this['activeAttendeeCount'] = activeAttendeeCount;
        return this;
    }
    public withTotalAttendeeCount(totalAttendeeCount: number): ShowOrgResResponse {
        this['totalAttendeeCount'] = totalAttendeeCount;
        return this;
    }
}