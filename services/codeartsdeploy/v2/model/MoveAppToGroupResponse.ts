import { MoveAppToGroupResult } from './MoveAppToGroupResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class MoveAppToGroupResponse extends SdkResponse {
    public result?: Array<MoveAppToGroupResult>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<MoveAppToGroupResult>): MoveAppToGroupResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): MoveAppToGroupResponse {
        this['status'] = status;
        return this;
    }
}