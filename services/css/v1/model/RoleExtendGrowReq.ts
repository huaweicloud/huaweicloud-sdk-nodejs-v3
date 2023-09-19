

export class RoleExtendGrowReq {
    public type?: string;
    public nodesize?: number;
    public disksize?: number;
    public constructor(type?: string, nodesize?: number, disksize?: number) { 
        this['type'] = type;
        this['nodesize'] = nodesize;
        this['disksize'] = disksize;
    }
    public withType(type: string): RoleExtendGrowReq {
        this['type'] = type;
        return this;
    }
    public withNodesize(nodesize: number): RoleExtendGrowReq {
        this['nodesize'] = nodesize;
        return this;
    }
    public withDisksize(disksize: number): RoleExtendGrowReq {
        this['disksize'] = disksize;
        return this;
    }
}