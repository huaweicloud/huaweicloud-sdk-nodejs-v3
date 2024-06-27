import { ClickHouseEngineInfo } from './ClickHouseEngineInfo';
import { CreateChInstanceRequestBodyHa } from './CreateChInstanceRequestBodyHa';
import { CreateChInstanceRequestBodyPayInfo } from './CreateChInstanceRequestBodyPayInfo';
import { CreateChInstanceRequestBodyTagsInfo } from './CreateChInstanceRequestBodyTagsInfo';
import { CreateChInstanceRequestBodyVolume } from './CreateChInstanceRequestBodyVolume';


export class CreateChInstanceRequestBody {
    public name?: string;
    public engine?: ClickHouseEngineInfo;
    public ha?: CreateChInstanceRequestBodyHa;
    private 'flavor_id'?: string;
    private 'db_root_pwd'?: string;
    private 'az_mode'?: string;
    public volume?: CreateChInstanceRequestBodyVolume;
    private 'az_code'?: string;
    private 'time_zone'?: string;
    private 'tags_info'?: CreateChInstanceRequestBodyTagsInfo;
    private 'pay_info'?: CreateChInstanceRequestBodyPayInfo;
    public constructor(name?: string, engine?: ClickHouseEngineInfo, ha?: CreateChInstanceRequestBodyHa, flavorId?: string, dbRootPwd?: string, azMode?: string, volume?: CreateChInstanceRequestBodyVolume, azCode?: string, tagsInfo?: CreateChInstanceRequestBodyTagsInfo) { 
        this['name'] = name;
        this['engine'] = engine;
        this['ha'] = ha;
        this['flavor_id'] = flavorId;
        this['db_root_pwd'] = dbRootPwd;
        this['az_mode'] = azMode;
        this['volume'] = volume;
        this['az_code'] = azCode;
        this['tags_info'] = tagsInfo;
    }
    public withName(name: string): CreateChInstanceRequestBody {
        this['name'] = name;
        return this;
    }
    public withEngine(engine: ClickHouseEngineInfo): CreateChInstanceRequestBody {
        this['engine'] = engine;
        return this;
    }
    public withHa(ha: CreateChInstanceRequestBodyHa): CreateChInstanceRequestBody {
        this['ha'] = ha;
        return this;
    }
    public withFlavorId(flavorId: string): CreateChInstanceRequestBody {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withDbRootPwd(dbRootPwd: string): CreateChInstanceRequestBody {
        this['db_root_pwd'] = dbRootPwd;
        return this;
    }
    public set dbRootPwd(dbRootPwd: string  | undefined) {
        this['db_root_pwd'] = dbRootPwd;
    }
    public get dbRootPwd(): string | undefined {
        return this['db_root_pwd'];
    }
    public withAzMode(azMode: string): CreateChInstanceRequestBody {
        this['az_mode'] = azMode;
        return this;
    }
    public set azMode(azMode: string  | undefined) {
        this['az_mode'] = azMode;
    }
    public get azMode(): string | undefined {
        return this['az_mode'];
    }
    public withVolume(volume: CreateChInstanceRequestBodyVolume): CreateChInstanceRequestBody {
        this['volume'] = volume;
        return this;
    }
    public withAzCode(azCode: string): CreateChInstanceRequestBody {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withTimeZone(timeZone: string): CreateChInstanceRequestBody {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withTagsInfo(tagsInfo: CreateChInstanceRequestBodyTagsInfo): CreateChInstanceRequestBody {
        this['tags_info'] = tagsInfo;
        return this;
    }
    public set tagsInfo(tagsInfo: CreateChInstanceRequestBodyTagsInfo  | undefined) {
        this['tags_info'] = tagsInfo;
    }
    public get tagsInfo(): CreateChInstanceRequestBodyTagsInfo | undefined {
        return this['tags_info'];
    }
    public withPayInfo(payInfo: CreateChInstanceRequestBodyPayInfo): CreateChInstanceRequestBody {
        this['pay_info'] = payInfo;
        return this;
    }
    public set payInfo(payInfo: CreateChInstanceRequestBodyPayInfo  | undefined) {
        this['pay_info'] = payInfo;
    }
    public get payInfo(): CreateChInstanceRequestBodyPayInfo | undefined {
        return this['pay_info'];
    }
}