import { RemoteInfosOption } from './RemoteInfosOption';


export class CreateConnectionOption {
    private 'fixed_ips'?: Array<string>;
    public name?: string;
    private 'remote_infos'?: Array<RemoteInfosOption>;
    private 'virsubnet_id'?: string;
    private 'vpc_id'?: string;
    public constructor(name?: string, remoteInfos?: Array<RemoteInfosOption>, virsubnetId?: string, vpcId?: string) { 
        this['name'] = name;
        this['remote_infos'] = remoteInfos;
        this['virsubnet_id'] = virsubnetId;
        this['vpc_id'] = vpcId;
    }
    public withFixedIps(fixedIps: Array<string>): CreateConnectionOption {
        this['fixed_ips'] = fixedIps;
        return this;
    }
    public set fixedIps(fixedIps: Array<string>  | undefined) {
        this['fixed_ips'] = fixedIps;
    }
    public get fixedIps(): Array<string> | undefined {
        return this['fixed_ips'];
    }
    public withName(name: string): CreateConnectionOption {
        this['name'] = name;
        return this;
    }
    public withRemoteInfos(remoteInfos: Array<RemoteInfosOption>): CreateConnectionOption {
        this['remote_infos'] = remoteInfos;
        return this;
    }
    public set remoteInfos(remoteInfos: Array<RemoteInfosOption>  | undefined) {
        this['remote_infos'] = remoteInfos;
    }
    public get remoteInfos(): Array<RemoteInfosOption> | undefined {
        return this['remote_infos'];
    }
    public withVirsubnetId(virsubnetId: string): CreateConnectionOption {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withVpcId(vpcId: string): CreateConnectionOption {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
}