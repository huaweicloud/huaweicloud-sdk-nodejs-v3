

export class ModVmrDTO {
    public vmrName?: string;
    public gustPwd?: string;
    public chairPwd?: string;
    public allowGustFirst?: boolean;
    public gustFirstNotice?: boolean;
    public constructor() { 
    }
    public withVmrName(vmrName: string): ModVmrDTO {
        this['vmrName'] = vmrName;
        return this;
    }
    public withGustPwd(gustPwd: string): ModVmrDTO {
        this['gustPwd'] = gustPwd;
        return this;
    }
    public withChairPwd(chairPwd: string): ModVmrDTO {
        this['chairPwd'] = chairPwd;
        return this;
    }
    public withAllowGustFirst(allowGustFirst: boolean): ModVmrDTO {
        this['allowGustFirst'] = allowGustFirst;
        return this;
    }
    public withGustFirstNotice(gustFirstNotice: boolean): ModVmrDTO {
        this['gustFirstNotice'] = gustFirstNotice;
        return this;
    }
}