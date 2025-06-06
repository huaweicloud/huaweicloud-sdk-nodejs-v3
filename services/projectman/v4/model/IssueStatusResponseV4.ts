

export class IssueStatusResponseV4 {
    private 'closed_num'?: number;
    private 'new_num'?: number;
    private 'process_num'?: number;
    private 'rejected_num'?: number;
    private 'solved_num'?: number;
    private 'test_num'?: number;
    public constructor() { 
    }
    public withClosedNum(closedNum: number): IssueStatusResponseV4 {
        this['closed_num'] = closedNum;
        return this;
    }
    public set closedNum(closedNum: number  | undefined) {
        this['closed_num'] = closedNum;
    }
    public get closedNum(): number | undefined {
        return this['closed_num'];
    }
    public withNewNum(newNum: number): IssueStatusResponseV4 {
        this['new_num'] = newNum;
        return this;
    }
    public set newNum(newNum: number  | undefined) {
        this['new_num'] = newNum;
    }
    public get newNum(): number | undefined {
        return this['new_num'];
    }
    public withProcessNum(processNum: number): IssueStatusResponseV4 {
        this['process_num'] = processNum;
        return this;
    }
    public set processNum(processNum: number  | undefined) {
        this['process_num'] = processNum;
    }
    public get processNum(): number | undefined {
        return this['process_num'];
    }
    public withRejectedNum(rejectedNum: number): IssueStatusResponseV4 {
        this['rejected_num'] = rejectedNum;
        return this;
    }
    public set rejectedNum(rejectedNum: number  | undefined) {
        this['rejected_num'] = rejectedNum;
    }
    public get rejectedNum(): number | undefined {
        return this['rejected_num'];
    }
    public withSolvedNum(solvedNum: number): IssueStatusResponseV4 {
        this['solved_num'] = solvedNum;
        return this;
    }
    public set solvedNum(solvedNum: number  | undefined) {
        this['solved_num'] = solvedNum;
    }
    public get solvedNum(): number | undefined {
        return this['solved_num'];
    }
    public withTestNum(testNum: number): IssueStatusResponseV4 {
        this['test_num'] = testNum;
        return this;
    }
    public set testNum(testNum: number  | undefined) {
        this['test_num'] = testNum;
    }
    public get testNum(): number | undefined {
        return this['test_num'];
    }
}