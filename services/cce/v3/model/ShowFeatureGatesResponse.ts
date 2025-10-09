
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFeatureGatesResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public spec?: { [key: string]: object; };
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowFeatureGatesResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowFeatureGatesResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withSpec(spec: { [key: string]: object; }): ShowFeatureGatesResponse {
        this['spec'] = spec;
        return this;
    }
}