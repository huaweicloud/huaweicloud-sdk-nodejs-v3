import { NodePoolCondition } from './NodePoolCondition';


export class NodePoolStatus {
    public currentNode?: number;
    public creatingNode?: number;
    public deletingNode?: number;
    public phase?: NodePoolStatusPhaseEnum;
    public jobId?: string;
    public conditions?: Array<NodePoolCondition>;
    public constructor() { 
    }
    public withCurrentNode(currentNode: number): NodePoolStatus {
        this['currentNode'] = currentNode;
        return this;
    }
    public withCreatingNode(creatingNode: number): NodePoolStatus {
        this['creatingNode'] = creatingNode;
        return this;
    }
    public withDeletingNode(deletingNode: number): NodePoolStatus {
        this['deletingNode'] = deletingNode;
        return this;
    }
    public withPhase(phase: NodePoolStatusPhaseEnum): NodePoolStatus {
        this['phase'] = phase;
        return this;
    }
    public withJobId(jobId: string): NodePoolStatus {
        this['jobId'] = jobId;
        return this;
    }
    public withConditions(conditions: Array<NodePoolCondition>): NodePoolStatus {
        this['conditions'] = conditions;
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
