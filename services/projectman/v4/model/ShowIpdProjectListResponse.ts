import { ProjectInfoVO } from './ProjectInfoVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIpdProjectListResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: Array<ProjectInfoVO>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowIpdProjectListResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ShowIpdProjectListResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: Array<ProjectInfoVO>): ShowIpdProjectListResponse {
        this['result'] = result;
        return this;
    }
}