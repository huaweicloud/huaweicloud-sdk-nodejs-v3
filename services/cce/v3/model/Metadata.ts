

export class Metadata {
    public annotations?: { [key: string]: string; };
    public creationTimestamp?: string;
    public labels?: { [key: string]: string; };
    public name: string;
    public uid?: string;
    public updateTimestamp?: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withAnnotations(annotations: { [key: string]: string; }): Metadata {
        this['annotations'] = annotations;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): Metadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withLabels(labels: { [key: string]: string; }): Metadata {
        this['labels'] = labels;
        return this;
    }
    public withName(name: string): Metadata {
        this['name'] = name;
        return this;
    }
    public withUid(uid: string): Metadata {
        this['uid'] = uid;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): Metadata {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
}