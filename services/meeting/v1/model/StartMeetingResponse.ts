
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartMeetingResponse extends SdkResponse {
    public uuid?: string;
    public regionIP?: string;
    public constructor() { 
        super();
    }
    public withUuid(uuid: string): StartMeetingResponse {
        this['uuid'] = uuid;
        return this;
    }
    public withRegionIP(regionIP: string): StartMeetingResponse {
        this['regionIP'] = regionIP;
        return this;
    }
}