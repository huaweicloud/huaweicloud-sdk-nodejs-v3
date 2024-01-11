

export class WorkloadPlanStageIdReq {
    private 'stage_id'?: string;
    public constructor(stageId?: string) { 
        this['stage_id'] = stageId;
    }
    public withStageId(stageId: string): WorkloadPlanStageIdReq {
        this['stage_id'] = stageId;
        return this;
    }
    public set stageId(stageId: string  | undefined) {
        this['stage_id'] = stageId;
    }
    public get stageId(): string | undefined {
        return this['stage_id'];
    }
}