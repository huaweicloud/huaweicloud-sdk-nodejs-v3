import { SourceRef } from './SourceRef';


export class KustomizationSpec {
    public path?: string;
    public interval?: string;
    public timeout?: string;
    public sourceRef?: SourceRef;
    public targetNamespace?: string;
    public prune?: boolean;
    public constructor() { 
    }
    public withPath(path: string): KustomizationSpec {
        this['path'] = path;
        return this;
    }
    public withInterval(interval: string): KustomizationSpec {
        this['interval'] = interval;
        return this;
    }
    public withTimeout(timeout: string): KustomizationSpec {
        this['timeout'] = timeout;
        return this;
    }
    public withSourceRef(sourceRef: SourceRef): KustomizationSpec {
        this['sourceRef'] = sourceRef;
        return this;
    }
    public withTargetNamespace(targetNamespace: string): KustomizationSpec {
        this['targetNamespace'] = targetNamespace;
        return this;
    }
    public withPrune(prune: boolean): KustomizationSpec {
        this['prune'] = prune;
        return this;
    }
}