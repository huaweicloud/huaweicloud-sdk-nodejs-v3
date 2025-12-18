

export class NodeMetadataOwnerReferences {
    public nodepoolName?: string;
    public nodepoolID?: string;
    public hyperNodeName?: string;
    public hyperNodeID?: string;
    public constructor() { 
    }
    public withNodepoolName(nodepoolName: string): NodeMetadataOwnerReferences {
        this['nodepoolName'] = nodepoolName;
        return this;
    }
    public withNodepoolID(nodepoolID: string): NodeMetadataOwnerReferences {
        this['nodepoolID'] = nodepoolID;
        return this;
    }
    public withHyperNodeName(hyperNodeName: string): NodeMetadataOwnerReferences {
        this['hyperNodeName'] = hyperNodeName;
        return this;
    }
    public withHyperNodeID(hyperNodeID: string): NodeMetadataOwnerReferences {
        this['hyperNodeID'] = hyperNodeID;
        return this;
    }
}