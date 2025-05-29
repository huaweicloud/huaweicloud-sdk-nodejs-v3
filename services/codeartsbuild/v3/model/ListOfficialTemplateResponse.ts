import { ListOfficialTemplateResult } from './ListOfficialTemplateResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOfficialTemplateResponse extends SdkResponse {
    public result?: ListOfficialTemplateResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ListOfficialTemplateResult): ListOfficialTemplateResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ListOfficialTemplateResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ListOfficialTemplateResponse {
        this['status'] = status;
        return this;
    }
}