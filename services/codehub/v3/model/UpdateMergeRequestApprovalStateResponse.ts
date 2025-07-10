import { ApproverBasicDto } from './ApproverBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateMergeRequestApprovalStateResponse extends SdkResponse {
    public result?: ApproverBasicDto;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ApproverBasicDto): UpdateMergeRequestApprovalStateResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): UpdateMergeRequestApprovalStateResponse {
        this['status'] = status;
        return this;
    }
}