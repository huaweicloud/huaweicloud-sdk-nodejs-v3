

export class AddonObjectMeta {
    public uid?: string;
    public name?: string;
    public labels?: { [key: string]: string; };
    public annotations?: { [key: string]: string; };
    public creationTimestamp?: string;
    public updateTimestamp?: string;
    public constructor() { 
    }
    public withUid(uid: string): AddonObjectMeta {
        this['uid'] = uid;
        return this;
    }
    public withName(name: string): AddonObjectMeta {
        this['name'] = name;
        return this;
    }
    public withLabels(labels: { [key: string]: string; }): AddonObjectMeta {
        this['labels'] = labels;
        return this;
    }
    public withAnnotations(annotations: { [key: string]: string; }): AddonObjectMeta {
        this['annotations'] = annotations;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): AddonObjectMeta {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): AddonObjectMeta {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
}