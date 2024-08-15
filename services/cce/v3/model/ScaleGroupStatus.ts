import { NodePoolCondition } from './NodePoolCondition';
import { ScaleGroupStatusExistingNodeCount } from './ScaleGroupStatusExistingNodeCount';
import { ScaleGroupStatusUpcomingNodeCount } from './ScaleGroupStatusUpcomingNodeCount';


export class ScaleGroupStatus {
    public name?: string;
    public uid?: string;
    public creationTimestamp?: string;
    public updateTimestamp?: string;
    public phase?: ScaleGroupStatusPhaseEnum | string;
    public desiredNodeCount?: number;
    public unpaidScaleNodeCount?: number;
    public existingNodeCount?: ScaleGroupStatusExistingNodeCount;
    public upcomingNodeCount?: ScaleGroupStatusUpcomingNodeCount;
    public scaleDownDisabledNodeCount?: number;
    public conditions?: Array<NodePoolCondition>;
    public constructor() { 
    }
    public withName(name: string): ScaleGroupStatus {
        this['name'] = name;
        return this;
    }
    public withUid(uid: string): ScaleGroupStatus {
        this['uid'] = uid;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): ScaleGroupStatus {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withUpdateTimestamp(updateTimestamp: string): ScaleGroupStatus {
        this['updateTimestamp'] = updateTimestamp;
        return this;
    }
    public withPhase(phase: ScaleGroupStatusPhaseEnum | string): ScaleGroupStatus {
        this['phase'] = phase;
        return this;
    }
    public withDesiredNodeCount(desiredNodeCount: number): ScaleGroupStatus {
        this['desiredNodeCount'] = desiredNodeCount;
        return this;
    }
    public withUnpaidScaleNodeCount(unpaidScaleNodeCount: number): ScaleGroupStatus {
        this['unpaidScaleNodeCount'] = unpaidScaleNodeCount;
        return this;
    }
    public withExistingNodeCount(existingNodeCount: ScaleGroupStatusExistingNodeCount): ScaleGroupStatus {
        this['existingNodeCount'] = existingNodeCount;
        return this;
    }
    public withUpcomingNodeCount(upcomingNodeCount: ScaleGroupStatusUpcomingNodeCount): ScaleGroupStatus {
        this['upcomingNodeCount'] = upcomingNodeCount;
        return this;
    }
    public withScaleDownDisabledNodeCount(scaleDownDisabledNodeCount: number): ScaleGroupStatus {
        this['scaleDownDisabledNodeCount'] = scaleDownDisabledNodeCount;
        return this;
    }
    public withConditions(conditions: Array<NodePoolCondition>): ScaleGroupStatus {
        this['conditions'] = conditions;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScaleGroupStatusPhaseEnum {
    SYNCHRONIZING = 'Synchronizing',
    SYNCHRONIZED = 'Synchronized',
    SOLDOUT = 'SoldOut',
    DELETING = 'Deleting',
    ERROR = 'Error'
}
