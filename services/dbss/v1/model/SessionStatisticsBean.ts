

export class SessionStatisticsBean {
    private 'active_session_num'?: number;
    private 'fail_session_num'?: number;
    private 'new_session_num'?: number;
    public period?: string;
    public constructor() { 
    }
    public withActiveSessionNum(activeSessionNum: number): SessionStatisticsBean {
        this['active_session_num'] = activeSessionNum;
        return this;
    }
    public set activeSessionNum(activeSessionNum: number  | undefined) {
        this['active_session_num'] = activeSessionNum;
    }
    public get activeSessionNum(): number | undefined {
        return this['active_session_num'];
    }
    public withFailSessionNum(failSessionNum: number): SessionStatisticsBean {
        this['fail_session_num'] = failSessionNum;
        return this;
    }
    public set failSessionNum(failSessionNum: number  | undefined) {
        this['fail_session_num'] = failSessionNum;
    }
    public get failSessionNum(): number | undefined {
        return this['fail_session_num'];
    }
    public withNewSessionNum(newSessionNum: number): SessionStatisticsBean {
        this['new_session_num'] = newSessionNum;
        return this;
    }
    public set newSessionNum(newSessionNum: number  | undefined) {
        this['new_session_num'] = newSessionNum;
    }
    public get newSessionNum(): number | undefined {
        return this['new_session_num'];
    }
    public withPeriod(period: string): SessionStatisticsBean {
        this['period'] = period;
        return this;
    }
}