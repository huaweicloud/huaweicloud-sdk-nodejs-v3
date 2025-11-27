import { GitRepositoryRef } from './GitRepositoryRef';
import { LocalObjectReference } from './LocalObjectReference';


export class GitRepositorySpec {
    public url?: string;
    public ref?: GitRepositoryRef;
    public secretRef?: LocalObjectReference;
    public interval?: string;
    public timeout?: string;
    public constructor() { 
    }
    public withUrl(url: string): GitRepositorySpec {
        this['url'] = url;
        return this;
    }
    public withRef(ref: GitRepositoryRef): GitRepositorySpec {
        this['ref'] = ref;
        return this;
    }
    public withSecretRef(secretRef: LocalObjectReference): GitRepositorySpec {
        this['secretRef'] = secretRef;
        return this;
    }
    public withInterval(interval: string): GitRepositorySpec {
        this['interval'] = interval;
        return this;
    }
    public withTimeout(timeout: string): GitRepositorySpec {
        this['timeout'] = timeout;
        return this;
    }
}