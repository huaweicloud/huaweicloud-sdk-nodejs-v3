
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetLabelsResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public spec?: { [key: string]: { [key: string]: Array<string>; }; };
    public constructor() { 
        super();
    }
    public withKind(kind: string): GetLabelsResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): GetLabelsResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withSpec(spec: { [key: string]: { [key: string]: Array<string>; }; }): GetLabelsResponse {
        this['spec'] = spec;
        return this;
    }
}