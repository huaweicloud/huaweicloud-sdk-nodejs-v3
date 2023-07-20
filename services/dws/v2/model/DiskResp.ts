

export class DiskResp {
    private 'instance_name'?: string;
    private 'host_name'?: string;
    private 'disk_name'?: string;
    private 'disk_type'?: string;
    public total?: number;
    public used?: number;
    public available?: number;
    private 'used_percentage'?: number;
    private 'await'?: number;
    public svctm?: number;
    public util?: number;
    private 'read_rate'?: number;
    private 'write_rate'?: number;
    public constructor() { 
    }
    public withInstanceName(instanceName: string): DiskResp {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withHostName(hostName: string): DiskResp {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withDiskName(diskName: string): DiskResp {
        this['disk_name'] = diskName;
        return this;
    }
    public set diskName(diskName: string  | undefined) {
        this['disk_name'] = diskName;
    }
    public get diskName(): string | undefined {
        return this['disk_name'];
    }
    public withDiskType(diskType: string): DiskResp {
        this['disk_type'] = diskType;
        return this;
    }
    public set diskType(diskType: string  | undefined) {
        this['disk_type'] = diskType;
    }
    public get diskType(): string | undefined {
        return this['disk_type'];
    }
    public withTotal(total: number): DiskResp {
        this['total'] = total;
        return this;
    }
    public withUsed(used: number): DiskResp {
        this['used'] = used;
        return this;
    }
    public withAvailable(available: number): DiskResp {
        this['available'] = available;
        return this;
    }
    public withUsedPercentage(usedPercentage: number): DiskResp {
        this['used_percentage'] = usedPercentage;
        return this;
    }
    public set usedPercentage(usedPercentage: number  | undefined) {
        this['used_percentage'] = usedPercentage;
    }
    public get usedPercentage(): number | undefined {
        return this['used_percentage'];
    }
    public withAwait(_await: number): DiskResp {
        this['await'] = _await;
        return this;
    }
    public set _await(_await: number  | undefined) {
        this['await'] = _await;
    }
    public get _await(): number | undefined {
        return this['await'];
    }
    public withSvctm(svctm: number): DiskResp {
        this['svctm'] = svctm;
        return this;
    }
    public withUtil(util: number): DiskResp {
        this['util'] = util;
        return this;
    }
    public withReadRate(readRate: number): DiskResp {
        this['read_rate'] = readRate;
        return this;
    }
    public set readRate(readRate: number  | undefined) {
        this['read_rate'] = readRate;
    }
    public get readRate(): number | undefined {
        return this['read_rate'];
    }
    public withWriteRate(writeRate: number): DiskResp {
        this['write_rate'] = writeRate;
        return this;
    }
    public set writeRate(writeRate: number  | undefined) {
        this['write_rate'] = writeRate;
    }
    public get writeRate(): number | undefined {
        return this['write_rate'];
    }
}