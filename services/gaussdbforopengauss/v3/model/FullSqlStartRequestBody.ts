import { LtsInfoOption } from './LtsInfoOption';
import { SqlTypeConfigOption } from './SqlTypeConfigOption';


export class FullSqlStartRequestBody {
    private 'save_days'?: number;
    private 'storage_mode'?: FullSqlStartRequestBodyStorageModeEnum | string;
    private 'is_exclude_sys_user'?: boolean;
    private 'lts_config'?: LtsInfoOption;
    private 'sql_type_range'?: Array<SqlTypeConfigOption>;
    public constructor(saveDays?: number, storageMode?: string, ltsConfig?: LtsInfoOption) { 
        this['save_days'] = saveDays;
        this['storage_mode'] = storageMode;
        this['lts_config'] = ltsConfig;
    }
    public withSaveDays(saveDays: number): FullSqlStartRequestBody {
        this['save_days'] = saveDays;
        return this;
    }
    public set saveDays(saveDays: number  | undefined) {
        this['save_days'] = saveDays;
    }
    public get saveDays(): number | undefined {
        return this['save_days'];
    }
    public withStorageMode(storageMode: FullSqlStartRequestBodyStorageModeEnum | string): FullSqlStartRequestBody {
        this['storage_mode'] = storageMode;
        return this;
    }
    public set storageMode(storageMode: FullSqlStartRequestBodyStorageModeEnum | string  | undefined) {
        this['storage_mode'] = storageMode;
    }
    public get storageMode(): FullSqlStartRequestBodyStorageModeEnum | string | undefined {
        return this['storage_mode'];
    }
    public withIsExcludeSysUser(isExcludeSysUser: boolean): FullSqlStartRequestBody {
        this['is_exclude_sys_user'] = isExcludeSysUser;
        return this;
    }
    public set isExcludeSysUser(isExcludeSysUser: boolean  | undefined) {
        this['is_exclude_sys_user'] = isExcludeSysUser;
    }
    public get isExcludeSysUser(): boolean | undefined {
        return this['is_exclude_sys_user'];
    }
    public withLtsConfig(ltsConfig: LtsInfoOption): FullSqlStartRequestBody {
        this['lts_config'] = ltsConfig;
        return this;
    }
    public set ltsConfig(ltsConfig: LtsInfoOption  | undefined) {
        this['lts_config'] = ltsConfig;
    }
    public get ltsConfig(): LtsInfoOption | undefined {
        return this['lts_config'];
    }
    public withSqlTypeRange(sqlTypeRange: Array<SqlTypeConfigOption>): FullSqlStartRequestBody {
        this['sql_type_range'] = sqlTypeRange;
        return this;
    }
    public set sqlTypeRange(sqlTypeRange: Array<SqlTypeConfigOption>  | undefined) {
        this['sql_type_range'] = sqlTypeRange;
    }
    public get sqlTypeRange(): Array<SqlTypeConfigOption> | undefined {
        return this['sql_type_range'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FullSqlStartRequestBodyStorageModeEnum {
    LTS = 'LTS'
}
