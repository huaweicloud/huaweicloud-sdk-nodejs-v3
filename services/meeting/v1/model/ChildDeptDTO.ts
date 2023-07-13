

export class ChildDeptDTO {
    public deptCode?: string;
    public deptName?: string;
    public isLeafNodes?: boolean;
    public constructor() { 
    }
    public withDeptCode(deptCode: string): ChildDeptDTO {
        this['deptCode'] = deptCode;
        return this;
    }
    public withDeptName(deptName: string): ChildDeptDTO {
        this['deptName'] = deptName;
        return this;
    }
    public withIsLeafNodes(isLeafNodes: boolean): ChildDeptDTO {
        this['isLeafNodes'] = isLeafNodes;
        return this;
    }
}