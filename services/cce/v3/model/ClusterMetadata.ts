

export class ClusterMetadata {
    public name?: string;
    public uid?: string;
    public alias?: string;
    public annotations?: { [key: string]: string; };
    public labels?: { [key: string]: string; };
    public creationTimestamp?: string;
    public updateTimestamp?: string;
    public timezone?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ClusterMetadata {
        this['name'] = name;
        return this;
    }
    public withUid(uid: string): ClusterMetadata {
        this['uid'] = uid;
        return this;
    }
    public withAlias(alias: string): ClusterMetadata {
        this['alias'] = alias;
        return this;
    }
    public withAnnotations(annotations: { [key: string]: string; }): ClusterMetadata {
        this['annotations'] = annotations;
        return this;
    }
    public withLabels(labels: { [key: string]: string; }): ClusterMetadata {
        this['labels'] = labels;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): ClusterMetadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): ClusterMetadata {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
    public withTimezone(timezone: string): ClusterMetadata {
        this['timezone'] = timezone;
        return this;
    }
}