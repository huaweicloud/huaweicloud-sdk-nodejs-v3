
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHotClodSeparationStatusResponse extends SdkResponse {
    public opened?: boolean;
    public constructor() { 
        super();
    }
    public withOpened(opened: boolean): ShowHotClodSeparationStatusResponse {
        this['opened'] = opened;
        return this;
    }
}