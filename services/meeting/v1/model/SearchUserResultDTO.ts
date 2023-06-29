

export class SearchUserResultDTO {
    public id?: string;
    public userAccount?: string;
    public name?: string;
    public englishName?: string;
    public phone?: string;
    public country?: string;
    public email?: string;
    public vmrId?: string;
    public deptCode?: string;
    public deptNamePath?: string;
    public userType?: number;
    public adminType?: number;
    public signature?: string;
    public title?: string;
    public desc?: string;
    public status?: number;
    public sortLevel?: number;
    public hidePhone?: boolean;
    public thirdAccount?: string;
    public visionAccount?: string;
    public license?: number;
    public activeTime?: number;
    public activeCodeExpireTime?: number;
    public expireTime?: number;
    public activeCode?: string;
    public constructor() { 
    }
    public withId(id: string): SearchUserResultDTO {
        this['id'] = id;
        return this;
    }
    public withUserAccount(userAccount: string): SearchUserResultDTO {
        this['userAccount'] = userAccount;
        return this;
    }
    public withName(name: string): SearchUserResultDTO {
        this['name'] = name;
        return this;
    }
    public withEnglishName(englishName: string): SearchUserResultDTO {
        this['englishName'] = englishName;
        return this;
    }
    public withPhone(phone: string): SearchUserResultDTO {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): SearchUserResultDTO {
        this['country'] = country;
        return this;
    }
    public withEmail(email: string): SearchUserResultDTO {
        this['email'] = email;
        return this;
    }
    public withVmrId(vmrId: string): SearchUserResultDTO {
        this['vmrId'] = vmrId;
        return this;
    }
    public withDeptCode(deptCode: string): SearchUserResultDTO {
        this['deptCode'] = deptCode;
        return this;
    }
    public withDeptNamePath(deptNamePath: string): SearchUserResultDTO {
        this['deptNamePath'] = deptNamePath;
        return this;
    }
    public withUserType(userType: number): SearchUserResultDTO {
        this['userType'] = userType;
        return this;
    }
    public withAdminType(adminType: number): SearchUserResultDTO {
        this['adminType'] = adminType;
        return this;
    }
    public withSignature(signature: string): SearchUserResultDTO {
        this['signature'] = signature;
        return this;
    }
    public withTitle(title: string): SearchUserResultDTO {
        this['title'] = title;
        return this;
    }
    public withDesc(desc: string): SearchUserResultDTO {
        this['desc'] = desc;
        return this;
    }
    public withStatus(status: number): SearchUserResultDTO {
        this['status'] = status;
        return this;
    }
    public withSortLevel(sortLevel: number): SearchUserResultDTO {
        this['sortLevel'] = sortLevel;
        return this;
    }
    public withHidePhone(hidePhone: boolean): SearchUserResultDTO {
        this['hidePhone'] = hidePhone;
        return this;
    }
    public withThirdAccount(thirdAccount: string): SearchUserResultDTO {
        this['thirdAccount'] = thirdAccount;
        return this;
    }
    public withVisionAccount(visionAccount: string): SearchUserResultDTO {
        this['visionAccount'] = visionAccount;
        return this;
    }
    public withLicense(license: number): SearchUserResultDTO {
        this['license'] = license;
        return this;
    }
    public withActiveTime(activeTime: number): SearchUserResultDTO {
        this['activeTime'] = activeTime;
        return this;
    }
    public withActiveCodeExpireTime(activeCodeExpireTime: number): SearchUserResultDTO {
        this['activeCodeExpireTime'] = activeCodeExpireTime;
        return this;
    }
    public withExpireTime(expireTime: number): SearchUserResultDTO {
        this['expireTime'] = expireTime;
        return this;
    }
    public withActiveCode(activeCode: string): SearchUserResultDTO {
        this['activeCode'] = activeCode;
        return this;
    }
}