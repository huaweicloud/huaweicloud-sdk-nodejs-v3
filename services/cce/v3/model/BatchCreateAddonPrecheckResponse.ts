import { AddonCheckSpec } from './AddonCheckSpec';
import { AddonCheckStatus } from './AddonCheckStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateAddonPrecheckResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public spec?: AddonCheckSpec;
    public status?: AddonCheckStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): BatchCreateAddonPrecheckResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): BatchCreateAddonPrecheckResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withSpec(spec: AddonCheckSpec): BatchCreateAddonPrecheckResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: AddonCheckStatus): BatchCreateAddonPrecheckResponse {
        this['status'] = status;
        return this;
    }
}