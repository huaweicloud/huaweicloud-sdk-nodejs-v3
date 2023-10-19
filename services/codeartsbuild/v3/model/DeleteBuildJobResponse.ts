import { DeleteBuildJobResponseBodyResult } from './DeleteBuildJobResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteBuildJobResponse extends SdkResponse {
    public result?: DeleteBuildJobResponseBodyResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: DeleteBuildJobResponseBodyResult): DeleteBuildJobResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): DeleteBuildJobResponse {
        this['status'] = status;
        return this;
    }
}