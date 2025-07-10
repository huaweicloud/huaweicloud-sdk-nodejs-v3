import { AddTagsResponse } from './AddTagsResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddTagV2Response extends SdkResponse {
    public error?: Error;
    public result?: AddTagsResponse;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): AddTagV2Response {
        this['error'] = error;
        return this;
    }
    public withResult(result: AddTagsResponse): AddTagV2Response {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): AddTagV2Response {
        this['status'] = status;
        return this;
    }
}