import { StructDetailVO } from './StructDetailVO';


export class QueryFlowCompareDataResp {
    private 'total_record'?: number;
    private 'create_time'?: string;
    public list?: Array<StructDetailVO>;
    public constructor() { 
    }
    public withTotalRecord(totalRecord: number): QueryFlowCompareDataResp {
        this['total_record'] = totalRecord;
        return this;
    }
    public set totalRecord(totalRecord: number  | undefined) {
        this['total_record'] = totalRecord;
    }
    public get totalRecord(): number | undefined {
        return this['total_record'];
    }
    public withCreateTime(createTime: string): QueryFlowCompareDataResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withList(list: Array<StructDetailVO>): QueryFlowCompareDataResp {
        this['list'] = list;
        return this;
    }
}