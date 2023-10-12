import { PostgresqlHbaConf } from './PostgresqlHbaConf';


export class PostgresqlHbaHistory {
    public status?: string;
    public time?: Date;
    private 'fail_reason'?: string;
    private 'before_confs'?: Array<PostgresqlHbaConf>;
    private 'after_confs'?: Array<PostgresqlHbaConf>;
    public constructor() { 
    }
    public withStatus(status: string): PostgresqlHbaHistory {
        this['status'] = status;
        return this;
    }
    public withTime(time: Date): PostgresqlHbaHistory {
        this['time'] = time;
        return this;
    }
    public withFailReason(failReason: string): PostgresqlHbaHistory {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withBeforeConfs(beforeConfs: Array<PostgresqlHbaConf>): PostgresqlHbaHistory {
        this['before_confs'] = beforeConfs;
        return this;
    }
    public set beforeConfs(beforeConfs: Array<PostgresqlHbaConf>  | undefined) {
        this['before_confs'] = beforeConfs;
    }
    public get beforeConfs(): Array<PostgresqlHbaConf> | undefined {
        return this['before_confs'];
    }
    public withAfterConfs(afterConfs: Array<PostgresqlHbaConf>): PostgresqlHbaHistory {
        this['after_confs'] = afterConfs;
        return this;
    }
    public set afterConfs(afterConfs: Array<PostgresqlHbaConf>  | undefined) {
        this['after_confs'] = afterConfs;
    }
    public get afterConfs(): Array<PostgresqlHbaConf> | undefined {
        return this['after_confs'];
    }
}