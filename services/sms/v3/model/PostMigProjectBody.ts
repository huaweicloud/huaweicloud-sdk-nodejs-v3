

export class PostMigProjectBody {
    public name: string;
    public description?: string;
    public isdefault?: boolean;
    public region: string;
    private 'start_target_server'?: boolean | undefined;
    private 'speed_limit'?: number | undefined;
    private 'use_public_ip': boolean | undefined;
    private 'exist_server': boolean | undefined;
    public type: PostMigProjectBodyTypeEnum;
    private 'enterprise_project'?: string | undefined;
    public syncing: boolean;
    public constructor(name?: any, region?: any, usePublicIp?: any, existServer?: any, type?: any, syncing?: any) { 
        this['name'] = name;
        this['region'] = region;
        this['use_public_ip'] = usePublicIp;
        this['exist_server'] = existServer;
        this['type'] = type;
        this['syncing'] = syncing;
    }
    public withName(name: string): PostMigProjectBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PostMigProjectBody {
        this['description'] = description;
        return this;
    }
    public withIsdefault(isdefault: boolean): PostMigProjectBody {
        this['isdefault'] = isdefault;
        return this;
    }
    public withRegion(region: string): PostMigProjectBody {
        this['region'] = region;
        return this;
    }
    public withStartTargetServer(startTargetServer: boolean): PostMigProjectBody {
        this['start_target_server'] = startTargetServer;
        return this;
    }
    public set startTargetServer(startTargetServer: boolean | undefined) {
        this['start_target_server'] = startTargetServer;
    }
    public get startTargetServer() {
        return this['start_target_server'];
    }
    public withSpeedLimit(speedLimit: number): PostMigProjectBody {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: number | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit() {
        return this['speed_limit'];
    }
    public withUsePublicIp(usePublicIp: boolean): PostMigProjectBody {
        this['use_public_ip'] = usePublicIp;
        return this;
    }
    public set usePublicIp(usePublicIp: boolean | undefined) {
        this['use_public_ip'] = usePublicIp;
    }
    public get usePublicIp() {
        return this['use_public_ip'];
    }
    public withExistServer(existServer: boolean): PostMigProjectBody {
        this['exist_server'] = existServer;
        return this;
    }
    public set existServer(existServer: boolean | undefined) {
        this['exist_server'] = existServer;
    }
    public get existServer() {
        return this['exist_server'];
    }
    public withType(type: PostMigProjectBodyTypeEnum): PostMigProjectBody {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProject(enterpriseProject: string): PostMigProjectBody {
        this['enterprise_project'] = enterpriseProject;
        return this;
    }
    public set enterpriseProject(enterpriseProject: string | undefined) {
        this['enterprise_project'] = enterpriseProject;
    }
    public get enterpriseProject() {
        return this['enterprise_project'];
    }
    public withSyncing(syncing: boolean): PostMigProjectBody {
        this['syncing'] = syncing;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PostMigProjectBodyTypeEnum {
    MIGRATE_BLOCK = 'MIGRATE_BLOCK',
    MIGRATE_FILE = 'MIGRATE_FILE'
}
