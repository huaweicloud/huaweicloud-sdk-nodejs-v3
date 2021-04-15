import { PersistentVolumeClaimMetadata } from './PersistentVolumeClaimMetadata';
import { PersistentVolumeClaimSpec } from './PersistentVolumeClaimSpec';
import { PersistentVolumeClaimStatus } from './PersistentVolumeClaimStatus';


export class PersistentVolumeClaim {
    public apiVersion: string;
    public kind: string;
    public metadata: PersistentVolumeClaimMetadata;
    public spec: PersistentVolumeClaimSpec;
    public status?: PersistentVolumeClaimStatus;
    public constructor(apiVersion?: any, kind?: any, metadata?: any, spec?: any) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): PersistentVolumeClaim {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): PersistentVolumeClaim {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PersistentVolumeClaimMetadata): PersistentVolumeClaim {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PersistentVolumeClaimSpec): PersistentVolumeClaim {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: PersistentVolumeClaimStatus): PersistentVolumeClaim {
        this['status'] = status;
        return this;
    }
}