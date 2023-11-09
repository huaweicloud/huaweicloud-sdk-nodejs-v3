import { ProcessorVo } from './ProcessorVo';


export class StageVo {
    public id?: number;
    private 'last_step_stage_id'?: Array<number>;
    public processors?: Array<ProcessorVo>;
    private 'stage_name'?: string;
    public constructor(id?: number) { 
        this['id'] = id;
    }
    public withId(id: number): StageVo {
        this['id'] = id;
        return this;
    }
    public withLastStepStageId(lastStepStageId: Array<number>): StageVo {
        this['last_step_stage_id'] = lastStepStageId;
        return this;
    }
    public set lastStepStageId(lastStepStageId: Array<number>  | undefined) {
        this['last_step_stage_id'] = lastStepStageId;
    }
    public get lastStepStageId(): Array<number> | undefined {
        return this['last_step_stage_id'];
    }
    public withProcessors(processors: Array<ProcessorVo>): StageVo {
        this['processors'] = processors;
        return this;
    }
    public withStageName(stageName: string): StageVo {
        this['stage_name'] = stageName;
        return this;
    }
    public set stageName(stageName: string  | undefined) {
        this['stage_name'] = stageName;
    }
    public get stageName(): string | undefined {
        return this['stage_name'];
    }
}