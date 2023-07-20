

export class CreateInstanceRequestBody {
    public chargemode?: number;
    public region?: string;
    private 'available_zone'?: string;
    public arch?: string;
    public instancename?: string;
    public specification?: string;
    private 'cpu_flavor'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group'?: Array<string>;
    public count?: number;
    private 'res_tenant'?: boolean;
    public constructor(region?: string, availableZone?: string, arch?: string, instancename?: string, specification?: string, cpuFlavor?: string, vpcId?: string, subnetId?: string, securityGroup?: Array<string>, count?: number) { 
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
    public set availableZone(availableZone: string  | undefined) {
        this['available_zone'] = availableZone;
    }
    public get availableZone(): string | undefined {
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
    public set cpuFlavor(cpuFlavor: string  | undefined) {
        this['cpu_flavor'] = cpuFlavor;
    }
    public get cpuFlavor(): string | undefined {
        return this['cpu_flavor'];
    }
    public withVpcId(vpcId: string): CreateInstanceRequestBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateInstanceRequestBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroup(securityGroup: Array<string>): CreateInstanceRequestBody {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: Array<string>  | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup(): Array<string> | undefined {
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
    public set resTenant(resTenant: boolean  | undefined) {
        this['res_tenant'] = resTenant;
    }
    public get resTenant(): boolean | undefined {
        return this['res_tenant'];
    }
}