

export class QueryVisionActiveCodeResultDTO {
    public id?: string;
    public activeCode?: string;
    public devName?: string;
    public devType?: string;
    public deptCode?: string;
    public deptName?: string;
    public expireDate?: number;
    public constructor() { 
    }
    public withId(id: string): QueryVisionActiveCodeResultDTO {
        this['id'] = id;
        return this;
    }
    public withActiveCode(activeCode: string): QueryVisionActiveCodeResultDTO {
        this['activeCode'] = activeCode;
        return this;
    }
    public withDevName(devName: string): QueryVisionActiveCodeResultDTO {
        this['devName'] = devName;
        return this;
    }
    public withDevType(devType: string): QueryVisionActiveCodeResultDTO {
        this['devType'] = devType;
        return this;
    }
    public withDeptCode(deptCode: string): QueryVisionActiveCodeResultDTO {
        this['deptCode'] = deptCode;
        return this;
    }
    public withDeptName(deptName: string): QueryVisionActiveCodeResultDTO {
        this['deptName'] = deptName;
        return this;
    }
    public withExpireDate(expireDate: number): QueryVisionActiveCodeResultDTO {
        this['expireDate'] = expireDate;
        return this;
    }
}