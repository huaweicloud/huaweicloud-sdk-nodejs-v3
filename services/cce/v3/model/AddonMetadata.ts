

export class AddonMetadata {
    public uid?: string;
    public name?: string;
    public alias?: string;
    public labels?: { [key: string]: string; };
    public annotations?: { [key: string]: string; };
    public updateTimestamp?: string;
    public creationTimestamp?: string;
    public constructor() { 
    }
    public withUid(uid: string): AddonMetadata {
        this['uid'] = uid;
        return this;
    }
    public withName(name: string): AddonMetadata {
        this['name'] = name;
        return this;
    }
    public withAlias(alias: string): AddonMetadata {
        this['alias'] = alias;
        return this;
    }
    public withLabels(labels: { [key: string]: string; }): AddonMetadata {
        this['labels'] = labels;
        return this;
    }
    public withAnnotations(annotations: { [key: string]: string; }): AddonMetadata {
        this['annotations'] = annotations;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): AddonMetadata {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): AddonMetadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
}