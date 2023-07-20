

export class ModDeptDTO {
    public deptName?: string;
    public parentDeptCode?: string;
    public note?: string;
    public inPermission?: ModDeptDTOInPermissionEnum | string;
    public outPermission?: ModDeptDTOOutPermissionEnum | string;
    public designatedOutDeptCodes?: Array<string>;
    public sortLevel?: number;
    public constructor() { 
    }
    public withDeptName(deptName: string): ModDeptDTO {
        this['deptName'] = deptName;
        return this;
    }
    public withParentDeptCode(parentDeptCode: string): ModDeptDTO {
        this['parentDeptCode'] = parentDeptCode;
        return this;
    }
    public withNote(note: string): ModDeptDTO {
        this['note'] = note;
        return this;
    }
    public withInPermission(inPermission: ModDeptDTOInPermissionEnum | string): ModDeptDTO {
        this['inPermission'] = inPermission;
        return this;
    }
    public withOutPermission(outPermission: ModDeptDTOOutPermissionEnum | string): ModDeptDTO {
        this['outPermission'] = outPermission;
        return this;
    }
    public withDesignatedOutDeptCodes(designatedOutDeptCodes: Array<string>): ModDeptDTO {
        this['designatedOutDeptCodes'] = designatedOutDeptCodes;
        return this;
    }
    public withSortLevel(sortLevel: number): ModDeptDTO {
        this['sortLevel'] = sortLevel;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModDeptDTOInPermissionEnum {
    UNLIMITED = 'UNLIMITED',
    OPEN = 'OPEN',
    CLOSE = 'CLOSE',
    DESIGNATED_DEPARTMENT = 'DESIGNATED_DEPARTMENT'
}
/**
    * @export
    * @enum {string}
    */
export enum ModDeptDTOOutPermissionEnum {
    UNLIMITED = 'UNLIMITED',
    ONLY_SELF = 'ONLY_SELF',
    SELF_AND_CHILD_DEPARTMENT = 'SELF_AND_CHILD_DEPARTMENT',
    DESIGNATED_DEPARTMENT = 'DESIGNATED_DEPARTMENT'
}
