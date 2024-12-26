import { AgentInstallScriptResponseInfo } from './AgentInstallScriptResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAgentInstallScriptResponse extends SdkResponse {
    private 'install_script_list'?: Array<AgentInstallScriptResponseInfo>;
    public constructor() { 
        super();
    }
    public withInstallScriptList(installScriptList: Array<AgentInstallScriptResponseInfo>): ListAgentInstallScriptResponse {
        this['install_script_list'] = installScriptList;
        return this;
    }
    public set installScriptList(installScriptList: Array<AgentInstallScriptResponseInfo>  | undefined) {
        this['install_script_list'] = installScriptList;
    }
    public get installScriptList(): Array<AgentInstallScriptResponseInfo> | undefined {
        return this['install_script_list'];
    }
}