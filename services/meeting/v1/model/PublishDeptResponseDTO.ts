

export class PublishDeptResponseDTO {
    public deptCode?: string;
    public deptName?: string;
    public constructor() { 
    }
    public withDeptCode(deptCode: string): PublishDeptResponseDTO {
        this['deptCode'] = deptCode;
        return this;
    }
    public withDeptName(deptName: string): PublishDeptResponseDTO {
        this['deptName'] = deptName;
        return this;
    }
}