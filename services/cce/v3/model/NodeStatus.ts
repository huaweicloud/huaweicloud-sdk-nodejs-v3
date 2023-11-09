import { DeleteStatus } from './DeleteStatus';


export class NodeStatus {
    public phase?: NodeStatusPhaseEnum | string;
    public lastProbeTime?: string;
    public jobID?: string;
    public serverId?: string;
    public privateIP?: string;
    public privateIPv6IP?: string;
    public publicIP?: string;
    public deleteStatus?: DeleteStatus;
    public constructor() { 
    }
    public withPhase(phase: NodeStatusPhaseEnum | string): NodeStatus {
        this['phase'] = phase;
        return this;
    }
    public withLastProbeTime(lastProbeTime: string): NodeStatus {
        this['lastProbeTime'] = lastProbeTime;
        return this;
    }
    public withJobID(jobID: string): NodeStatus {
        this['jobID'] = jobID;
        return this;
    }
    public withServerId(serverId: string): NodeStatus {
        this['serverId'] = serverId;
        return this;
    }
    public withPrivateIP(privateIP: string): NodeStatus {
        this['privateIP'] = privateIP;
        return this;
    }
    public withPrivateIPv6IP(privateIPv6IP: string): NodeStatus {
        this['privateIPv6IP'] = privateIPv6IP;
        return this;
    }
    public withPublicIP(publicIP: string): NodeStatus {
        this['publicIP'] = publicIP;
        return this;
    }
    public withDeleteStatus(deleteStatus: DeleteStatus): NodeStatus {
        this['deleteStatus'] = deleteStatus;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodeStatusPhaseEnum {
    BUILD = 'Build',
    INSTALLING = 'Installing',
    UPGRADING = 'Upgrading',
    ACTIVE = 'Active',
    ABNORMAL = 'Abnormal',
    DELETING = 'Deleting',
    ERROR = 'Error'
}
