import { JobMetadata } from './JobMetadata';
import { JobSpec } from './JobSpec';
import { JobStatus } from './JobStatus';


export class Job {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: JobMetadata;
    public spec?: JobSpec;
    public status?: JobStatus;
    public constructor() { 
    }
    public withKind(kind: string): Job {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): Job {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: JobMetadata): Job {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: JobSpec): Job {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: JobStatus): Job {
        this['status'] = status;
        return this;
    }
}