

export class Metadata {
    public uid?: string;
    public name?: string;
    public labels?: { [key: string]: string; };
    public annotations?: { [key: string]: string; };
    public updateTimestamp?: string;
    public creationTimestamp?: string;
    public constructor() { 
    }
    public withUid(uid: string): Metadata {
        this['uid'] = uid;
        return this;
    }
    public withName(name: string): Metadata {
        this['name'] = name;
        return this;
    }
    public withLabels(labels: { [key: string]: string; }): Metadata {
        this['labels'] = labels;
        return this;
    }
    public withAnnotations(annotations: { [key: string]: string; }): Metadata {
        this['annotations'] = annotations;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): Metadata {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): Metadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
}