import { ProtectInfoConfigInfo } from './ProtectInfoConfigInfo';
import { ProtectInfoCoverAreaInfo } from './ProtectInfoCoverAreaInfo';
import { ProtectInfoQuotaInfo } from './ProtectInfoQuotaInfo';


export class ProtectInfo {
    private 'cover_area_info'?: ProtectInfoCoverAreaInfo;
    private 'config_info'?: ProtectInfoConfigInfo;
    private 'quota_info'?: ProtectInfoQuotaInfo;
    public constructor() { 
    }
    public withCoverAreaInfo(coverAreaInfo: ProtectInfoCoverAreaInfo): ProtectInfo {
        this['cover_area_info'] = coverAreaInfo;
        return this;
    }
    public set coverAreaInfo(coverAreaInfo: ProtectInfoCoverAreaInfo  | undefined) {
        this['cover_area_info'] = coverAreaInfo;
    }
    public get coverAreaInfo(): ProtectInfoCoverAreaInfo | undefined {
        return this['cover_area_info'];
    }
    public withConfigInfo(configInfo: ProtectInfoConfigInfo): ProtectInfo {
        this['config_info'] = configInfo;
        return this;
    }
    public set configInfo(configInfo: ProtectInfoConfigInfo  | undefined) {
        this['config_info'] = configInfo;
    }
    public get configInfo(): ProtectInfoConfigInfo | undefined {
        return this['config_info'];
    }
    public withQuotaInfo(quotaInfo: ProtectInfoQuotaInfo): ProtectInfo {
        this['quota_info'] = quotaInfo;
        return this;
    }
    public set quotaInfo(quotaInfo: ProtectInfoQuotaInfo  | undefined) {
        this['quota_info'] = quotaInfo;
    }
    public get quotaInfo(): ProtectInfoQuotaInfo | undefined {
        return this['quota_info'];
    }
}