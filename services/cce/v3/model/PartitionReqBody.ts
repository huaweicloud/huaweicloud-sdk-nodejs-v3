import { PartitionReqBodyMetadata } from './PartitionReqBodyMetadata';
import { PartitionSpec } from './PartitionSpec';


export class PartitionReqBody {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: PartitionReqBodyMetadata;
    public spec?: PartitionSpec;
    public constructor() { 
    }
    public withKind(kind: string): PartitionReqBody {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): PartitionReqBody {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: PartitionReqBodyMetadata): PartitionReqBody {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PartitionSpec): PartitionReqBody {
        this['spec'] = spec;
        return this;
    }
}