import { Metadata } from './Metadata';
import { WorkFlowSpec } from './WorkFlowSpec';
import { WorkFlowStatus } from './WorkFlowStatus';


export class UpgradeWorkFlow {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: Metadata;
    public spec?: WorkFlowSpec;
    public status?: WorkFlowStatus;
    public constructor() { 
    }
    public withKind(kind: string): UpgradeWorkFlow {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): UpgradeWorkFlow {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: Metadata): UpgradeWorkFlow {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: WorkFlowSpec): UpgradeWorkFlow {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: WorkFlowStatus): UpgradeWorkFlow {
        this['status'] = status;
        return this;
    }
}