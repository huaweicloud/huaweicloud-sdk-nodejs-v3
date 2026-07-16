

export class RotateCertNode {
    public nodeID?: string;
    public constructor(nodeID?: string) { 
        this['nodeID'] = nodeID;
    }
    public withNodeID(nodeID: string): RotateCertNode {
        this['nodeID'] = nodeID;
        return this;
    }
}