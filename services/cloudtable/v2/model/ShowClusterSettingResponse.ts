import { ParameterInfo } from './ParameterInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterSettingResponse extends SdkResponse {
    private 'parm_status'?: number;
    private 'parameter_info'?: Array<ParameterInfo>;
    public constructor() { 
        super();
    }
    public withParmStatus(parmStatus: number): ShowClusterSettingResponse {
        this['parm_status'] = parmStatus;
        return this;
    }
    public set parmStatus(parmStatus: number  | undefined) {
        this['parm_status'] = parmStatus;
    }
    public get parmStatus(): number | undefined {
        return this['parm_status'];
    }
    public withParameterInfo(parameterInfo: Array<ParameterInfo>): ShowClusterSettingResponse {
        this['parameter_info'] = parameterInfo;
        return this;
    }
    public set parameterInfo(parameterInfo: Array<ParameterInfo>  | undefined) {
        this['parameter_info'] = parameterInfo;
    }
    public get parameterInfo(): Array<ParameterInfo> | undefined {
        return this['parameter_info'];
    }
}