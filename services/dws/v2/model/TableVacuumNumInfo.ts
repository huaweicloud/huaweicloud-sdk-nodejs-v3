

export class TableVacuumNumInfo {
    private 'waiting_num'?: number;
    private 'running_num'?: number;
    private 'finished_num'?: number;
    private 'canceled_num'?: number;
    private 'total_num'?: number;
    public constructor() { 
    }
    public withWaitingNum(waitingNum: number): TableVacuumNumInfo {
        this['waiting_num'] = waitingNum;
        return this;
    }
    public set waitingNum(waitingNum: number  | undefined) {
        this['waiting_num'] = waitingNum;
    }
    public get waitingNum(): number | undefined {
        return this['waiting_num'];
    }
    public withRunningNum(runningNum: number): TableVacuumNumInfo {
        this['running_num'] = runningNum;
        return this;
    }
    public set runningNum(runningNum: number  | undefined) {
        this['running_num'] = runningNum;
    }
    public get runningNum(): number | undefined {
        return this['running_num'];
    }
    public withFinishedNum(finishedNum: number): TableVacuumNumInfo {
        this['finished_num'] = finishedNum;
        return this;
    }
    public set finishedNum(finishedNum: number  | undefined) {
        this['finished_num'] = finishedNum;
    }
    public get finishedNum(): number | undefined {
        return this['finished_num'];
    }
    public withCanceledNum(canceledNum: number): TableVacuumNumInfo {
        this['canceled_num'] = canceledNum;
        return this;
    }
    public set canceledNum(canceledNum: number  | undefined) {
        this['canceled_num'] = canceledNum;
    }
    public get canceledNum(): number | undefined {
        return this['canceled_num'];
    }
    public withTotalNum(totalNum: number): TableVacuumNumInfo {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
}