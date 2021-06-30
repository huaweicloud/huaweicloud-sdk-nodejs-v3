

export class ShowClusterMetadata {
    public name: string;
    public uid?: string;
    public annotations?: { [key: string]: string; };
    public creationTimestamp?: string;
    public updateTimestamp?: string;
    public labels?: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): ShowClusterMetadata {
        this['name'] = name;
        return this;
    }
    public withUid(uid: string): ShowClusterMetadata {
        this['uid'] = uid;
        return this;
    }
    public withAnnotations(annotations: { [key: string]: string; }): ShowClusterMetadata {
        this['annotations'] = annotations;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): ShowClusterMetadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): ShowClusterMetadata {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
    public withLabels(labels: string): ShowClusterMetadata {
        this['labels'] = labels;
        return this;
    }
}