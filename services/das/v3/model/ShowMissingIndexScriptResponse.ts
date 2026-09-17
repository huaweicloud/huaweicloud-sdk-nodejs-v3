
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMissingIndexScriptResponse extends SdkResponse {
    public script?: string;
    public constructor() { 
        super();
    }
    public withScript(script: string): ShowMissingIndexScriptResponse {
        this['script'] = script;
        return this;
    }
}