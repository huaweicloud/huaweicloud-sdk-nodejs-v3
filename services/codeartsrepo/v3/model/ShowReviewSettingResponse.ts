import { ReviewSettingDto } from './ReviewSettingDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReviewSettingResponse extends SdkResponse {
    public error?: Error;
    public result?: ReviewSettingDto;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowReviewSettingResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: ReviewSettingDto): ShowReviewSettingResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowReviewSettingResponse {
        this['status'] = status;
        return this;
    }
}