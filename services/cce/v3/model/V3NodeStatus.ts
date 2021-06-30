import { DeleteStatus } from './DeleteStatus';


export class V3NodeStatus {
    public phase?: V3NodeStatusPhaseEnum;
    public jobID?: string;
    public serverId?: string;
    public privateIP?: string;
    public publicIP?: string;
    public deleteStatus?: DeleteStatus;
    public constructor() { 
    }
    public withPhase(phase: V3NodeStatusPhaseEnum): V3NodeStatus {
        this['phase'] = phase;
        return this;
    }
    public withJobID(jobID: string): V3NodeStatus {
        this['jobID'] = jobID;
        return this;
    }
    public withServerId(serverId: string): V3NodeStatus {
        this['serverId'] = serverId;
        return this;
    }
    public withPrivateIP(privateIP: string): V3NodeStatus {
        this['privateIP'] = privateIP;
        return this;
    }
    public withPublicIP(publicIP: string): V3NodeStatus {
        this['publicIP'] = publicIP;
        return this;
    }
    public withDeleteStatus(deleteStatus: DeleteStatus): V3NodeStatus {
        this['deleteStatus'] = deleteStatus;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum V3NodeStatusPhaseEnum {
    BUILD = 'Build',
    INSTALLING = 'Installing',
    INSTALLED = 'Installed',
    SHUTDOWN = 'ShutDown',
    UPGRADING = 'Upgrading',
    ACTIVE = 'Active',
    ABNORMAL = 'Abnormal',
    DELETING = 'Deleting',
    ERROR = 'Error'
}
