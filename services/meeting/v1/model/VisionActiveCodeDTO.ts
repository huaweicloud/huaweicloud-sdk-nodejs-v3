

export class VisionActiveCodeDTO {
    public devType: string;
    public deptCode?: string;
    public devName: string;
    public description?: string;
    public smsNumber?: string;
    public country?: string;
    public emailAddr?: string;
    public constructor(devType?: any, devName?: any) { 
        this['devType'] = devType;
        this['devName'] = devName;
    }
    public withDevType(devType: string): VisionActiveCodeDTO {
        this['devType'] = devType;
        return this;
    }
    public withDeptCode(deptCode: string): VisionActiveCodeDTO {
        this['deptCode'] = deptCode;
        return this;
    }
    public withDevName(devName: string): VisionActiveCodeDTO {
        this['devName'] = devName;
        return this;
    }
    public withDescription(description: string): VisionActiveCodeDTO {
        this['description'] = description;
        return this;
    }
    public withSmsNumber(smsNumber: string): VisionActiveCodeDTO {
        this['smsNumber'] = smsNumber;
        return this;
    }
    public withCountry(country: string): VisionActiveCodeDTO {
        this['country'] = country;
        return this;
    }
    public withEmailAddr(emailAddr: string): VisionActiveCodeDTO {
        this['emailAddr'] = emailAddr;
        return this;
    }
}