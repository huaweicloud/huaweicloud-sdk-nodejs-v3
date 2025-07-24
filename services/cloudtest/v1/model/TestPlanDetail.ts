import { NameAndId } from './NameAndId';
import { TestPlanDetailCreator } from './TestPlanDetailCreator';
import { TestPlanDetailDesignStage } from './TestPlanDetailDesignStage';
import { TestPlanDetailExecuteStage } from './TestPlanDetailExecuteStage';
import { TestPlanDetailOwner } from './TestPlanDetailOwner';
import { TestPlanDetailReportStage } from './TestPlanDetailReportStage';


export class TestPlanDetail {
    private 'plan_id'?: string;
    public name?: string;
    private 'start_date'?: string;
    private 'end_date'?: string;
    private 'finish_date'?: string;
    private 'project_id'?: string;
    private 'current_stage'?: string;
    private 'expire_day'?: number;
    public creator?: TestPlanDetailCreator;
    public owner?: TestPlanDetailOwner;
    private 'design_stage'?: TestPlanDetailDesignStage;
    private 'execute_stage'?: TestPlanDetailExecuteStage;
    private 'report_stage'?: TestPlanDetailReportStage;
    public iteration?: NameAndId;
    public constructor() { 
    }
    public withPlanId(planId: string): TestPlanDetail {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withName(name: string): TestPlanDetail {
        this['name'] = name;
        return this;
    }
    public withStartDate(startDate: string): TestPlanDetail {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withEndDate(endDate: string): TestPlanDetail {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): string | undefined {
        return this['end_date'];
    }
    public withFinishDate(finishDate: string): TestPlanDetail {
        this['finish_date'] = finishDate;
        return this;
    }
    public set finishDate(finishDate: string  | undefined) {
        this['finish_date'] = finishDate;
    }
    public get finishDate(): string | undefined {
        return this['finish_date'];
    }
    public withProjectId(projectId: string): TestPlanDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCurrentStage(currentStage: string): TestPlanDetail {
        this['current_stage'] = currentStage;
        return this;
    }
    public set currentStage(currentStage: string  | undefined) {
        this['current_stage'] = currentStage;
    }
    public get currentStage(): string | undefined {
        return this['current_stage'];
    }
    public withExpireDay(expireDay: number): TestPlanDetail {
        this['expire_day'] = expireDay;
        return this;
    }
    public set expireDay(expireDay: number  | undefined) {
        this['expire_day'] = expireDay;
    }
    public get expireDay(): number | undefined {
        return this['expire_day'];
    }
    public withCreator(creator: TestPlanDetailCreator): TestPlanDetail {
        this['creator'] = creator;
        return this;
    }
    public withOwner(owner: TestPlanDetailOwner): TestPlanDetail {
        this['owner'] = owner;
        return this;
    }
    public withDesignStage(designStage: TestPlanDetailDesignStage): TestPlanDetail {
        this['design_stage'] = designStage;
        return this;
    }
    public set designStage(designStage: TestPlanDetailDesignStage  | undefined) {
        this['design_stage'] = designStage;
    }
    public get designStage(): TestPlanDetailDesignStage | undefined {
        return this['design_stage'];
    }
    public withExecuteStage(executeStage: TestPlanDetailExecuteStage): TestPlanDetail {
        this['execute_stage'] = executeStage;
        return this;
    }
    public set executeStage(executeStage: TestPlanDetailExecuteStage  | undefined) {
        this['execute_stage'] = executeStage;
    }
    public get executeStage(): TestPlanDetailExecuteStage | undefined {
        return this['execute_stage'];
    }
    public withReportStage(reportStage: TestPlanDetailReportStage): TestPlanDetail {
        this['report_stage'] = reportStage;
        return this;
    }
    public set reportStage(reportStage: TestPlanDetailReportStage  | undefined) {
        this['report_stage'] = reportStage;
    }
    public get reportStage(): TestPlanDetailReportStage | undefined {
        return this['report_stage'];
    }
    public withIteration(iteration: NameAndId): TestPlanDetail {
        this['iteration'] = iteration;
        return this;
    }
}