import { ManagedFieldsEntry } from './ManagedFieldsEntry';


export class GitRepositoryMetaData {
    public name?: string;
    public namespace?: string;
    public uid?: string;
    public resourceVersion?: string;
    public generation?: number;
    public creationTimestamp?: string;
    public finalizers?: Array<string>;
    public managedFields?: Array<ManagedFieldsEntry>;
    public constructor() { 
    }
    public withName(name: string): GitRepositoryMetaData {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): GitRepositoryMetaData {
        this['namespace'] = namespace;
        return this;
    }
    public withUid(uid: string): GitRepositoryMetaData {
        this['uid'] = uid;
        return this;
    }
    public withResourceVersion(resourceVersion: string): GitRepositoryMetaData {
        this['resourceVersion'] = resourceVersion;
        return this;
    }
    public withGeneration(generation: number): GitRepositoryMetaData {
        this['generation'] = generation;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): GitRepositoryMetaData {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withFinalizers(finalizers: Array<string>): GitRepositoryMetaData {
        this['finalizers'] = finalizers;
        return this;
    }
    public withManagedFields(managedFields: Array<ManagedFieldsEntry>): GitRepositoryMetaData {
        this['managedFields'] = managedFields;
        return this;
    }
}