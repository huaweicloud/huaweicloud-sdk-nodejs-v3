import { NodePoolCondition } from './NodePoolCondition';
import { ScaleGroupStatus } from './ScaleGroupStatus';


export class UpdateNodePoolStatus {
    public currentNode?: number;
    public creatingNode?: number;
    public deletingNode?: number;
    public phase?: UpdateNodePoolStatusPhaseEnum | string;
    public conditions?: Array<NodePoolCondition>;
    public scaleGroupStatuses?: Array<ScaleGroupStatus>;
    public constructor() { 
    }
    public withCurrentNode(currentNode: number): UpdateNodePoolStatus {
        this['currentNode'] = currentNode;
        return this;
    }
    public withCreatingNode(creatingNode: number): UpdateNodePoolStatus {
        this['creatingNode'] = creatingNode;
        return this;
    }
    public withDeletingNode(deletingNode: number): UpdateNodePoolStatus {
        this['deletingNode'] = deletingNode;
        return this;
    }
    public withPhase(phase: UpdateNodePoolStatusPhaseEnum | string): UpdateNodePoolStatus {
        this['phase'] = phase;
        return this;
    }
    public withConditions(conditions: Array<NodePoolCondition>): UpdateNodePoolStatus {
        this['conditions'] = conditions;
        return this;
    }
    public withScaleGroupStatuses(scaleGroupStatuses: Array<ScaleGroupStatus>): UpdateNodePoolStatus {
        this['scaleGroupStatuses'] = scaleGroupStatuses;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateNodePoolStatusPhaseEnum {
    SYNCHRONIZING = 'Synchronizing',
    SYNCHRONIZED = 'Synchronized',
    SOLDOUT = 'SoldOut',
    DELETING = 'Deleting',
    ERROR = 'Error'
}
