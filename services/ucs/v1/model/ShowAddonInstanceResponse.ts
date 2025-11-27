import { AddonInstanceSpec } from './AddonInstanceSpec';
import { AddonInstanceStatus } from './AddonInstanceStatus';
import { ObjectMeta } from './ObjectMeta';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAddonInstanceResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: AddonInstanceSpec;
    public status?: AddonInstanceStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowAddonInstanceResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowAddonInstanceResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): ShowAddonInstanceResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: AddonInstanceSpec): ShowAddonInstanceResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: AddonInstanceStatus): ShowAddonInstanceResponse {
        this['status'] = status;
        return this;
    }
}