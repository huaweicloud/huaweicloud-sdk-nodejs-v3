

export class NodeOwnerReference {
    public nodepoolName?: string;
    public nodepoolID?: string;
    public constructor() { 
    }
    public withNodepoolName(nodepoolName: string): NodeOwnerReference {
        this['nodepoolName'] = nodepoolName;
        return this;
    }
    public withNodepoolID(nodepoolID: string): NodeOwnerReference {
        this['nodepoolID'] = nodepoolID;
        return this;
    }
}