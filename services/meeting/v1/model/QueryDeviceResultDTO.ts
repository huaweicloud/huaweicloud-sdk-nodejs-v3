

export class QueryDeviceResultDTO {
    public name?: string;
    public type?: string;
    public model?: string;
    public sn?: string;
    public account?: string;
    private 'number'?: string | undefined;
    public prjCodeMode?: number;
    public deptCode?: string;
    public deptName?: string;
    public deptNamePath?: string;
    public phone?: string;
    public country?: string;
    public email?: string;
    public description?: string;
    public status?: number;
    public constructor() { 
    }
    public withName(name: string): QueryDeviceResultDTO {
        this['name'] = name;
        return this;
    }
    public withType(type: string): QueryDeviceResultDTO {
        this['type'] = type;
        return this;
    }
    public withModel(model: string): QueryDeviceResultDTO {
        this['model'] = model;
        return this;
    }
    public withSn(sn: string): QueryDeviceResultDTO {
        this['sn'] = sn;
        return this;
    }
    public withAccount(account: string): QueryDeviceResultDTO {
        this['account'] = account;
        return this;
    }
    public withModelNumber(modelNumber: string): QueryDeviceResultDTO {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber() {
        return this['number'];
    }
    public withPrjCodeMode(prjCodeMode: number): QueryDeviceResultDTO {
        this['prjCodeMode'] = prjCodeMode;
        return this;
    }
    public withDeptCode(deptCode: string): QueryDeviceResultDTO {
        this['deptCode'] = deptCode;
        return this;
    }
    public withDeptName(deptName: string): QueryDeviceResultDTO {
        this['deptName'] = deptName;
        return this;
    }
    public withDeptNamePath(deptNamePath: string): QueryDeviceResultDTO {
        this['deptNamePath'] = deptNamePath;
        return this;
    }
    public withPhone(phone: string): QueryDeviceResultDTO {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): QueryDeviceResultDTO {
        this['country'] = country;
        return this;
    }
    public withEmail(email: string): QueryDeviceResultDTO {
        this['email'] = email;
        return this;
    }
    public withDescription(description: string): QueryDeviceResultDTO {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): QueryDeviceResultDTO {
        this['status'] = status;
        return this;
    }
}