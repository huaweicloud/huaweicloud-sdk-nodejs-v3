
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateExtendInstanceStorageResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateExtendInstanceStorageResponse {
        this['id'] = id;
        return this;
    }
}