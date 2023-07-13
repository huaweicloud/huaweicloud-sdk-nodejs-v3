

export class UserVmrDTO {
    public id?: string;
    public vmrId?: string;
    public vmrName?: string;
    public vmrMode?: number;
    public vmrPkgId?: string;
    public vmrPkgName?: string;
    public vmrPkgParties?: number;
    public vmrPkgLength?: number;
    public status?: UserVmrDTOStatusEnum;
    public constructor() { 
    }
    public withId(id: string): UserVmrDTO {
        this['id'] = id;
        return this;
    }
    public withVmrId(vmrId: string): UserVmrDTO {
        this['vmrId'] = vmrId;
        return this;
    }
    public withVmrName(vmrName: string): UserVmrDTO {
        this['vmrName'] = vmrName;
        return this;
    }
    public withVmrMode(vmrMode: number): UserVmrDTO {
        this['vmrMode'] = vmrMode;
        return this;
    }
    public withVmrPkgId(vmrPkgId: string): UserVmrDTO {
        this['vmrPkgId'] = vmrPkgId;
        return this;
    }
    public withVmrPkgName(vmrPkgName: string): UserVmrDTO {
        this['vmrPkgName'] = vmrPkgName;
        return this;
    }
    public withVmrPkgParties(vmrPkgParties: number): UserVmrDTO {
        this['vmrPkgParties'] = vmrPkgParties;
        return this;
    }
    public withVmrPkgLength(vmrPkgLength: number): UserVmrDTO {
        this['vmrPkgLength'] = vmrPkgLength;
        return this;
    }
    public withStatus(status: UserVmrDTOStatusEnum): UserVmrDTO {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UserVmrDTOStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
