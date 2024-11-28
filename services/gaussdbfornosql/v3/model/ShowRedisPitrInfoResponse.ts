
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRedisPitrInfoResponse extends SdkResponse {
    public storage?: string;
    public constructor() { 
        super();
    }
    public withStorage(storage: string): ShowRedisPitrInfoResponse {
        this['storage'] = storage;
        return this;
    }
}