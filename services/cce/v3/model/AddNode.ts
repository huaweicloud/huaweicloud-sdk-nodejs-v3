import { ReinstallNodeSpec } from './ReinstallNodeSpec';


export class AddNode {
    public serverID: string;
    public spec: ReinstallNodeSpec;
    public constructor(serverID?: any, spec?: any) { 
        this['serverID'] = serverID;
        this['spec'] = spec;
    }
    public withServerID(serverID: string): AddNode {
        this['serverID'] = serverID;
        return this;
    }
    public withSpec(spec: ReinstallNodeSpec): AddNode {
        this['spec'] = spec;
        return this;
    }
}