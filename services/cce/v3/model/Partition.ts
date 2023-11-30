import { PartitionMetadata } from './PartitionMetadata';
import { PartitionSpec } from './PartitionSpec';


export class Partition {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: PartitionMetadata;
    public spec?: PartitionSpec;
    public constructor() { 
    }
    public withKind(kind: string): Partition {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): Partition {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: PartitionMetadata): Partition {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PartitionSpec): Partition {
        this['spec'] = spec;
        return this;
    }
}