import { CreateTemplatesItems } from './CreateTemplatesItems';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteTemplatesResponse extends SdkResponse {
    public result?: Array<CreateTemplatesItems>;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<CreateTemplatesItems>): DeleteTemplatesResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): DeleteTemplatesResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): DeleteTemplatesResponse {
        this['status'] = status;
        return this;
    }
}