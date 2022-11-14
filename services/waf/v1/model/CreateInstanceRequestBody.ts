

export class CreateInstanceRequestBody {
    public chargemode?: number;
    public region: string;
    private 'available_zone': string | undefined;
    public arch: string;
    public instancename: string;
    public specification: string;
    private 'cpu_flavor': string | undefined;
    private 'vpc_id': string | undefined;
    private 'subnet_id': string | undefined;
    private 'security_group': Array<string> | undefined;
    public count: number;
    private 'res_tenant': boolean | undefined;
    public constructor(region?: any, availableZone?: any, arch?: any, instancename?: any, specification?: any, cpuFlavor?: any, vpcId?: any, subnetId?: any, securityGroup?: any, count?: any, resTenant?: any) { 
        this['region'] = region;
        this['available_zone'] = availableZone;
        this['arch'] = arch;
        this['instancename'] = instancename;
        this['specification'] = specification;
        this['cpu_flavor'] = cpuFlavor;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group'] = securityGroup;
        this['count'] = count;
        this['res_tenant'] = resTenant;
    }
    public withChargemode(chargemode: number): CreateInstanceRequestBody {
        this['chargemode'] = chargemode;
        return this;
    }
    public withRegion(region: string): CreateInstanceRequestBody {
        this['region'] = region;
        return this;
    }
    public withAvailableZone(availableZone: string): CreateInstanceRequestBody {
        this['available_zone'] = availableZone;
        return this;
    }
    public set availableZone(availableZone: string | undefined) {
        this['available_zone'] = availableZone;
    }
    public get availableZone() {
        return this['available_zone'];
    }
    public withArch(arch: string): CreateInstanceRequestBody {
        this['arch'] = arch;
        return this;
    }
    public withInstancename(instancename: string): CreateInstanceRequestBody {
        this['instancename'] = instancename;
        return this;
    }
    public withSpecification(specification: string): CreateInstanceRequestBody {
        this['specification'] = specification;
        return this;
    }
    public withCpuFlavor(cpuFlavor: string): CreateInstanceRequestBody {
        this['cpu_flavor'] = cpuFlavor;
        return this;
    }
    public set cpuFlavor(cpuFlavor: string | undefined) {
        this['cpu_flavor'] = cpuFlavor;
    }
    public get cpuFlavor() {
        return this['cpu_flavor'];
    }
    public withVpcId(vpcId: string): CreateInstanceRequestBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateInstanceRequestBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withSecurityGroup(securityGroup: Array<string>): CreateInstanceRequestBody {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: Array<string> | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup() {
        return this['security_group'];
    }
    public withCount(count: number): CreateInstanceRequestBody {
        this['count'] = count;
        return this;
    }
    public withResTenant(resTenant: boolean): CreateInstanceRequestBody {
        this['res_tenant'] = resTenant;
        return this;
    }
    public set resTenant(resTenant: boolean | undefined) {
        this['res_tenant'] = resTenant;
    }
    public get resTenant() {
        return this['res_tenant'];
    }
}