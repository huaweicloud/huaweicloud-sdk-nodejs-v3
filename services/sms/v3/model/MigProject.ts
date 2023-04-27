import { TemplateResponseBody } from './TemplateResponseBody';


export class MigProject {
    public id?: string;
    public name: string;
    public description?: string;
    public isdefault?: boolean;
    public template?: TemplateResponseBody;
    public region: string;
    private 'start_target_server'?: boolean | undefined;
    private 'speed_limit'?: number | undefined;
    private 'use_public_ip': boolean | undefined;
    private 'exist_server': boolean | undefined;
    public type: MigProjectTypeEnum;
    private 'enterprise_project'?: string | undefined;
    public syncing: boolean;
    private 'start_network_check'?: boolean | undefined;
    public constructor(name?: any, region?: any, usePublicIp?: any, existServer?: any, type?: any, syncing?: any) { 
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
    public withTemplate(template: TemplateResponseBody): MigProject {
        this['template'] = template;
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
    public set startTargetServer(startTargetServer: boolean | undefined) {
        this['start_target_server'] = startTargetServer;
    }
    public get startTargetServer() {
        return this['start_target_server'];
    }
    public withSpeedLimit(speedLimit: number): MigProject {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: number | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit() {
        return this['speed_limit'];
    }
    public withUsePublicIp(usePublicIp: boolean): MigProject {
        this['use_public_ip'] = usePublicIp;
        return this;
    }
    public set usePublicIp(usePublicIp: boolean | undefined) {
        this['use_public_ip'] = usePublicIp;
    }
    public get usePublicIp() {
        return this['use_public_ip'];
    }
    public withExistServer(existServer: boolean): MigProject {
        this['exist_server'] = existServer;
        return this;
    }
    public set existServer(existServer: boolean | undefined) {
        this['exist_server'] = existServer;
    }
    public get existServer() {
        return this['exist_server'];
    }
    public withType(type: MigProjectTypeEnum): MigProject {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProject(enterpriseProject: string): MigProject {
        this['enterprise_project'] = enterpriseProject;
        return this;
    }
    public set enterpriseProject(enterpriseProject: string | undefined) {
        this['enterprise_project'] = enterpriseProject;
    }
    public get enterpriseProject() {
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
export enum MigProjectTypeEnum {
    MIGRATE_BLOCK = 'MIGRATE_BLOCK',
    MIGRATE_FILE = 'MIGRATE_FILE'
}
