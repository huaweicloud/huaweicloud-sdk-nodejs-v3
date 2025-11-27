import { ManagedFieldsEntry } from './ManagedFieldsEntry';
import { OwnerReference } from './OwnerReference';


export class ObjectMeta {
    public uid?: string;
    public name?: string;
    public generateName?: string;
    public namespace?: string;
    public labels?: { [key: string]: string; };
    public annotations?: { [key: string]: string; };
    public creationTimestamp?: string;
    public updateTimestamp?: string;
    public resourceVersion?: string;
    public generation?: string;
    public managedFields?: Array<ManagedFieldsEntry>;
    public ownerReferences?: Array<OwnerReference>;
    public constructor() { 
    }
    public withUid(uid: string): ObjectMeta {
        this['uid'] = uid;
        return this;
    }
    public withName(name: string): ObjectMeta {
        this['name'] = name;
        return this;
    }
    public withGenerateName(generateName: string): ObjectMeta {
        this['generateName'] = generateName;
        return this;
    }
    public withNamespace(namespace: string): ObjectMeta {
        this['namespace'] = namespace;
        return this;
    }
    public withLabels(labels: { [key: string]: string; }): ObjectMeta {
        this['labels'] = labels;
        return this;
    }
    public withAnnotations(annotations: { [key: string]: string; }): ObjectMeta {
        this['annotations'] = annotations;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): ObjectMeta {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): ObjectMeta {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
    public withResourceVersion(resourceVersion: string): ObjectMeta {
        this['resourceVersion'] = resourceVersion;
        return this;
    }
    public withGeneration(generation: string): ObjectMeta {
        this['generation'] = generation;
        return this;
    }
    public withManagedFields(managedFields: Array<ManagedFieldsEntry>): ObjectMeta {
        this['managedFields'] = managedFields;
        return this;
    }
    public withOwnerReferences(ownerReferences: Array<OwnerReference>): ObjectMeta {
        this['ownerReferences'] = ownerReferences;
        return this;
    }
}