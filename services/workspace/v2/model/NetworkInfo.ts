import { DesktopSubnet } from './DesktopSubnet';
import { Port } from './Port';
import { PublicIp } from './PublicIp';
import { SecurityGroup } from './SecurityGroup';
import { Vpc } from './Vpc';


export class NetworkInfo {
    private 'vpc_info'?: Vpc;
    private 'subnet_info'?: DesktopSubnet;
    private 'port_info'?: Port;
    private 'public_ip_info'?: PublicIp;
    private 'security_groups'?: Array<SecurityGroup>;
    public constructor() { 
    }
    public withVpcInfo(vpcInfo: Vpc): NetworkInfo {
        this['vpc_info'] = vpcInfo;
        return this;
    }
    public set vpcInfo(vpcInfo: Vpc  | undefined) {
        this['vpc_info'] = vpcInfo;
    }
    public get vpcInfo(): Vpc | undefined {
        return this['vpc_info'];
    }
    public withSubnetInfo(subnetInfo: DesktopSubnet): NetworkInfo {
        this['subnet_info'] = subnetInfo;
        return this;
    }
    public set subnetInfo(subnetInfo: DesktopSubnet  | undefined) {
        this['subnet_info'] = subnetInfo;
    }
    public get subnetInfo(): DesktopSubnet | undefined {
        return this['subnet_info'];
    }
    public withPortInfo(portInfo: Port): NetworkInfo {
        this['port_info'] = portInfo;
        return this;
    }
    public set portInfo(portInfo: Port  | undefined) {
        this['port_info'] = portInfo;
    }
    public get portInfo(): Port | undefined {
        return this['port_info'];
    }
    public withPublicIpInfo(publicIpInfo: PublicIp): NetworkInfo {
        this['public_ip_info'] = publicIpInfo;
        return this;
    }
    public set publicIpInfo(publicIpInfo: PublicIp  | undefined) {
        this['public_ip_info'] = publicIpInfo;
    }
    public get publicIpInfo(): PublicIp | undefined {
        return this['public_ip_info'];
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroup>): NetworkInfo {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroup> | undefined {
        return this['security_groups'];
    }
}