import { ContainerExtraLinuxInfo } from './ContainerExtraLinuxInfo';
import { ContainerExtraMysqlInfo } from './ContainerExtraMysqlInfo';
import { ContainerExtraOpenvpnInfo } from './ContainerExtraOpenvpnInfo';
import { ContainerExtraRdpInfo } from './ContainerExtraRdpInfo';


export class ContainerExtraInfo {
    public openvpn?: ContainerExtraOpenvpnInfo;
    public linux?: ContainerExtraLinuxInfo;
    public rdp?: ContainerExtraRdpInfo;
    public mysql?: ContainerExtraMysqlInfo;
    public constructor() { 
    }
    public withOpenvpn(openvpn: ContainerExtraOpenvpnInfo): ContainerExtraInfo {
        this['openvpn'] = openvpn;
        return this;
    }
    public withLinux(linux: ContainerExtraLinuxInfo): ContainerExtraInfo {
        this['linux'] = linux;
        return this;
    }
    public withRdp(rdp: ContainerExtraRdpInfo): ContainerExtraInfo {
        this['rdp'] = rdp;
        return this;
    }
    public withMysql(mysql: ContainerExtraMysqlInfo): ContainerExtraInfo {
        this['mysql'] = mysql;
        return this;
    }
}