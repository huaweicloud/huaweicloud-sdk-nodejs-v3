import { ResourceFlavorMetadata } from './ResourceFlavorMetadata';
import { ResourceFlavorSpec } from './ResourceFlavorSpec';
import { ResourceFlavorStatus } from './ResourceFlavorStatus';


export class ResourceFlavor {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: ResourceFlavorMetadata;
    public spec?: ResourceFlavorSpec;
    public status?: ResourceFlavorStatus;
    public constructor(apiVersion?: string, kind?: string, metadata?: ResourceFlavorMetadata, spec?: ResourceFlavorSpec, status?: ResourceFlavorStatus) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
        this['spec'] = spec;
        this['status'] = status;
    }
    public withApiVersion(apiVersion: string): ResourceFlavor {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ResourceFlavor {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: ResourceFlavorMetadata): ResourceFlavor {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: ResourceFlavorSpec): ResourceFlavor {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: ResourceFlavorStatus): ResourceFlavor {
        this['status'] = status;
        return this;
    }
}