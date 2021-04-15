import { PersistentVolumeClaimMetadata } from './PersistentVolumeClaimMetadata';
import { PersistentVolumeClaimSpec } from './PersistentVolumeClaimSpec';
import { PersistentVolumeClaimStatus } from './PersistentVolumeClaimStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteCloudPersistentVolumeClaimsResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: PersistentVolumeClaimMetadata;
    public spec?: PersistentVolumeClaimSpec;
    public status?: PersistentVolumeClaimStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): DeleteCloudPersistentVolumeClaimsResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): DeleteCloudPersistentVolumeClaimsResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PersistentVolumeClaimMetadata): DeleteCloudPersistentVolumeClaimsResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PersistentVolumeClaimSpec): DeleteCloudPersistentVolumeClaimsResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: PersistentVolumeClaimStatus): DeleteCloudPersistentVolumeClaimsResponse {
        this['status'] = status;
        return this;
    }
}