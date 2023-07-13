

export class QueryVmrResultDTO {
    public id?: string;
    public vmrId?: string;
    public vmrName?: string;
    public gustPwd?: string;
    public gustJoinUrl?: string;
    public chairPwd?: string;
    public chairJoinUrl?: string;
    public allowGustFirst?: boolean;
    public gustFirstNotice?: boolean;
    public vmrMode?: number;
    public vmrPkgId?: string;
    public vmrPkgName?: string;
    public vmrPkgParties?: number;
    public status?: number;
    public constructor() { 
    }
    public withId(id: string): QueryVmrResultDTO {
        this['id'] = id;
        return this;
    }
    public withVmrId(vmrId: string): QueryVmrResultDTO {
        this['vmrId'] = vmrId;
        return this;
    }
    public withVmrName(vmrName: string): QueryVmrResultDTO {
        this['vmrName'] = vmrName;
        return this;
    }
    public withGustPwd(gustPwd: string): QueryVmrResultDTO {
        this['gustPwd'] = gustPwd;
        return this;
    }
    public withGustJoinUrl(gustJoinUrl: string): QueryVmrResultDTO {
        this['gustJoinUrl'] = gustJoinUrl;
        return this;
    }
    public withChairPwd(chairPwd: string): QueryVmrResultDTO {
        this['chairPwd'] = chairPwd;
        return this;
    }
    public withChairJoinUrl(chairJoinUrl: string): QueryVmrResultDTO {
        this['chairJoinUrl'] = chairJoinUrl;
        return this;
    }
    public withAllowGustFirst(allowGustFirst: boolean): QueryVmrResultDTO {
        this['allowGustFirst'] = allowGustFirst;
        return this;
    }
    public withGustFirstNotice(gustFirstNotice: boolean): QueryVmrResultDTO {
        this['gustFirstNotice'] = gustFirstNotice;
        return this;
    }
    public withVmrMode(vmrMode: number): QueryVmrResultDTO {
        this['vmrMode'] = vmrMode;
        return this;
    }
    public withVmrPkgId(vmrPkgId: string): QueryVmrResultDTO {
        this['vmrPkgId'] = vmrPkgId;
        return this;
    }
    public withVmrPkgName(vmrPkgName: string): QueryVmrResultDTO {
        this['vmrPkgName'] = vmrPkgName;
        return this;
    }
    public withVmrPkgParties(vmrPkgParties: number): QueryVmrResultDTO {
        this['vmrPkgParties'] = vmrPkgParties;
        return this;
    }
    public withStatus(status: number): QueryVmrResultDTO {
        this['status'] = status;
        return this;
    }
}