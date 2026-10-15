
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectDataFilterRulesResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CollectDataFilterRulesResponse {
        this['id'] = id;
        return this;
    }
}