import { HbaConfResult } from './HbaConfResult';


export class HbaHistoryResult {
    public id?: string;
    public status?: string;
    public time?: Date;
    private 'fail_reason'?: string;
    private 'before_confs'?: Array<HbaConfResult>;
    private 'after_confs'?: Array<HbaConfResult>;
    public constructor() { 
    }
    public withId(id: string): HbaHistoryResult {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): HbaHistoryResult {
        this['status'] = status;
        return this;
    }
    public withTime(time: Date): HbaHistoryResult {
        this['time'] = time;
        return this;
    }
    public withFailReason(failReason: string): HbaHistoryResult {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withBeforeConfs(beforeConfs: Array<HbaConfResult>): HbaHistoryResult {
        this['before_confs'] = beforeConfs;
        return this;
    }
    public set beforeConfs(beforeConfs: Array<HbaConfResult>  | undefined) {
        this['before_confs'] = beforeConfs;
    }
    public get beforeConfs(): Array<HbaConfResult> | undefined {
        return this['before_confs'];
    }
    public withAfterConfs(afterConfs: Array<HbaConfResult>): HbaHistoryResult {
        this['after_confs'] = afterConfs;
        return this;
    }
    public set afterConfs(afterConfs: Array<HbaConfResult>  | undefined) {
        this['after_confs'] = afterConfs;
    }
    public get afterConfs(): Array<HbaConfResult> | undefined {
        return this['after_confs'];
    }
}