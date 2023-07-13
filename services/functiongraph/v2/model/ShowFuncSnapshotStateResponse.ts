
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFuncSnapshotStateResponse extends SdkResponse {
    public state?: string;
    public code?: string;
    public constructor() { 
        super();
    }
    public withState(state: string): ShowFuncSnapshotStateResponse {
        this['state'] = state;
        return this;
    }
    public withCode(code: string): ShowFuncSnapshotStateResponse {
        this['code'] = code;
        return this;
    }
}