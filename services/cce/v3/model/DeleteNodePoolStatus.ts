import { NodePoolCondition } from './NodePoolCondition';


export class DeleteNodePoolStatus {
    public currentNode?: number;
    public creatingNode?: number;
    public deletingNode?: number;
    public phase?: DeleteNodePoolStatusPhaseEnum | string;
    public jobId?: string;
    public conditions?: Array<NodePoolCondition>;
    public constructor() { 
    }
    public withCurrentNode(currentNode: number): DeleteNodePoolStatus {
        this['currentNode'] = currentNode;
        return this;
    }
    public withCreatingNode(creatingNode: number): DeleteNodePoolStatus {
        this['creatingNode'] = creatingNode;
        return this;
    }
    public withDeletingNode(deletingNode: number): DeleteNodePoolStatus {
        this['deletingNode'] = deletingNode;
        return this;
    }
    public withPhase(phase: DeleteNodePoolStatusPhaseEnum | string): DeleteNodePoolStatus {
        this['phase'] = phase;
        return this;
    }
    public withJobId(jobId: string): DeleteNodePoolStatus {
        this['jobId'] = jobId;
        return this;
    }
    public withConditions(conditions: Array<NodePoolCondition>): DeleteNodePoolStatus {
        this['conditions'] = conditions;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteNodePoolStatusPhaseEnum {
    SYNCHRONIZING = 'Synchronizing',
    SYNCHRONIZED = 'Synchronized',
    SOLDOUT = 'SoldOut',
    DELETING = 'Deleting',
    ERROR = 'Error'
}
