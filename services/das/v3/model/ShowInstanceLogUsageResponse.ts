
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceLogUsageResponse extends SdkResponse {
    public size?: string;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withSize(size: string): ShowInstanceLogUsageResponse {
        this['size'] = size;
        return this;
    }
    public withTimestamp(timestamp: number): ShowInstanceLogUsageResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}