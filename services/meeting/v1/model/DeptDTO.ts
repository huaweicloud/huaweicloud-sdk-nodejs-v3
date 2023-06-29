

export class DeptDTO {
    public deptCode?: string;
    public deptName: string;
    public parentDeptCode?: string;
    public note?: string;
    public inPermission?: DeptDTOInPermissionEnum;
    public outPermission?: DeptDTOOutPermissionEnum;
    public designatedOutDeptCodes?: Array<string>;
    public sortLevel?: number;
    public constructor(deptName?: any) { 
        this['deptName'] = deptName;
    }
    public withDeptCode(deptCode: string): DeptDTO {
        this['deptCode'] = deptCode;
        return this;
    }
    public withDeptName(deptName: string): DeptDTO {
        this['deptName'] = deptName;
        return this;
    }
    public withParentDeptCode(parentDeptCode: string): DeptDTO {
        this['parentDeptCode'] = parentDeptCode;
        return this;
    }
    public withNote(note: string): DeptDTO {
        this['note'] = note;
        return this;
    }
    public withInPermission(inPermission: DeptDTOInPermissionEnum): DeptDTO {
        this['inPermission'] = inPermission;
        return this;
    }
    public withOutPermission(outPermission: DeptDTOOutPermissionEnum): DeptDTO {
        this['outPermission'] = outPermission;
        return this;
    }
    public withDesignatedOutDeptCodes(designatedOutDeptCodes: Array<string>): DeptDTO {
        this['designatedOutDeptCodes'] = designatedOutDeptCodes;
        return this;
    }
    public withSortLevel(sortLevel: number): DeptDTO {
        this['sortLevel'] = sortLevel;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeptDTOInPermissionEnum {
    UNLIMITED = 'UNLIMITED',
    OPEN = 'OPEN',
    CLOSE = 'CLOSE',
    DESIGNATED_DEPARTMENT = 'DESIGNATED_DEPARTMENT'
}
/**
    * @export
    * @enum {string}
    */
export enum DeptDTOOutPermissionEnum {
    UNLIMITED = 'UNLIMITED',
    ONLY_SELF = 'ONLY_SELF',
    SELF_AND_CHILD_DEPARTMENT = 'SELF_AND_CHILD_DEPARTMENT',
    DESIGNATED_DEPARTMENT = 'DESIGNATED_DEPARTMENT'
}
