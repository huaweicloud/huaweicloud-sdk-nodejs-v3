
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDataProcessingRulesResultResponse extends SdkResponse {
    public id?: string;
    public status?: ShowDataProcessingRulesResultResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowDataProcessingRulesResultResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ShowDataProcessingRulesResultResponseStatusEnum | string): ShowDataProcessingRulesResultResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDataProcessingRulesResultResponseStatusEnum {
    PENDING = 'pending',
    FAILED = 'failed',
    SUCCESS = 'success'
}
