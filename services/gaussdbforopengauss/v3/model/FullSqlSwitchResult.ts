import { LtsConfigInfoResult } from './LtsConfigInfoResult';
import { SqlTypeInfoResult } from './SqlTypeInfoResult';


export class FullSqlSwitchResult {
    private 'is_open'?: boolean;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'save_days'?: number;
    private 'storage_mode'?: string;
    private 'lts_config'?: LtsConfigInfoResult;
    private 'sql_type_range'?: Array<SqlTypeInfoResult>;
    private 'is_exclude_sys_user'?: boolean;
    public constructor() { 
    }
    public withIsOpen(isOpen: boolean): FullSqlSwitchResult {
        this['is_open'] = isOpen;
        return this;
    }
    public set isOpen(isOpen: boolean  | undefined) {
        this['is_open'] = isOpen;
    }
    public get isOpen(): boolean | undefined {
        return this['is_open'];
    }
    public withBeginTime(beginTime: string): FullSqlSwitchResult {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): FullSqlSwitchResult {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withSaveDays(saveDays: number): FullSqlSwitchResult {
        this['save_days'] = saveDays;
        return this;
    }
    public set saveDays(saveDays: number  | undefined) {
        this['save_days'] = saveDays;
    }
    public get saveDays(): number | undefined {
        return this['save_days'];
    }
    public withStorageMode(storageMode: string): FullSqlSwitchResult {
        this['storage_mode'] = storageMode;
        return this;
    }
    public set storageMode(storageMode: string  | undefined) {
        this['storage_mode'] = storageMode;
    }
    public get storageMode(): string | undefined {
        return this['storage_mode'];
    }
    public withLtsConfig(ltsConfig: LtsConfigInfoResult): FullSqlSwitchResult {
        this['lts_config'] = ltsConfig;
        return this;
    }
    public set ltsConfig(ltsConfig: LtsConfigInfoResult  | undefined) {
        this['lts_config'] = ltsConfig;
    }
    public get ltsConfig(): LtsConfigInfoResult | undefined {
        return this['lts_config'];
    }
    public withSqlTypeRange(sqlTypeRange: Array<SqlTypeInfoResult>): FullSqlSwitchResult {
        this['sql_type_range'] = sqlTypeRange;
        return this;
    }
    public set sqlTypeRange(sqlTypeRange: Array<SqlTypeInfoResult>  | undefined) {
        this['sql_type_range'] = sqlTypeRange;
    }
    public get sqlTypeRange(): Array<SqlTypeInfoResult> | undefined {
        return this['sql_type_range'];
    }
    public withIsExcludeSysUser(isExcludeSysUser: boolean): FullSqlSwitchResult {
        this['is_exclude_sys_user'] = isExcludeSysUser;
        return this;
    }
    public set isExcludeSysUser(isExcludeSysUser: boolean  | undefined) {
        this['is_exclude_sys_user'] = isExcludeSysUser;
    }
    public get isExcludeSysUser(): boolean | undefined {
        return this['is_exclude_sys_user'];
    }
}