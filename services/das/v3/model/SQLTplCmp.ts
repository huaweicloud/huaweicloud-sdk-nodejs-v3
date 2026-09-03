import { TplCmp } from './TplCmp';


export class SQLTplCmp {
    private 'sql_tpl_dto1'?: TplCmp;
    private 'sql_tpl_dto2'?: TplCmp;
    private 'new'?: boolean;
    private 'execute_time_increase'?: boolean;
    private 'lock_wait_increase'?: boolean;
    public constructor() { 
    }
    public withSqlTplDto1(sqlTplDto1: TplCmp): SQLTplCmp {
        this['sql_tpl_dto1'] = sqlTplDto1;
        return this;
    }
    public set sqlTplDto1(sqlTplDto1: TplCmp  | undefined) {
        this['sql_tpl_dto1'] = sqlTplDto1;
    }
    public get sqlTplDto1(): TplCmp | undefined {
        return this['sql_tpl_dto1'];
    }
    public withSqlTplDto2(sqlTplDto2: TplCmp): SQLTplCmp {
        this['sql_tpl_dto2'] = sqlTplDto2;
        return this;
    }
    public set sqlTplDto2(sqlTplDto2: TplCmp  | undefined) {
        this['sql_tpl_dto2'] = sqlTplDto2;
    }
    public get sqlTplDto2(): TplCmp | undefined {
        return this['sql_tpl_dto2'];
    }
    public withNew(_new: boolean): SQLTplCmp {
        this['new'] = _new;
        return this;
    }
    public set _new(_new: boolean  | undefined) {
        this['new'] = _new;
    }
    public get _new(): boolean | undefined {
        return this['new'];
    }
    public withExecuteTimeIncrease(executeTimeIncrease: boolean): SQLTplCmp {
        this['execute_time_increase'] = executeTimeIncrease;
        return this;
    }
    public set executeTimeIncrease(executeTimeIncrease: boolean  | undefined) {
        this['execute_time_increase'] = executeTimeIncrease;
    }
    public get executeTimeIncrease(): boolean | undefined {
        return this['execute_time_increase'];
    }
    public withLockWaitIncrease(lockWaitIncrease: boolean): SQLTplCmp {
        this['lock_wait_increase'] = lockWaitIncrease;
        return this;
    }
    public set lockWaitIncrease(lockWaitIncrease: boolean  | undefined) {
        this['lock_wait_increase'] = lockWaitIncrease;
    }
    public get lockWaitIncrease(): boolean | undefined {
        return this['lock_wait_increase'];
    }
}