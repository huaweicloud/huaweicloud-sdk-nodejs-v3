import { HbaseModifySettingV2 } from './HbaseModifySettingV2';


export class HbaseModifySettingV2Req {
    private 'is_reboot'?: string;
    private 'hbase_modify_settings'?: Array<HbaseModifySettingV2>;
    public constructor(isReboot?: string, hbaseModifySettings?: Array<HbaseModifySettingV2>) { 
        this['is_reboot'] = isReboot;
        this['hbase_modify_settings'] = hbaseModifySettings;
    }
    public withIsReboot(isReboot: string): HbaseModifySettingV2Req {
        this['is_reboot'] = isReboot;
        return this;
    }
    public set isReboot(isReboot: string  | undefined) {
        this['is_reboot'] = isReboot;
    }
    public get isReboot(): string | undefined {
        return this['is_reboot'];
    }
    public withHbaseModifySettings(hbaseModifySettings: Array<HbaseModifySettingV2>): HbaseModifySettingV2Req {
        this['hbase_modify_settings'] = hbaseModifySettings;
        return this;
    }
    public set hbaseModifySettings(hbaseModifySettings: Array<HbaseModifySettingV2>  | undefined) {
        this['hbase_modify_settings'] = hbaseModifySettings;
    }
    public get hbaseModifySettings(): Array<HbaseModifySettingV2> | undefined {
        return this['hbase_modify_settings'];
    }
}