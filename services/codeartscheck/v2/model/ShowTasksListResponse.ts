import { ShowTasksListResult } from './ShowTasksListResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTasksListResponse extends SdkResponse {
    public httpStatus?: string;
    public result?: ShowTasksListResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withHttpStatus(httpStatus: string): ShowTasksListResponse {
        this['httpStatus'] = httpStatus;
        return this;
    }
    public withResult(result: ShowTasksListResult): ShowTasksListResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowTasksListResponse {
        this['status'] = status;
        return this;
    }
}