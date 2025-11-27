

export class KustomizationMetaData {
    public name?: string;
    public namespace?: string;
    public uid?: string;
    public resourceVersion?: string;
    public generation?: number;
    public creationTimestamp?: string;
    public finalizers?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): KustomizationMetaData {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): KustomizationMetaData {
        this['namespace'] = namespace;
        return this;
    }
    public withUid(uid: string): KustomizationMetaData {
        this['uid'] = uid;
        return this;
    }
    public withResourceVersion(resourceVersion: string): KustomizationMetaData {
        this['resourceVersion'] = resourceVersion;
        return this;
    }
    public withGeneration(generation: number): KustomizationMetaData {
        this['generation'] = generation;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): KustomizationMetaData {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withFinalizers(finalizers: Array<string>): KustomizationMetaData {
        this['finalizers'] = finalizers;
        return this;
    }
}