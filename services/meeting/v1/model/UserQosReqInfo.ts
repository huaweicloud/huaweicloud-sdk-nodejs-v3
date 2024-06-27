

export class UserQosReqInfo {
    public pid?: string;
    public accessMediaType?: string;
    public constructor() { 
    }
    public withPid(pid: string): UserQosReqInfo {
        this['pid'] = pid;
        return this;
    }
    public withAccessMediaType(accessMediaType: string): UserQosReqInfo {
        this['accessMediaType'] = accessMediaType;
        return this;
    }
}