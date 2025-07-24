import { LogInfo } from './LogInfo';
import { ParamInfo } from './ParamInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTasklogResponse extends SdkResponse {
    private 'param_info'?: ParamInfo;
    private 'log_info'?: Array<LogInfo>;
    public constructor() { 
        super();
    }
    public withParamInfo(paramInfo: ParamInfo): ShowTasklogResponse {
        this['param_info'] = paramInfo;
        return this;
    }
    public set paramInfo(paramInfo: ParamInfo  | undefined) {
        this['param_info'] = paramInfo;
    }
    public get paramInfo(): ParamInfo | undefined {
        return this['param_info'];
    }
    public withLogInfo(logInfo: Array<LogInfo>): ShowTasklogResponse {
        this['log_info'] = logInfo;
        return this;
    }
    public set logInfo(logInfo: Array<LogInfo>  | undefined) {
        this['log_info'] = logInfo;
    }
    public get logInfo(): Array<LogInfo> | undefined {
        return this['log_info'];
    }
}