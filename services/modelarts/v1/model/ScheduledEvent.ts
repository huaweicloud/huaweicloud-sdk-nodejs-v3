

export class ScheduledEvent {
    public id?: string;
    public catalog?: ScheduledEventCatalogEnum | string;
    public type?: ScheduledEventTypeEnum | string;
    public description?: string;
    public state?: ScheduledEventStateEnum | string;
    public instanceType?: ScheduledEventInstanceTypeEnum | string;
    public instanceId?: string;
    public nodeName?: string;
    public poolName?: string;
    public poolDisplayName?: string;
    public publishTime?: string;
    public startTime?: string;
    public finishTime?: string;
    public notBefore?: string;
    public probeMsg?: string;
    public redeployType?: Array<string>;
    public constructor(id?: string, catalog?: string, type?: string, state?: string, instanceType?: string, instanceId?: string, nodeName?: string, publishTime?: string, redeployType?: Array<string>) { 
        this['id'] = id;
        this['catalog'] = catalog;
        this['type'] = type;
        this['state'] = state;
        this['instanceType'] = instanceType;
        this['instanceId'] = instanceId;
        this['nodeName'] = nodeName;
        this['publishTime'] = publishTime;
        this['redeployType'] = redeployType;
    }
    public withId(id: string): ScheduledEvent {
        this['id'] = id;
        return this;
    }
    public withCatalog(catalog: ScheduledEventCatalogEnum | string): ScheduledEvent {
        this['catalog'] = catalog;
        return this;
    }
    public withType(type: ScheduledEventTypeEnum | string): ScheduledEvent {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): ScheduledEvent {
        this['description'] = description;
        return this;
    }
    public withState(state: ScheduledEventStateEnum | string): ScheduledEvent {
        this['state'] = state;
        return this;
    }
    public withInstanceType(instanceType: ScheduledEventInstanceTypeEnum | string): ScheduledEvent {
        this['instanceType'] = instanceType;
        return this;
    }
    public withInstanceId(instanceId: string): ScheduledEvent {
        this['instanceId'] = instanceId;
        return this;
    }
    public withNodeName(nodeName: string): ScheduledEvent {
        this['nodeName'] = nodeName;
        return this;
    }
    public withPoolName(poolName: string): ScheduledEvent {
        this['poolName'] = poolName;
        return this;
    }
    public withPoolDisplayName(poolDisplayName: string): ScheduledEvent {
        this['poolDisplayName'] = poolDisplayName;
        return this;
    }
    public withPublishTime(publishTime: string): ScheduledEvent {
        this['publishTime'] = publishTime;
        return this;
    }
    public withStartTime(startTime: string): ScheduledEvent {
        this['startTime'] = startTime;
        return this;
    }
    public withFinishTime(finishTime: string): ScheduledEvent {
        this['finishTime'] = finishTime;
        return this;
    }
    public withNotBefore(notBefore: string): ScheduledEvent {
        this['notBefore'] = notBefore;
        return this;
    }
    public withProbeMsg(probeMsg: string): ScheduledEvent {
        this['probeMsg'] = probeMsg;
        return this;
    }
    public withRedeployType(redeployType: Array<string>): ScheduledEvent {
        this['redeployType'] = redeployType;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScheduledEventCatalogEnum {
    SOFTWARE = 'software',
    HARDWARE = 'hardware'
}
/**
    * @export
    * @enum {string}
    */
export enum ScheduledEventTypeEnum {
    SYSTEM_MAINTENANCE = 'system-maintenance',
    LOCALDISK_RECOVERY = 'localdisk-recovery',
    NODE_REBOOT = 'node_reboot',
    OPERATION_REQUEST = 'operation-request',
    NODE_MAINTENANCE = 'node_maintenance',
    NODE_REDEPLOY = 'node_redeploy',
    NODE_LOCALDISK_RECOVERY = 'node_localdisk_recovery'
}
/**
    * @export
    * @enum {string}
    */
export enum ScheduledEventStateEnum {
    INQUIRING = 'inquiring',
    SCHEDULED = 'scheduled',
    EXECUTING = 'executing',
    COMPLETED = 'completed',
    FAILED = 'failed',
    CANCELED = 'canceled'
}
/**
    * @export
    * @enum {string}
    */
export enum ScheduledEventInstanceTypeEnum {
    DEVSERVER = 'devserver',
    LITE_CLUSTER = 'lite-cluster',
    STANDARD = 'standard'
}
