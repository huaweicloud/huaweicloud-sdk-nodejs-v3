import { MoveJobGroupResponseBodyResult } from './MoveJobGroupResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class MoveGroupResponse extends SdkResponse {
    public result?: Array<MoveJobGroupResponseBodyResult>;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<MoveJobGroupResponseBodyResult>): MoveGroupResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): MoveGroupResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): MoveGroupResponse {
        this['status'] = status;
        return this;
    }
}