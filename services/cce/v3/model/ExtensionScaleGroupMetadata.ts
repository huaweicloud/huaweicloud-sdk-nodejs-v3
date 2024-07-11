

export class ExtensionScaleGroupMetadata {
    public uid?: string;
    public name?: string;
    public constructor() { 
    }
    public withUid(uid: string): ExtensionScaleGroupMetadata {
        this['uid'] = uid;
        return this;
    }
    public withName(name: string): ExtensionScaleGroupMetadata {
        this['name'] = name;
        return this;
    }
}