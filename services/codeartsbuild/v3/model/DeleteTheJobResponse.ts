import { DeleteTheJobResponseBodyResult } from './DeleteTheJobResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteTheJobResponse extends SdkResponse {
    public result?: DeleteTheJobResponseBodyResult;
    public status?: string;
    public error?: string;
    public constructor() { 
        super();
    }
    public withResult(result: DeleteTheJobResponseBodyResult): DeleteTheJobResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): DeleteTheJobResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: string): DeleteTheJobResponse {
        this['error'] = error;
        return this;
    }
}