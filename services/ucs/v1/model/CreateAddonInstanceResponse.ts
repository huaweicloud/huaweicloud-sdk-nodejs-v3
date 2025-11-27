import { AddonInstanceSpec } from './AddonInstanceSpec';
import { AddonInstanceStatus } from './AddonInstanceStatus';
import { ObjectMeta } from './ObjectMeta';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAddonInstanceResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: AddonInstanceSpec;
    public status?: AddonInstanceStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): CreateAddonInstanceResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): CreateAddonInstanceResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): CreateAddonInstanceResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: AddonInstanceSpec): CreateAddonInstanceResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: AddonInstanceStatus): CreateAddonInstanceResponse {
        this['status'] = status;
        return this;
    }
}