import { RemoveNodesSpec } from './RemoveNodesSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RemoveNodeResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public spec?: RemoveNodesSpec;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): RemoveNodeResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): RemoveNodeResponse {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: RemoveNodesSpec): RemoveNodeResponse {
        this['spec'] = spec;
        return this;
    }
}