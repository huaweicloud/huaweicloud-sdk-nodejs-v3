import { StageInfoWithSub } from './StageInfoWithSub';


export class StageRecord {
    private 'record_order'?: number;
    public stages?: Array<StageInfoWithSub>;
    public constructor() { 
    }
    public withRecordOrder(recordOrder: number): StageRecord {
        this['record_order'] = recordOrder;
        return this;
    }
    public set recordOrder(recordOrder: number  | undefined) {
        this['record_order'] = recordOrder;
    }
    public get recordOrder(): number | undefined {
        return this['record_order'];
    }
    public withStages(stages: Array<StageInfoWithSub>): StageRecord {
        this['stages'] = stages;
        return this;
    }
}