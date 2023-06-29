

export class CorpBasicInfoDTO {
    public id?: string;
    public name?: string;
    public address?: string;
    public adminName?: string;
    public account?: string;
    public phone?: string;
    public country?: string;
    public email?: string;
    public enableSMS?: boolean;
    public enableCloudDisk?: boolean;
    public enablePstn?: boolean;
    public autoUserCreate?: boolean;
    public corpType?: number;
    public constructor() { 
    }
    public withId(id: string): CorpBasicInfoDTO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CorpBasicInfoDTO {
        this['name'] = name;
        return this;
    }
    public withAddress(address: string): CorpBasicInfoDTO {
        this['address'] = address;
        return this;
    }
    public withAdminName(adminName: string): CorpBasicInfoDTO {
        this['adminName'] = adminName;
        return this;
    }
    public withAccount(account: string): CorpBasicInfoDTO {
        this['account'] = account;
        return this;
    }
    public withPhone(phone: string): CorpBasicInfoDTO {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): CorpBasicInfoDTO {
        this['country'] = country;
        return this;
    }
    public withEmail(email: string): CorpBasicInfoDTO {
        this['email'] = email;
        return this;
    }
    public withEnableSMS(enableSMS: boolean): CorpBasicInfoDTO {
        this['enableSMS'] = enableSMS;
        return this;
    }
    public withEnableCloudDisk(enableCloudDisk: boolean): CorpBasicInfoDTO {
        this['enableCloudDisk'] = enableCloudDisk;
        return this;
    }
    public withEnablePstn(enablePstn: boolean): CorpBasicInfoDTO {
        this['enablePstn'] = enablePstn;
        return this;
    }
    public withAutoUserCreate(autoUserCreate: boolean): CorpBasicInfoDTO {
        this['autoUserCreate'] = autoUserCreate;
        return this;
    }
    public withCorpType(corpType: number): CorpBasicInfoDTO {
        this['corpType'] = corpType;
        return this;
    }
}