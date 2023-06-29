

export class DeptBasicDTO {
    public deptCode?: string;
    public corpId?: string;
    public deptName?: string;
    public deptNamePath?: string;
    public parentDeptCode?: string;
    public constructor() { 
    }
    public withDeptCode(deptCode: string): DeptBasicDTO {
        this['deptCode'] = deptCode;
        return this;
    }
    public withCorpId(corpId: string): DeptBasicDTO {
        this['corpId'] = corpId;
        return this;
    }
    public withDeptName(deptName: string): DeptBasicDTO {
        this['deptName'] = deptName;
        return this;
    }
    public withDeptNamePath(deptNamePath: string): DeptBasicDTO {
        this['deptNamePath'] = deptNamePath;
        return this;
    }
    public withParentDeptCode(parentDeptCode: string): DeptBasicDTO {
        this['parentDeptCode'] = parentDeptCode;
        return this;
    }
}