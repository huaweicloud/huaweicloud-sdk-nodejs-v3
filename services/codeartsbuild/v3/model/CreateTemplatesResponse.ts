import { CreateTemplatesItems } from './CreateTemplatesItems';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTemplatesResponse extends SdkResponse {
    public result?: CreateTemplatesItems;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: CreateTemplatesItems): CreateTemplatesResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): CreateTemplatesResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): CreateTemplatesResponse {
        this['status'] = status;
        return this;
    }
}