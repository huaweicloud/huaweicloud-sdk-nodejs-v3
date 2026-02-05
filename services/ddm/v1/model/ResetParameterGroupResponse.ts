
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetParameterGroupResponse extends SdkResponse {
    private 'need_restart'?: boolean;
    public constructor() { 
        super();
    }
    public withNeedRestart(needRestart: boolean): ResetParameterGroupResponse {
        this['need_restart'] = needRestart;
        return this;
    }
    public set needRestart(needRestart: boolean  | undefined) {
        this['need_restart'] = needRestart;
    }
    public get needRestart(): boolean | undefined {
        return this['need_restart'];
    }
}