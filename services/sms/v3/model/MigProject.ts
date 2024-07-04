

export class MigProject {
    public id?: string;
    public name?: string;
    public description?: string;
    public isdefault?: boolean;
    public region?: string;
    private 'start_target_server'?: boolean;
    private 'speed_limit'?: number;
    private 'use_public_ip'?: boolean;
    private 'exist_server'?: boolean;
    public type?: MigProjectTypeEnum | string;
    private 'enterprise_project'?: string;
    public syncing?: boolean;
    private 'start_network_check'?: boolean;
    public constructor(name?: string, region?: string, usePublicIp?: boolean, existServer?: boolean, type?: string, syncing?: boolean) { 
        this['name'] = name;
        this['region'] = region;
        this['use_public_ip'] = usePublicIp;
        this['exist_server'] = existServer;
        this['type'] = type;
        this['syncing'] = syncing;
    }
    public withId(id: string): MigProject {
        this['id'] = id;
        return this;
    }
    public withName(name: string): MigProject {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): MigProject {
        this['description'] = description;
        return this;
    }
    public withIsdefault(isdefault: boolean): MigProject {
        this['isdefault'] = isdefault;
        return this;
    }
    public withRegion(region: string): MigProject {
        this['region'] = region;
        return this;
    }
    public withStartTargetServer(startTargetServer: boolean): MigProject {
        this['start_target_server'] = startTargetServer;
        return this;
    }
    public set startTargetServer(startTargetServer: boolean  | undefined) {
        this['start_target_server'] = startTargetServer;
    }
    public get startTargetServer(): boolean | undefined {
        return this['start_target_server'];
    }
    public withSpeedLimit(speedLimit: number): MigProject {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: number  | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit(): number | undefined {
        return this['speed_limit'];
    }
    public withUsePublicIp(usePublicIp: boolean): MigProject {
        this['use_public_ip'] = usePublicIp;
        return this;
    }
    public set usePublicIp(usePublicIp: boolean  | undefined) {
        this['use_public_ip'] = usePublicIp;
    }
    public get usePublicIp(): boolean | undefined {
        return this['use_public_ip'];
    }
    public withExistServer(existServer: boolean): MigProject {
        this['exist_server'] = existServer;
        return this;
    }
    public set existServer(existServer: boolean  | undefined) {
        this['exist_server'] = existServer;
    }
    public get existServer(): boolean | undefined {
        return this['exist_server'];
    }
    public withType(type: MigProjectTypeEnum | string): MigProject {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProject(enterpriseProject: string): MigProject {
        this['enterprise_project'] = enterpriseProject;
        return this;
    }
    public set enterpriseProject(enterpriseProject: string  | undefined) {
        this['enterprise_project'] = enterpriseProject;
    }
    public get enterpriseProject(): string | undefined {
        return this['enterprise_project'];
    }
    public withSyncing(syncing: boolean): MigProject {
        this['syncing'] = syncing;
        return this;
    }
    public withStartNetworkCheck(startNetworkCheck: boolean): MigProject {
        this['start_network_check'] = startNetworkCheck;
        return this;
    }
    public set startNetworkCheck(startNetworkCheck: boolean  | undefined) {
        this['start_network_check'] = startNetworkCheck;
    }
    public get startNetworkCheck(): boolean | undefined {
        return this['start_network_check'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MigProjectTypeEnum {
    MIGRATE_BLOCK = 'MIGRATE_BLOCK',
    MIGRATE_FILE = 'MIGRATE_FILE'
}
