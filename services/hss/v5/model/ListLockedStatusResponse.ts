
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLockedStatusResponse extends SdkResponse {
    private 'locked_status'?: boolean;
    public constructor() { 
        super();
    }
    public withLockedStatus(lockedStatus: boolean): ListLockedStatusResponse {
        this['locked_status'] = lockedStatus;
        return this;
    }
    public set lockedStatus(lockedStatus: boolean  | undefined) {
        this['locked_status'] = lockedStatus;
    }
    public get lockedStatus(): boolean | undefined {
        return this['locked_status'];
    }
}