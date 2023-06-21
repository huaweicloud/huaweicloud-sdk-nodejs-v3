import { ParameterInfo } from './ParameterInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterSettingResponse extends SdkResponse {
    private 'parm_status'?: number | undefined;
    private 'parameter_info'?: Array<ParameterInfo> | undefined;
    public constructor() { 
        super();
    }
    public withParmStatus(parmStatus: number): ShowClusterSettingResponse {
        this['parm_status'] = parmStatus;
        return this;
    }
    public set parmStatus(parmStatus: number | undefined) {
        this['parm_status'] = parmStatus;
    }
    public get parmStatus() {
        return this['parm_status'];
    }
    public withParameterInfo(parameterInfo: Array<ParameterInfo>): ShowClusterSettingResponse {
        this['parameter_info'] = parameterInfo;
        return this;
    }
    public set parameterInfo(parameterInfo: Array<ParameterInfo> | undefined) {
        this['parameter_info'] = parameterInfo;
    }
    public get parameterInfo() {
        return this['parameter_info'];
    }
}