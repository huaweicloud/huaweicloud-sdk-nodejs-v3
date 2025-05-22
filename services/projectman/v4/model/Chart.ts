

export class Chart {
    public date?: string;
    private 'finished_num'?: number;
    private 'iteration_id'?: number;
    private 'project_num_id'?: number;
    private 'remaining_num'?: number;
    public total?: number;
    public constructor() { 
    }
    public withDate(date: string): Chart {
        this['date'] = date;
        return this;
    }
    public withFinishedNum(finishedNum: number): Chart {
        this['finished_num'] = finishedNum;
        return this;
    }
    public set finishedNum(finishedNum: number  | undefined) {
        this['finished_num'] = finishedNum;
    }
    public get finishedNum(): number | undefined {
        return this['finished_num'];
    }
    public withIterationId(iterationId: number): Chart {
        this['iteration_id'] = iterationId;
        return this;
    }
    public set iterationId(iterationId: number  | undefined) {
        this['iteration_id'] = iterationId;
    }
    public get iterationId(): number | undefined {
        return this['iteration_id'];
    }
    public withProjectNumId(projectNumId: number): Chart {
        this['project_num_id'] = projectNumId;
        return this;
    }
    public set projectNumId(projectNumId: number  | undefined) {
        this['project_num_id'] = projectNumId;
    }
    public get projectNumId(): number | undefined {
        return this['project_num_id'];
    }
    public withRemainingNum(remainingNum: number): Chart {
        this['remaining_num'] = remainingNum;
        return this;
    }
    public set remainingNum(remainingNum: number  | undefined) {
        this['remaining_num'] = remainingNum;
    }
    public get remainingNum(): number | undefined {
        return this['remaining_num'];
    }
    public withTotal(total: number): Chart {
        this['total'] = total;
        return this;
    }
}