

export class MigrateNodesToNodePool {
    public nodeID?: string;
    public constructor(nodeID?: string) { 
        this['nodeID'] = nodeID;
    }
    public withNodeID(nodeID: string): MigrateNodesToNodePool {
        this['nodeID'] = nodeID;
        return this;
    }
}