

export class NodePoolStatus {
    public currentNode?: number;
    public jobId?: string;
    public phase?: NodePoolStatusPhaseEnum;
    public constructor() { 
    }
    public withCurrentNode(currentNode: number): NodePoolStatus {
        this['currentNode'] = currentNode;
        return this;
    }
    public withJobId(jobId: string): NodePoolStatus {
        this['jobId'] = jobId;
        return this;
    }
    public withPhase(phase: NodePoolStatusPhaseEnum): NodePoolStatus {
        this['phase'] = phase;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodePoolStatusPhaseEnum {
    SYNCHRONIZING = 'Synchronizing',
    SYNCHRONIZED = 'Synchronized',
    SOLDOUT = 'SoldOut',
    DELETING = 'Deleting',
    ERROR = 'Error'
}
