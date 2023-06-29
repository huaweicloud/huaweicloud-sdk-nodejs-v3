
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCorpBasicInfoResponse extends SdkResponse {
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
        super();
    }
    public withId(id: string): ShowCorpBasicInfoResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowCorpBasicInfoResponse {
        this['name'] = name;
        return this;
    }
    public withAddress(address: string): ShowCorpBasicInfoResponse {
        this['address'] = address;
        return this;
    }
    public withAdminName(adminName: string): ShowCorpBasicInfoResponse {
        this['adminName'] = adminName;
        return this;
    }
    public withAccount(account: string): ShowCorpBasicInfoResponse {
        this['account'] = account;
        return this;
    }
    public withPhone(phone: string): ShowCorpBasicInfoResponse {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): ShowCorpBasicInfoResponse {
        this['country'] = country;
        return this;
    }
    public withEmail(email: string): ShowCorpBasicInfoResponse {
        this['email'] = email;
        return this;
    }
    public withEnableSMS(enableSMS: boolean): ShowCorpBasicInfoResponse {
        this['enableSMS'] = enableSMS;
        return this;
    }
    public withEnableCloudDisk(enableCloudDisk: boolean): ShowCorpBasicInfoResponse {
        this['enableCloudDisk'] = enableCloudDisk;
        return this;
    }
    public withEnablePstn(enablePstn: boolean): ShowCorpBasicInfoResponse {
        this['enablePstn'] = enablePstn;
        return this;
    }
    public withAutoUserCreate(autoUserCreate: boolean): ShowCorpBasicInfoResponse {
        this['autoUserCreate'] = autoUserCreate;
        return this;
    }
    public withCorpType(corpType: number): ShowCorpBasicInfoResponse {
        this['corpType'] = corpType;
        return this;
    }
}