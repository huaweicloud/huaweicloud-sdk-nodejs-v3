

export class NodePoolMetadata {
    public name: string;
    public uid?: string;
    public annotations?: { [key: string]: string; };
    public updateTimestamp?: string;
    public creationTimestamp?: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): NodePoolMetadata {
        this['name'] = name;
        return this;
    }
    public withUid(uid: string): NodePoolMetadata {
        this['uid'] = uid;
        return this;
    }
    public withAnnotations(annotations: { [key: string]: string; }): NodePoolMetadata {
        this['annotations'] = annotations;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): NodePoolMetadata {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): NodePoolMetadata {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
}