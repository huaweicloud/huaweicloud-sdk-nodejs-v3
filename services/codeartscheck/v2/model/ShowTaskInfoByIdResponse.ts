import { TaskBasicInfoV3 } from './TaskBasicInfoV3';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskInfoByIdResponse extends SdkResponse {
    public httpStatus?: string;
    public result?: TaskBasicInfoV3;
    public status?: string;
    public constructor() { 
        super();
    }
    public withHttpStatus(httpStatus: string): ShowTaskInfoByIdResponse {
        this['httpStatus'] = httpStatus;
        return this;
    }
    public withResult(result: TaskBasicInfoV3): ShowTaskInfoByIdResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowTaskInfoByIdResponse {
        this['status'] = status;
        return this;
    }
}