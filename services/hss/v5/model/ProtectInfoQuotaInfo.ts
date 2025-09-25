

export class ProtectInfoQuotaInfo {
    private 'expired_quota_num'?: number;
    private 'about_to_expire_quota_num'?: number;
    private 'user_use_enterprise_rate'?: number;
    public constructor() { 
    }
    public withExpiredQuotaNum(expiredQuotaNum: number): ProtectInfoQuotaInfo {
        this['expired_quota_num'] = expiredQuotaNum;
        return this;
    }
    public set expiredQuotaNum(expiredQuotaNum: number  | undefined) {
        this['expired_quota_num'] = expiredQuotaNum;
    }
    public get expiredQuotaNum(): number | undefined {
        return this['expired_quota_num'];
    }
    public withAboutToExpireQuotaNum(aboutToExpireQuotaNum: number): ProtectInfoQuotaInfo {
        this['about_to_expire_quota_num'] = aboutToExpireQuotaNum;
        return this;
    }
    public set aboutToExpireQuotaNum(aboutToExpireQuotaNum: number  | undefined) {
        this['about_to_expire_quota_num'] = aboutToExpireQuotaNum;
    }
    public get aboutToExpireQuotaNum(): number | undefined {
        return this['about_to_expire_quota_num'];
    }
    public withUserUseEnterpriseRate(userUseEnterpriseRate: number): ProtectInfoQuotaInfo {
        this['user_use_enterprise_rate'] = userUseEnterpriseRate;
        return this;
    }
    public set userUseEnterpriseRate(userUseEnterpriseRate: number  | undefined) {
        this['user_use_enterprise_rate'] = userUseEnterpriseRate;
    }
    public get userUseEnterpriseRate(): number | undefined {
        return this['user_use_enterprise_rate'];
    }
}