

export class UpgradeCluserResponseMetadata {
    public uid?: string;
    public constructor() { 
    }
    public withUid(uid: string): UpgradeCluserResponseMetadata {
        this['uid'] = uid;
        return this;
    }
}