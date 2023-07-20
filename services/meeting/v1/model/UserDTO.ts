

export class UserDTO {
    public id?: string;
    public statusCode?: number;
    public account?: string;
    public name?: string;
    public englishName?: string;
    public email?: string;
    public phone?: string;
    public deptName?: string;
    private 'number'?: string;
    public updateTime?: number;
    public isHardTerminal?: boolean;
    public vmrId?: string;
    public signature?: string;
    public title?: string;
    public description?: string;
    public hidePhone?: boolean;
    public type?: string;
    public deptCodes?: Array<string>;
    public constructor() { 
    }
    public withId(id: string): UserDTO {
        this['id'] = id;
        return this;
    }
    public withStatusCode(statusCode: number): UserDTO {
        this['statusCode'] = statusCode;
        return this;
    }
    public withAccount(account: string): UserDTO {
        this['account'] = account;
        return this;
    }
    public withName(name: string): UserDTO {
        this['name'] = name;
        return this;
    }
    public withEnglishName(englishName: string): UserDTO {
        this['englishName'] = englishName;
        return this;
    }
    public withEmail(email: string): UserDTO {
        this['email'] = email;
        return this;
    }
    public withPhone(phone: string): UserDTO {
        this['phone'] = phone;
        return this;
    }
    public withDeptName(deptName: string): UserDTO {
        this['deptName'] = deptName;
        return this;
    }
    public withModelNumber(modelNumber: string): UserDTO {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withUpdateTime(updateTime: number): UserDTO {
        this['updateTime'] = updateTime;
        return this;
    }
    public withIsHardTerminal(isHardTerminal: boolean): UserDTO {
        this['isHardTerminal'] = isHardTerminal;
        return this;
    }
    public withVmrId(vmrId: string): UserDTO {
        this['vmrId'] = vmrId;
        return this;
    }
    public withSignature(signature: string): UserDTO {
        this['signature'] = signature;
        return this;
    }
    public withTitle(title: string): UserDTO {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): UserDTO {
        this['description'] = description;
        return this;
    }
    public withHidePhone(hidePhone: boolean): UserDTO {
        this['hidePhone'] = hidePhone;
        return this;
    }
    public withType(type: string): UserDTO {
        this['type'] = type;
        return this;
    }
    public withDeptCodes(deptCodes: Array<string>): UserDTO {
        this['deptCodes'] = deptCodes;
        return this;
    }
}