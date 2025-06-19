import { DeleteTheJobResponseBodyResult } from './DeleteTheJobResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteBuildJobResponse extends SdkResponse {
    public result?: DeleteTheJobResponseBodyResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: DeleteTheJobResponseBodyResult): DeleteBuildJobResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): DeleteBuildJobResponse {
        this['status'] = status;
        return this;
    }
}