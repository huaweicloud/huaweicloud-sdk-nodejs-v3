

export class AutopilotClusterMetadata {
    public name?: string;
    public uid?: string;
    public alias?: string;
    public annotations?: { [key: string]: string; };
    public labels?: { [key: string]: string; };
    public creationTimestamp?: string;
    public updateTimestamp?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): AutopilotClusterMetadata {
        this['name'] = name;
        return this;
    }
    public withUid(uid: string): AutopilotClusterMetadata {
        this['uid'] = uid;
        return this;
    }
    public withAlias(alias: string): AutopilotClusterMetadata {
        this['alias'] = alias;
        return this;
    }
    public withAnnotations(annotations: { [key: string]: string; }): AutopilotClusterMetadata {
        this['annotations'] = annotations;
        return this;
    }
    public withLabels(labels: { [key: string]: string; }): AutopilotClusterMetadata {
        this['labels'] = labels;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): AutopilotClusterMetadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): AutopilotClusterMetadata {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
}