import { StarRocksCreateRequestBeVolume } from './StarRocksCreateRequestBeVolume';
import { StarRocksCreateRequestEngine } from './StarRocksCreateRequestEngine';
import { StarRocksCreateRequestFeVolume } from './StarRocksCreateRequestFeVolume';
import { StarRocksCreateRequestHa } from './StarRocksCreateRequestHa';
import { StarRocksCreateRequestTagsInfo } from './StarRocksCreateRequestTagsInfo';


export class StarRocksCreateRequest {
    public name?: string;
    public engine?: StarRocksCreateRequestEngine;
    public ha?: StarRocksCreateRequestHa;
    private 'fe_flavor_id'?: string;
    private 'be_flavor_id'?: string;
    private 'db_root_pwd'?: string;
    private 'fe_count'?: number;
    private 'be_count'?: number;
    private 'az_mode'?: StarRocksCreateRequestAzModeEnum | string;
    private 'fe_volume'?: StarRocksCreateRequestFeVolume;
    private 'be_volume'?: StarRocksCreateRequestBeVolume;
    private 'az_code'?: string;
    private 'time_zone'?: string;
    private 'tags_info'?: StarRocksCreateRequestTagsInfo;
    private 'security_group_id'?: string;
    public constructor(name?: string, engine?: StarRocksCreateRequestEngine, ha?: StarRocksCreateRequestHa, feFlavorId?: string, beFlavorId?: string, dbRootPwd?: string, feCount?: number, beCount?: number, azMode?: string, feVolume?: StarRocksCreateRequestFeVolume, beVolume?: StarRocksCreateRequestBeVolume, azCode?: string, tagsInfo?: StarRocksCreateRequestTagsInfo) { 
        this['name'] = name;
        this['engine'] = engine;
        this['ha'] = ha;
        this['fe_flavor_id'] = feFlavorId;
        this['be_flavor_id'] = beFlavorId;
        this['db_root_pwd'] = dbRootPwd;
        this['fe_count'] = feCount;
        this['be_count'] = beCount;
        this['az_mode'] = azMode;
        this['fe_volume'] = feVolume;
        this['be_volume'] = beVolume;
        this['az_code'] = azCode;
        this['tags_info'] = tagsInfo;
    }
    public withName(name: string): StarRocksCreateRequest {
        this['name'] = name;
        return this;
    }
    public withEngine(engine: StarRocksCreateRequestEngine): StarRocksCreateRequest {
        this['engine'] = engine;
        return this;
    }
    public withHa(ha: StarRocksCreateRequestHa): StarRocksCreateRequest {
        this['ha'] = ha;
        return this;
    }
    public withFeFlavorId(feFlavorId: string): StarRocksCreateRequest {
        this['fe_flavor_id'] = feFlavorId;
        return this;
    }
    public set feFlavorId(feFlavorId: string  | undefined) {
        this['fe_flavor_id'] = feFlavorId;
    }
    public get feFlavorId(): string | undefined {
        return this['fe_flavor_id'];
    }
    public withBeFlavorId(beFlavorId: string): StarRocksCreateRequest {
        this['be_flavor_id'] = beFlavorId;
        return this;
    }
    public set beFlavorId(beFlavorId: string  | undefined) {
        this['be_flavor_id'] = beFlavorId;
    }
    public get beFlavorId(): string | undefined {
        return this['be_flavor_id'];
    }
    public withDbRootPwd(dbRootPwd: string): StarRocksCreateRequest {
        this['db_root_pwd'] = dbRootPwd;
        return this;
    }
    public set dbRootPwd(dbRootPwd: string  | undefined) {
        this['db_root_pwd'] = dbRootPwd;
    }
    public get dbRootPwd(): string | undefined {
        return this['db_root_pwd'];
    }
    public withFeCount(feCount: number): StarRocksCreateRequest {
        this['fe_count'] = feCount;
        return this;
    }
    public set feCount(feCount: number  | undefined) {
        this['fe_count'] = feCount;
    }
    public get feCount(): number | undefined {
        return this['fe_count'];
    }
    public withBeCount(beCount: number): StarRocksCreateRequest {
        this['be_count'] = beCount;
        return this;
    }
    public set beCount(beCount: number  | undefined) {
        this['be_count'] = beCount;
    }
    public get beCount(): number | undefined {
        return this['be_count'];
    }
    public withAzMode(azMode: StarRocksCreateRequestAzModeEnum | string): StarRocksCreateRequest {
        this['az_mode'] = azMode;
        return this;
    }
    public set azMode(azMode: StarRocksCreateRequestAzModeEnum | string  | undefined) {
        this['az_mode'] = azMode;
    }
    public get azMode(): StarRocksCreateRequestAzModeEnum | string | undefined {
        return this['az_mode'];
    }
    public withFeVolume(feVolume: StarRocksCreateRequestFeVolume): StarRocksCreateRequest {
        this['fe_volume'] = feVolume;
        return this;
    }
    public set feVolume(feVolume: StarRocksCreateRequestFeVolume  | undefined) {
        this['fe_volume'] = feVolume;
    }
    public get feVolume(): StarRocksCreateRequestFeVolume | undefined {
        return this['fe_volume'];
    }
    public withBeVolume(beVolume: StarRocksCreateRequestBeVolume): StarRocksCreateRequest {
        this['be_volume'] = beVolume;
        return this;
    }
    public set beVolume(beVolume: StarRocksCreateRequestBeVolume  | undefined) {
        this['be_volume'] = beVolume;
    }
    public get beVolume(): StarRocksCreateRequestBeVolume | undefined {
        return this['be_volume'];
    }
    public withAzCode(azCode: string): StarRocksCreateRequest {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withTimeZone(timeZone: string): StarRocksCreateRequest {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withTagsInfo(tagsInfo: StarRocksCreateRequestTagsInfo): StarRocksCreateRequest {
        this['tags_info'] = tagsInfo;
        return this;
    }
    public set tagsInfo(tagsInfo: StarRocksCreateRequestTagsInfo  | undefined) {
        this['tags_info'] = tagsInfo;
    }
    public get tagsInfo(): StarRocksCreateRequestTagsInfo | undefined {
        return this['tags_info'];
    }
    public withSecurityGroupId(securityGroupId: string): StarRocksCreateRequest {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StarRocksCreateRequestAzModeEnum {
    SINGLE = 'single'
}
