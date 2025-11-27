import { AddonInstanceSpec } from './AddonInstanceSpec';
import { AddonInstanceStatus } from './AddonInstanceStatus';
import { ObjectMeta } from './ObjectMeta';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAddonInstanceResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: AddonInstanceSpec;
    public status?: AddonInstanceStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): UpdateAddonInstanceResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): UpdateAddonInstanceResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): UpdateAddonInstanceResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: AddonInstanceSpec): UpdateAddonInstanceResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: AddonInstanceStatus): UpdateAddonInstanceResponse {
        this['status'] = status;
        return this;
    }
}