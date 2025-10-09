

export class NodeMetadataOwnerReference {
    public nodepoolName?: string;
    public nodepoolID?: string;
    public constructor() { 
    }
    public withNodepoolName(nodepoolName: string): NodeMetadataOwnerReference {
        this['nodepoolName'] = nodepoolName;
        return this;
    }
    public withNodepoolID(nodepoolID: string): NodeMetadataOwnerReference {
        this['nodepoolID'] = nodepoolID;
        return this;
    }
}