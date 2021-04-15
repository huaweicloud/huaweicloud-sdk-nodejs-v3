import { PersistentVolumeClaimMetadata } from './PersistentVolumeClaimMetadata';
import { PersistentVolumeClaimSpec } from './PersistentVolumeClaimSpec';
import { PersistentVolumeClaimStatus } from './PersistentVolumeClaimStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCloudPersistentVolumeClaimsResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: PersistentVolumeClaimMetadata;
    public spec?: PersistentVolumeClaimSpec;
    public status?: PersistentVolumeClaimStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): CreateCloudPersistentVolumeClaimsResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): CreateCloudPersistentVolumeClaimsResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PersistentVolumeClaimMetadata): CreateCloudPersistentVolumeClaimsResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PersistentVolumeClaimSpec): CreateCloudPersistentVolumeClaimsResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: PersistentVolumeClaimStatus): CreateCloudPersistentVolumeClaimsResponse {
        this['status'] = status;
        return this;
    }
}