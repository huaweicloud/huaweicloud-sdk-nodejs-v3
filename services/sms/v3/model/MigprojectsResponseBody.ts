

export class MigprojectsResponseBody {
    public id?: string;
    public name?: string;
    private 'use_public_ip'?: boolean | undefined;
    public isdefault?: boolean;
    private 'start_target_server'?: boolean | undefined;
    public region?: string;
    private 'speed_limit'?: number | undefined;
    private 'exist_server'?: boolean | undefined;
    public description?: string;
    public type?: MigprojectsResponseBodyTypeEnum;
    private 'enterprise_project'?: string | undefined;
    public syncing?: boolean;
    private 'start_network_check'?: boolean | undefined;
    public constructor() { 
    }
    public withId(id: string): MigprojectsResponseBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): MigprojectsResponseBody {
        this['name'] = name;
        return this;
    }
    public withUsePublicIp(usePublicIp: boolean): MigprojectsResponseBody {
        this['use_public_ip'] = usePublicIp;
        return this;
    }
    public set usePublicIp(usePublicIp: boolean | undefined) {
        this['use_public_ip'] = usePublicIp;
    }
    public get usePublicIp() {
        return this['use_public_ip'];
    }
    public withIsdefault(isdefault: boolean): MigprojectsResponseBody {
        this['isdefault'] = isdefault;
        return this;
    }
    public withStartTargetServer(startTargetServer: boolean): MigprojectsResponseBody {
        this['start_target_server'] = startTargetServer;
        return this;
    }
    public set startTargetServer(startTargetServer: boolean | undefined) {
        this['start_target_server'] = startTargetServer;
    }
    public get startTargetServer() {
        return this['start_target_server'];
    }
    public withRegion(region: string): MigprojectsResponseBody {
        this['region'] = region;
        return this;
    }
    public withSpeedLimit(speedLimit: number): MigprojectsResponseBody {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: number | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit() {
        return this['speed_limit'];
    }
    public withExistServer(existServer: boolean): MigprojectsResponseBody {
        this['exist_server'] = existServer;
        return this;
    }
    public set existServer(existServer: boolean | undefined) {
        this['exist_server'] = existServer;
    }
    public get existServer() {
        return this['exist_server'];
    }
    public withDescription(description: string): MigprojectsResponseBody {
        this['description'] = description;
        return this;
    }
    public withType(type: MigprojectsResponseBodyTypeEnum): MigprojectsResponseBody {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProject(enterpriseProject: string): MigprojectsResponseBody {
        this['enterprise_project'] = enterpriseProject;
        return this;
    }
    public set enterpriseProject(enterpriseProject: string | undefined) {
        this['enterprise_project'] = enterpriseProject;
    }
    public get enterpriseProject() {
        return this['enterprise_project'];
    }
    public withSyncing(syncing: boolean): MigprojectsResponseBody {
        this['syncing'] = syncing;
        return this;
    }
    public withStartNetworkCheck(startNetworkCheck: boolean): MigprojectsResponseBody {
        this['start_network_check'] = startNetworkCheck;
        return this;
    }
    public set startNetworkCheck(startNetworkCheck: boolean | undefined) {
        this['start_network_check'] = startNetworkCheck;
    }
    public get startNetworkCheck() {
        return this['start_network_check'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MigprojectsResponseBodyTypeEnum {
    MIGRATE_BLOCK = 'MIGRATE_BLOCK',
    MIGRATE_FILE = 'MIGRATE_FILE'
}
