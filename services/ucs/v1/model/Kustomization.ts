import { KustomizationMetaData } from './KustomizationMetaData';
import { KustomizationSpec } from './KustomizationSpec';
import { KustomizationStatus } from './KustomizationStatus';


export class Kustomization {
    public metadata?: KustomizationMetaData;
    public spec?: KustomizationSpec;
    public status?: KustomizationStatus;
    public constructor() { 
    }
    public withMetadata(metadata: KustomizationMetaData): Kustomization {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: KustomizationSpec): Kustomization {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: KustomizationStatus): Kustomization {
        this['status'] = status;
        return this;
    }
}