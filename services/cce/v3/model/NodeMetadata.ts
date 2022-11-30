

export class NodeMetadata {
    public name?: string;
    public uid?: string;
    public labels?: { [key: string]: string; };
    public annotations?: { [key: string]: string; };
    public creationTimestamp?: string;
    public updateTimestamp?: string;
    public constructor() { 
    }
    public withName(name: string): NodeMetadata {
        this['name'] = name;
        return this;
    }
    public withUid(uid: string): NodeMetadata {
        this['uid'] = uid;
        return this;
    }
    public withLabels(labels: { [key: string]: string; }): NodeMetadata {
        this['labels'] = labels;
        return this;
    }
    public withAnnotations(annotations: { [key: string]: string; }): NodeMetadata {
        this['annotations'] = annotations;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): NodeMetadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): NodeMetadata {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
}