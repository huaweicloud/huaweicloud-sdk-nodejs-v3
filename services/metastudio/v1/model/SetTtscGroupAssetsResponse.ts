
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetTtscGroupAssetsResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): SetTtscGroupAssetsResponse {
        this['id'] = id;
        return this;
    }
}