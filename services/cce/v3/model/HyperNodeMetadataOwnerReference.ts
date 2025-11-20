

export class HyperNodeMetadataOwnerReference {
    public nodepoolName?: string;
    public nodepoolID?: string;
    public constructor() { 
    }
    public withNodepoolName(nodepoolName: string): HyperNodeMetadataOwnerReference {
        this['nodepoolName'] = nodepoolName;
        return this;
    }
    public withNodepoolID(nodepoolID: string): HyperNodeMetadataOwnerReference {
        this['nodepoolID'] = nodepoolID;
        return this;
    }
}