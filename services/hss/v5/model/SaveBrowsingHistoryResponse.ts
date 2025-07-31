
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SaveBrowsingHistoryResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): SaveBrowsingHistoryResponse {
        this['id'] = id;
        return this;
    }
}