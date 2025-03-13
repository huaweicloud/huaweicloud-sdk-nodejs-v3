import { Metadata } from './Metadata';
import { UpgradePlanSpec } from './UpgradePlanSpec';
import { UpgradePlanStatus } from './UpgradePlanStatus';


export class UpgradePlan {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: Metadata;
    public spec?: UpgradePlanSpec;
    public status?: UpgradePlanStatus;
    public constructor(kind?: string, apiVersion?: string, metadata?: Metadata, spec?: UpgradePlanSpec, status?: UpgradePlanStatus) { 
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
        this['metadata'] = metadata;
        this['spec'] = spec;
        this['status'] = status;
    }
    public withKind(kind: string): UpgradePlan {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): UpgradePlan {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: Metadata): UpgradePlan {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: UpgradePlanSpec): UpgradePlan {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: UpgradePlanStatus): UpgradePlan {
        this['status'] = status;
        return this;
    }
}