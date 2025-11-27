

export class RegisterClusterMetadata {
    public uid?: string;
    public name?: string;
    public labels?: { [key: string]: string; };
    public annotations?: { [key: string]: string; };
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withUid(uid: string): RegisterClusterMetadata {
        this['uid'] = uid;
        return this;
    }
    public withName(name: string): RegisterClusterMetadata {
        this['name'] = name;
        return this;
    }
    public withLabels(labels: { [key: string]: string; }): RegisterClusterMetadata {
        this['labels'] = labels;
        return this;
    }
    public withAnnotations(annotations: { [key: string]: string; }): RegisterClusterMetadata {
        this['annotations'] = annotations;
        return this;
    }
}