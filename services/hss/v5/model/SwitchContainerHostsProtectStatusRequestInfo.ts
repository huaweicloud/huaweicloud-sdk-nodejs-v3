import { TagInfo } from './TagInfo';


export class SwitchContainerHostsProtectStatusRequestInfo {
    public version?: SwitchContainerHostsProtectStatusRequestInfoVersionEnum | string;
    private 'charging_mode'?: string;
    private 'resource_id'?: string;
    private 'host_id_list'?: Array<string>;
    public tags?: Array<TagInfo>;
    public constructor(version?: string, chargingMode?: string, resourceId?: string, hostIdList?: Array<string>) { 
        this['version'] = version;
        this['charging_mode'] = chargingMode;
        this['resource_id'] = resourceId;
        this['host_id_list'] = hostIdList;
    }
    public withVersion(version: SwitchContainerHostsProtectStatusRequestInfoVersionEnum | string): SwitchContainerHostsProtectStatusRequestInfo {
        this['version'] = version;
        return this;
    }
    public withChargingMode(chargingMode: string): SwitchContainerHostsProtectStatusRequestInfo {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withResourceId(resourceId: string): SwitchContainerHostsProtectStatusRequestInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withHostIdList(hostIdList: Array<string>): SwitchContainerHostsProtectStatusRequestInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withTags(tags: Array<TagInfo>): SwitchContainerHostsProtectStatusRequestInfo {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SwitchContainerHostsProtectStatusRequestInfoVersionEnum {
    HSS_VERSION_NULL = 'hss.version.null',
    HSS_VERSION_CONTAINER_ENTERPRISE = 'hss.version.container.enterprise'
}
