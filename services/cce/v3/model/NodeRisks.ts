

export class NodeRisks {
    private 'NodeID'?: string;
    public constructor() { 
    }
    public withNodeID(nodeID: string): NodeRisks {
        this['NodeID'] = nodeID;
        return this;
    }
    public set nodeID(nodeID: string  | undefined) {
        this['NodeID'] = nodeID;
    }
    public get nodeID(): string | undefined {
        return this['NodeID'];
    }
}