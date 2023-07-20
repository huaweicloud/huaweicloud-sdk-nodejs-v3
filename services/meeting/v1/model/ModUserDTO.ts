

export class ModUserDTO {
    public name?: string;
    public englishName?: string;
    public phone?: string;
    public country?: string;
    public email?: string;
    public vmrId?: string;
    public deptCode?: string;
    public signature?: string;
    public title?: string;
    public desc?: string;
    public status?: ModUserDTOStatusEnum | number;
    public sortLevel?: number;
    public hidePhone?: boolean;
    public constructor() { 
    }
    public withName(name: string): ModUserDTO {
        this['name'] = name;
        return this;
    }
    public withEnglishName(englishName: string): ModUserDTO {
        this['englishName'] = englishName;
        return this;
    }
    public withPhone(phone: string): ModUserDTO {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): ModUserDTO {
        this['country'] = country;
        return this;
    }
    public withEmail(email: string): ModUserDTO {
        this['email'] = email;
        return this;
    }
    public withVmrId(vmrId: string): ModUserDTO {
        this['vmrId'] = vmrId;
        return this;
    }
    public withDeptCode(deptCode: string): ModUserDTO {
        this['deptCode'] = deptCode;
        return this;
    }
    public withSignature(signature: string): ModUserDTO {
        this['signature'] = signature;
        return this;
    }
    public withTitle(title: string): ModUserDTO {
        this['title'] = title;
        return this;
    }
    public withDesc(desc: string): ModUserDTO {
        this['desc'] = desc;
        return this;
    }
    public withStatus(status: ModUserDTOStatusEnum | number): ModUserDTO {
        this['status'] = status;
        return this;
    }
    public withSortLevel(sortLevel: number): ModUserDTO {
        this['sortLevel'] = sortLevel;
        return this;
    }
    public withHidePhone(hidePhone: boolean): ModUserDTO {
        this['hidePhone'] = hidePhone;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModUserDTOStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
