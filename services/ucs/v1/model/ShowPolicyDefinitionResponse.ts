import { ObjectMeta } from './ObjectMeta';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPolicyDefinitionResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: object;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowPolicyDefinitionResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowPolicyDefinitionResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): ShowPolicyDefinitionResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: object): ShowPolicyDefinitionResponse {
        this['spec'] = spec;
        return this;
    }
}