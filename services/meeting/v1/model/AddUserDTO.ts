import { UserFunctionDTO } from './UserFunctionDTO';


export class AddUserDTO {
    public name: string;
    public englishName?: string;
    public account?: string;
    public thirdAccount?: string;
    public phone?: string;
    public country?: string;
    public pwd?: string;
    public email?: string;
    public deptCode?: string;
    public signature?: string;
    public title?: string;
    public desc?: string;
    public status?: AddUserDTOStatusEnum;
    private 'function'?: UserFunctionDTO | undefined;
    public sendNotify?: string;
    public sortLevel?: number;
    public hidePhone?: boolean;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): AddUserDTO {
        this['name'] = name;
        return this;
    }
    public withEnglishName(englishName: string): AddUserDTO {
        this['englishName'] = englishName;
        return this;
    }
    public withAccount(account: string): AddUserDTO {
        this['account'] = account;
        return this;
    }
    public withThirdAccount(thirdAccount: string): AddUserDTO {
        this['thirdAccount'] = thirdAccount;
        return this;
    }
    public withPhone(phone: string): AddUserDTO {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): AddUserDTO {
        this['country'] = country;
        return this;
    }
    public withPwd(pwd: string): AddUserDTO {
        this['pwd'] = pwd;
        return this;
    }
    public withEmail(email: string): AddUserDTO {
        this['email'] = email;
        return this;
    }
    public withDeptCode(deptCode: string): AddUserDTO {
        this['deptCode'] = deptCode;
        return this;
    }
    public withSignature(signature: string): AddUserDTO {
        this['signature'] = signature;
        return this;
    }
    public withTitle(title: string): AddUserDTO {
        this['title'] = title;
        return this;
    }
    public withDesc(desc: string): AddUserDTO {
        this['desc'] = desc;
        return this;
    }
    public withStatus(status: AddUserDTOStatusEnum): AddUserDTO {
        this['status'] = status;
        return this;
    }
    public withFunction(_function: UserFunctionDTO): AddUserDTO {
        this['function'] = _function;
        return this;
    }
    public set _function(_function: UserFunctionDTO | undefined) {
        this['function'] = _function;
    }
    public get _function() {
        return this['function'];
    }
    public withSendNotify(sendNotify: string): AddUserDTO {
        this['sendNotify'] = sendNotify;
        return this;
    }
    public withSortLevel(sortLevel: number): AddUserDTO {
        this['sortLevel'] = sortLevel;
        return this;
    }
    public withHidePhone(hidePhone: boolean): AddUserDTO {
        this['hidePhone'] = hidePhone;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddUserDTOStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
