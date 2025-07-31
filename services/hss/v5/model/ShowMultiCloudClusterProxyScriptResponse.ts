
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMultiCloudClusterProxyScriptResponse extends SdkResponse {
    private 'install_script'?: string;
    public constructor() { 
        super();
    }
    public withInstallScript(installScript: string): ShowMultiCloudClusterProxyScriptResponse {
        this['install_script'] = installScript;
        return this;
    }
    public set installScript(installScript: string  | undefined) {
        this['install_script'] = installScript;
    }
    public get installScript(): string | undefined {
        return this['install_script'];
    }
}