import { SlowSqlTemplate } from './SlowSqlTemplate';


export class SlowLogTplContrast {
    private 'template_of_pre_day'?: Array<SlowSqlTemplate>;
    private 'template_of_cur_day'?: Array<SlowSqlTemplate>;
    private 'execute_time_increase'?: boolean;
    private 'lock_wait_increase'?: boolean;
    private 'new_template'?: boolean;
    public constructor() { 
    }
    public withTemplateOfPreDay(templateOfPreDay: Array<SlowSqlTemplate>): SlowLogTplContrast {
        this['template_of_pre_day'] = templateOfPreDay;
        return this;
    }
    public set templateOfPreDay(templateOfPreDay: Array<SlowSqlTemplate>  | undefined) {
        this['template_of_pre_day'] = templateOfPreDay;
    }
    public get templateOfPreDay(): Array<SlowSqlTemplate> | undefined {
        return this['template_of_pre_day'];
    }
    public withTemplateOfCurDay(templateOfCurDay: Array<SlowSqlTemplate>): SlowLogTplContrast {
        this['template_of_cur_day'] = templateOfCurDay;
        return this;
    }
    public set templateOfCurDay(templateOfCurDay: Array<SlowSqlTemplate>  | undefined) {
        this['template_of_cur_day'] = templateOfCurDay;
    }
    public get templateOfCurDay(): Array<SlowSqlTemplate> | undefined {
        return this['template_of_cur_day'];
    }
    public withExecuteTimeIncrease(executeTimeIncrease: boolean): SlowLogTplContrast {
        this['execute_time_increase'] = executeTimeIncrease;
        return this;
    }
    public set executeTimeIncrease(executeTimeIncrease: boolean  | undefined) {
        this['execute_time_increase'] = executeTimeIncrease;
    }
    public get executeTimeIncrease(): boolean | undefined {
        return this['execute_time_increase'];
    }
    public withLockWaitIncrease(lockWaitIncrease: boolean): SlowLogTplContrast {
        this['lock_wait_increase'] = lockWaitIncrease;
        return this;
    }
    public set lockWaitIncrease(lockWaitIncrease: boolean  | undefined) {
        this['lock_wait_increase'] = lockWaitIncrease;
    }
    public get lockWaitIncrease(): boolean | undefined {
        return this['lock_wait_increase'];
    }
    public withNewTemplate(newTemplate: boolean): SlowLogTplContrast {
        this['new_template'] = newTemplate;
        return this;
    }
    public set newTemplate(newTemplate: boolean  | undefined) {
        this['new_template'] = newTemplate;
    }
    public get newTemplate(): boolean | undefined {
        return this['new_template'];
    }
}