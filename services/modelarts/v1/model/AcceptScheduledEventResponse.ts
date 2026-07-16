
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AcceptScheduledEventResponse extends SdkResponse {
    public id?: string;
    public catalog?: AcceptScheduledEventResponseCatalogEnum | string;
    public type?: AcceptScheduledEventResponseTypeEnum | string;
    public description?: string;
    public state?: AcceptScheduledEventResponseStateEnum | string;
    public instanceType?: AcceptScheduledEventResponseInstanceTypeEnum | string;
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
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): AcceptScheduledEventResponse {
        this['id'] = id;
        return this;
    }
    public withCatalog(catalog: AcceptScheduledEventResponseCatalogEnum | string): AcceptScheduledEventResponse {
        this['catalog'] = catalog;
        return this;
    }
    public withType(type: AcceptScheduledEventResponseTypeEnum | string): AcceptScheduledEventResponse {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): AcceptScheduledEventResponse {
        this['description'] = description;
        return this;
    }
    public withState(state: AcceptScheduledEventResponseStateEnum | string): AcceptScheduledEventResponse {
        this['state'] = state;
        return this;
    }
    public withInstanceType(instanceType: AcceptScheduledEventResponseInstanceTypeEnum | string): AcceptScheduledEventResponse {
        this['instanceType'] = instanceType;
        return this;
    }
    public withInstanceId(instanceId: string): AcceptScheduledEventResponse {
        this['instanceId'] = instanceId;
        return this;
    }
    public withNodeName(nodeName: string): AcceptScheduledEventResponse {
        this['nodeName'] = nodeName;
        return this;
    }
    public withPoolName(poolName: string): AcceptScheduledEventResponse {
        this['poolName'] = poolName;
        return this;
    }
    public withPoolDisplayName(poolDisplayName: string): AcceptScheduledEventResponse {
        this['poolDisplayName'] = poolDisplayName;
        return this;
    }
    public withPublishTime(publishTime: string): AcceptScheduledEventResponse {
        this['publishTime'] = publishTime;
        return this;
    }
    public withStartTime(startTime: string): AcceptScheduledEventResponse {
        this['startTime'] = startTime;
        return this;
    }
    public withFinishTime(finishTime: string): AcceptScheduledEventResponse {
        this['finishTime'] = finishTime;
        return this;
    }
    public withNotBefore(notBefore: string): AcceptScheduledEventResponse {
        this['notBefore'] = notBefore;
        return this;
    }
    public withProbeMsg(probeMsg: string): AcceptScheduledEventResponse {
        this['probeMsg'] = probeMsg;
        return this;
    }
    public withRedeployType(redeployType: Array<string>): AcceptScheduledEventResponse {
        this['redeployType'] = redeployType;
        return this;
    }
    public withXRequestId(xRequestId: string): AcceptScheduledEventResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AcceptScheduledEventResponseCatalogEnum {
    SOFTWARE = 'software',
    HARDWARE = 'hardware'
}
/**
    * @export
    * @enum {string}
    */
export enum AcceptScheduledEventResponseTypeEnum {
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
export enum AcceptScheduledEventResponseStateEnum {
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
export enum AcceptScheduledEventResponseInstanceTypeEnum {
    DEVSERVER = 'devserver',
    LITE_CLUSTER = 'lite-cluster',
    STANDARD = 'standard'
}
