
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutopilotFeatureGatesResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public spec?: { [key: string]: object; };
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowAutopilotFeatureGatesResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowAutopilotFeatureGatesResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withSpec(spec: { [key: string]: object; }): ShowAutopilotFeatureGatesResponse {
        this['spec'] = spec;
        return this;
    }
}