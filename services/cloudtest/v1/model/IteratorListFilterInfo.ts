import { IssueListPiFilterInfo } from './IssueListPiFilterInfo';


export class IteratorListFilterInfo {
    private 'pi_sprints'?: Array<IssueListPiFilterInfo>;
    private 'plan_end_date_start'?: Date;
    private 'plan_end_date_end'?: Date;
    public constructor() { 
    }
    public withPiSprints(piSprints: Array<IssueListPiFilterInfo>): IteratorListFilterInfo {
        this['pi_sprints'] = piSprints;
        return this;
    }
    public set piSprints(piSprints: Array<IssueListPiFilterInfo>  | undefined) {
        this['pi_sprints'] = piSprints;
    }
    public get piSprints(): Array<IssueListPiFilterInfo> | undefined {
        return this['pi_sprints'];
    }
    public withPlanEndDateStart(planEndDateStart: Date): IteratorListFilterInfo {
        this['plan_end_date_start'] = planEndDateStart;
        return this;
    }
    public set planEndDateStart(planEndDateStart: Date  | undefined) {
        this['plan_end_date_start'] = planEndDateStart;
    }
    public get planEndDateStart(): Date | undefined {
        return this['plan_end_date_start'];
    }
    public withPlanEndDateEnd(planEndDateEnd: Date): IteratorListFilterInfo {
        this['plan_end_date_end'] = planEndDateEnd;
        return this;
    }
    public set planEndDateEnd(planEndDateEnd: Date  | undefined) {
        this['plan_end_date_end'] = planEndDateEnd;
    }
    public get planEndDateEnd(): Date | undefined {
        return this['plan_end_date_end'];
    }
}