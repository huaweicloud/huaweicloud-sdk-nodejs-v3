import { Nics } from './Nics';
import { SecurityGroup } from './SecurityGroup';


export class ChangeInstanceNetwork {
    public type?: string;
    private 'security_groups'?: Array<SecurityGroup>;
    public nics?: Array<Nics>;
    private 'server_id'?: string;
    public constructor(type?: string, securityGroups?: Array<SecurityGroup>, nics?: Array<Nics>) { 
        this['type'] = type;
        this['security_groups'] = securityGroups;
        this['nics'] = nics;
    }
    public withType(type: string): ChangeInstanceNetwork {
        this['type'] = type;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroup>): ChangeInstanceNetwork {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroup> | undefined {
        return this['security_groups'];
    }
    public withNics(nics: Array<Nics>): ChangeInstanceNetwork {
        this['nics'] = nics;
        return this;
    }
    public withServerId(serverId: string): ChangeInstanceNetwork {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
}