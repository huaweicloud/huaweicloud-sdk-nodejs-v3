

export class DemandStatisticResponseV4 {
    private 'closed_num'?: number;
    public module?: string;
    private 'new_num'?: number;
    private 'process_num'?: number;
    private 'rejected_num'?: number;
    private 'solved_num'?: number;
    private 'test_num'?: number;
    public total?: number;
    public constructor() { 
    }
    public withClosedNum(closedNum: number): DemandStatisticResponseV4 {
        this['closed_num'] = closedNum;
        return this;
    }
    public set closedNum(closedNum: number  | undefined) {
        this['closed_num'] = closedNum;
    }
    public get closedNum(): number | undefined {
        return this['closed_num'];
    }
    public withModule(module: string): DemandStatisticResponseV4 {
        this['module'] = module;
        return this;
    }
    public withNewNum(newNum: number): DemandStatisticResponseV4 {
        this['new_num'] = newNum;
        return this;
    }
    public set newNum(newNum: number  | undefined) {
        this['new_num'] = newNum;
    }
    public get newNum(): number | undefined {
        return this['new_num'];
    }
    public withProcessNum(processNum: number): DemandStatisticResponseV4 {
        this['process_num'] = processNum;
        return this;
    }
    public set processNum(processNum: number  | undefined) {
        this['process_num'] = processNum;
    }
    public get processNum(): number | undefined {
        return this['process_num'];
    }
    public withRejectedNum(rejectedNum: number): DemandStatisticResponseV4 {
        this['rejected_num'] = rejectedNum;
        return this;
    }
    public set rejectedNum(rejectedNum: number  | undefined) {
        this['rejected_num'] = rejectedNum;
    }
    public get rejectedNum(): number | undefined {
        return this['rejected_num'];
    }
    public withSolvedNum(solvedNum: number): DemandStatisticResponseV4 {
        this['solved_num'] = solvedNum;
        return this;
    }
    public set solvedNum(solvedNum: number  | undefined) {
        this['solved_num'] = solvedNum;
    }
    public get solvedNum(): number | undefined {
        return this['solved_num'];
    }
    public withTestNum(testNum: number): DemandStatisticResponseV4 {
        this['test_num'] = testNum;
        return this;
    }
    public set testNum(testNum: number  | undefined) {
        this['test_num'] = testNum;
    }
    public get testNum(): number | undefined {
        return this['test_num'];
    }
    public withTotal(total: number): DemandStatisticResponseV4 {
        this['total'] = total;
        return this;
    }
}