

export class CreateObjectCompareJobReq {
    private 'compare_task_num'?: number;
    public constructor() { 
    }
    public withCompareTaskNum(compareTaskNum: number): CreateObjectCompareJobReq {
        this['compare_task_num'] = compareTaskNum;
        return this;
    }
    public set compareTaskNum(compareTaskNum: number  | undefined) {
        this['compare_task_num'] = compareTaskNum;
    }
    public get compareTaskNum(): number | undefined {
        return this['compare_task_num'];
    }
}