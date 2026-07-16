import { SubStage } from './SubStage';


export class StageInfoWithSub {
    private 'job_id'?: string;
    public name?: string;
    private 'en_message'?: string;
    private 'zh_message'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'stage_order'?: number;
    private 'sub_stages'?: Array<SubStage>;
    public constructor() { 
    }
    public withJobId(jobId: string): StageInfoWithSub {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withName(name: string): StageInfoWithSub {
        this['name'] = name;
        return this;
    }
    public withEnMessage(enMessage: string): StageInfoWithSub {
        this['en_message'] = enMessage;
        return this;
    }
    public set enMessage(enMessage: string  | undefined) {
        this['en_message'] = enMessage;
    }
    public get enMessage(): string | undefined {
        return this['en_message'];
    }
    public withZhMessage(zhMessage: string): StageInfoWithSub {
        this['zh_message'] = zhMessage;
        return this;
    }
    public set zhMessage(zhMessage: string  | undefined) {
        this['zh_message'] = zhMessage;
    }
    public get zhMessage(): string | undefined {
        return this['zh_message'];
    }
    public withStartTime(startTime: string): StageInfoWithSub {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): StageInfoWithSub {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStageOrder(stageOrder: number): StageInfoWithSub {
        this['stage_order'] = stageOrder;
        return this;
    }
    public set stageOrder(stageOrder: number  | undefined) {
        this['stage_order'] = stageOrder;
    }
    public get stageOrder(): number | undefined {
        return this['stage_order'];
    }
    public withSubStages(subStages: Array<SubStage>): StageInfoWithSub {
        this['sub_stages'] = subStages;
        return this;
    }
    public set subStages(subStages: Array<SubStage>  | undefined) {
        this['sub_stages'] = subStages;
    }
    public get subStages(): Array<SubStage> | undefined {
        return this['sub_stages'];
    }
}