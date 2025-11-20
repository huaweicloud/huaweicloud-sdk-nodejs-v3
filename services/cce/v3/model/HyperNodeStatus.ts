

export class HyperNodeStatus {
    public phase?: string;
    public instanceID?: string;
    public currentNode?: number;
    public deletingNode?: number;
    public creatingNode?: number;
    public activeNode?: number;
    public constructor() { 
    }
    public withPhase(phase: string): HyperNodeStatus {
        this['phase'] = phase;
        return this;
    }
    public withInstanceID(instanceID: string): HyperNodeStatus {
        this['instanceID'] = instanceID;
        return this;
    }
    public withCurrentNode(currentNode: number): HyperNodeStatus {
        this['currentNode'] = currentNode;
        return this;
    }
    public withDeletingNode(deletingNode: number): HyperNodeStatus {
        this['deletingNode'] = deletingNode;
        return this;
    }
    public withCreatingNode(creatingNode: number): HyperNodeStatus {
        this['creatingNode'] = creatingNode;
        return this;
    }
    public withActiveNode(activeNode: number): HyperNodeStatus {
        this['activeNode'] = activeNode;
        return this;
    }
}