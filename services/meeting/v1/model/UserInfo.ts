

export class UserInfo {
    public userId?: string;
    public ucloginAccount?: string;
    public serviceAccount?: string;
    public numberHA1?: string;
    public alias1?: string;
    public companyId?: string;
    public spId?: string;
    public companyDomain?: string;
    public realm?: string;
    public userType?: number;
    public adminType?: number;
    public name?: string;
    public nameEn?: string;
    public isBindPhone?: boolean;
    public freeUser?: boolean;
    public thirdAccount?: string;
    public visionAccount?: string;
    public headPictureUrl?: string;
    public password?: string;
    public status?: number;
    public paidAccount?: string;
    public paidPassword?: string;
    public weLinkUser?: boolean;
    public appId?: string;
    public tr069Account?: string;
    public corpType?: number;
    public cloudUserId?: string;
    public grayUser?: boolean;
    public constructor(ucloginAccount?: string) { 
        this['ucloginAccount'] = ucloginAccount;
    }
    public withUserId(userId: string): UserInfo {
        this['userId'] = userId;
        return this;
    }
    public withUcloginAccount(ucloginAccount: string): UserInfo {
        this['ucloginAccount'] = ucloginAccount;
        return this;
    }
    public withServiceAccount(serviceAccount: string): UserInfo {
        this['serviceAccount'] = serviceAccount;
        return this;
    }
    public withNumberHA1(numberHA1: string): UserInfo {
        this['numberHA1'] = numberHA1;
        return this;
    }
    public withAlias1(alias1: string): UserInfo {
        this['alias1'] = alias1;
        return this;
    }
    public withCompanyId(companyId: string): UserInfo {
        this['companyId'] = companyId;
        return this;
    }
    public withSpId(spId: string): UserInfo {
        this['spId'] = spId;
        return this;
    }
    public withCompanyDomain(companyDomain: string): UserInfo {
        this['companyDomain'] = companyDomain;
        return this;
    }
    public withRealm(realm: string): UserInfo {
        this['realm'] = realm;
        return this;
    }
    public withUserType(userType: number): UserInfo {
        this['userType'] = userType;
        return this;
    }
    public withAdminType(adminType: number): UserInfo {
        this['adminType'] = adminType;
        return this;
    }
    public withName(name: string): UserInfo {
        this['name'] = name;
        return this;
    }
    public withNameEn(nameEn: string): UserInfo {
        this['nameEn'] = nameEn;
        return this;
    }
    public withIsBindPhone(isBindPhone: boolean): UserInfo {
        this['isBindPhone'] = isBindPhone;
        return this;
    }
    public withFreeUser(freeUser: boolean): UserInfo {
        this['freeUser'] = freeUser;
        return this;
    }
    public withThirdAccount(thirdAccount: string): UserInfo {
        this['thirdAccount'] = thirdAccount;
        return this;
    }
    public withVisionAccount(visionAccount: string): UserInfo {
        this['visionAccount'] = visionAccount;
        return this;
    }
    public withHeadPictureUrl(headPictureUrl: string): UserInfo {
        this['headPictureUrl'] = headPictureUrl;
        return this;
    }
    public withPassword(password: string): UserInfo {
        this['password'] = password;
        return this;
    }
    public withStatus(status: number): UserInfo {
        this['status'] = status;
        return this;
    }
    public withPaidAccount(paidAccount: string): UserInfo {
        this['paidAccount'] = paidAccount;
        return this;
    }
    public withPaidPassword(paidPassword: string): UserInfo {
        this['paidPassword'] = paidPassword;
        return this;
    }
    public withWeLinkUser(weLinkUser: boolean): UserInfo {
        this['weLinkUser'] = weLinkUser;
        return this;
    }
    public withAppId(appId: string): UserInfo {
        this['appId'] = appId;
        return this;
    }
    public withTr069Account(tr069Account: string): UserInfo {
        this['tr069Account'] = tr069Account;
        return this;
    }
    public withCorpType(corpType: number): UserInfo {
        this['corpType'] = corpType;
        return this;
    }
    public withCloudUserId(cloudUserId: string): UserInfo {
        this['cloudUserId'] = cloudUserId;
        return this;
    }
    public withGrayUser(grayUser: boolean): UserInfo {
        this['grayUser'] = grayUser;
        return this;
    }
}