

export class NodeMetadataOwnerReference {
    public nodepoolName?: string;
    public nodepoolID?: string;
    public hyperNodeName?: string;
    public hyperNodeID?: string;
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
    public withHyperNodeName(hyperNodeName: string): NodeMetadataOwnerReference {
        this['hyperNodeName'] = hyperNodeName;
        return this;
    }
    public withHyperNodeID(hyperNodeID: string): NodeMetadataOwnerReference {
        this['hyperNodeID'] = hyperNodeID;
        return this;
    }
}