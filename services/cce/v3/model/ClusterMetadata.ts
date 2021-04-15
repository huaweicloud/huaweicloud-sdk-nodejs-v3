

export class ClusterMetadata {
    public annotations?: { [key: string]: string; };
    public creationTimestamp?: string;
    public labels?: { [key: string]: string; };
    public name: string;
    public uid?: string;
    public updateTimestamp?: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withAnnotations(annotations: { [key: string]: string; }): ClusterMetadata {
        this['annotations'] = annotations;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): ClusterMetadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withLabels(labels: { [key: string]: string; }): ClusterMetadata {
        this['labels'] = labels;
        return this;
    }
    public withName(name: string): ClusterMetadata {
        this['name'] = name;
        return this;
    }
    public withUid(uid: string): ClusterMetadata {
        this['uid'] = uid;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): ClusterMetadata {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
}