
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRegionInfoOfMeetingResponse extends SdkResponse {
    public regionIP?: string;
    public regionUrl?: string;
    public constructor() { 
        super();
    }
    public withRegionIP(regionIP: string): ShowRegionInfoOfMeetingResponse {
        this['regionIP'] = regionIP;
        return this;
    }
    public withRegionUrl(regionUrl: string): ShowRegionInfoOfMeetingResponse {
        this['regionUrl'] = regionUrl;
        return this;
    }
}