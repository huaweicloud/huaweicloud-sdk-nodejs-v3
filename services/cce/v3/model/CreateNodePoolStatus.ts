import { NodePoolCondition } from './NodePoolCondition';
import { ScaleGroupStatus } from './ScaleGroupStatus';


export class CreateNodePoolStatus {
    public currentNode?: number;
    public creatingNode?: number;
    public deletingNode?: number;
    public phase?: CreateNodePoolStatusPhaseEnum | string;
    public conditions?: Array<NodePoolCondition>;
    public scaleGroupStatuses?: Array<ScaleGroupStatus>;
    public constructor() { 
    }
    public withCurrentNode(currentNode: number): CreateNodePoolStatus {
        this['currentNode'] = currentNode;
        return this;
    }
    public withCreatingNode(creatingNode: number): CreateNodePoolStatus {
        this['creatingNode'] = creatingNode;
        return this;
    }
    public withDeletingNode(deletingNode: number): CreateNodePoolStatus {
        this['deletingNode'] = deletingNode;
        return this;
    }
    public withPhase(phase: CreateNodePoolStatusPhaseEnum | string): CreateNodePoolStatus {
        this['phase'] = phase;
        return this;
    }
    public withConditions(conditions: Array<NodePoolCondition>): CreateNodePoolStatus {
        this['conditions'] = conditions;
        return this;
    }
    public withScaleGroupStatuses(scaleGroupStatuses: Array<ScaleGroupStatus>): CreateNodePoolStatus {
        this['scaleGroupStatuses'] = scaleGroupStatuses;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateNodePoolStatusPhaseEnum {
    SYNCHRONIZING = 'Synchronizing',
    SYNCHRONIZED = 'Synchronized',
    SOLDOUT = 'SoldOut',
    DELETING = 'Deleting',
    ERROR = 'Error'
}
