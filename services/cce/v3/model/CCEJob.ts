import { CCEJobMetadata } from './CCEJobMetadata';
import { CCEJobSpec } from './CCEJobSpec';
import { CCEJobStatus } from './CCEJobStatus';


export class CCEJob {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: CCEJobMetadata;
    public spec?: CCEJobSpec;
    public status?: CCEJobStatus;
    public constructor() { 
    }
    public withKind(kind: string): CCEJob {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): CCEJob {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: CCEJobMetadata): CCEJob {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: CCEJobSpec): CCEJob {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: CCEJobStatus): CCEJob {
        this['status'] = status;
        return this;
    }
}