import { ObjectMeta } from './ObjectMeta';
import { UCSConstraintSpec } from './UCSConstraintSpec';
import { UCSConstraintStatus } from './UCSConstraintStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPolicyInstanceResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: UCSConstraintSpec;
    public status?: UCSConstraintStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowPolicyInstanceResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowPolicyInstanceResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): ShowPolicyInstanceResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: UCSConstraintSpec): ShowPolicyInstanceResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: UCSConstraintStatus): ShowPolicyInstanceResponse {
        this['status'] = status;
        return this;
    }
}