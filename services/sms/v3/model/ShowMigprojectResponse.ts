import { TemplateResponseBody } from './TemplateResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMigprojectResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public isdefault?: boolean;
    public template?: TemplateResponseBody;
    public region?: string;
    private 'start_target_server'?: boolean | undefined;
    private 'speed_limit'?: number | undefined;
    private 'use_public_ip'?: boolean | undefined;
    private 'exist_server'?: boolean | undefined;
    public type?: ShowMigprojectResponseTypeEnum;
    private 'enterprise_project'?: string | undefined;
    public syncing?: boolean;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowMigprojectResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowMigprojectResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowMigprojectResponse {
        this['description'] = description;
        return this;
    }
    public withIsdefault(isdefault: boolean): ShowMigprojectResponse {
        this['isdefault'] = isdefault;
        return this;
    }
    public withTemplate(template: TemplateResponseBody): ShowMigprojectResponse {
        this['template'] = template;
        return this;
    }
    public withRegion(region: string): ShowMigprojectResponse {
        this['region'] = region;
        return this;
    }
    public withStartTargetServer(startTargetServer: boolean): ShowMigprojectResponse {
        this['start_target_server'] = startTargetServer;
        return this;
    }
    public set startTargetServer(startTargetServer: boolean | undefined) {
        this['start_target_server'] = startTargetServer;
    }
    public get startTargetServer() {
        return this['start_target_server'];
    }
    public withSpeedLimit(speedLimit: number): ShowMigprojectResponse {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: number | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit() {
        return this['speed_limit'];
    }
    public withUsePublicIp(usePublicIp: boolean): ShowMigprojectResponse {
        this['use_public_ip'] = usePublicIp;
        return this;
    }
    public set usePublicIp(usePublicIp: boolean | undefined) {
        this['use_public_ip'] = usePublicIp;
    }
    public get usePublicIp() {
        return this['use_public_ip'];
    }
    public withExistServer(existServer: boolean): ShowMigprojectResponse {
        this['exist_server'] = existServer;
        return this;
    }
    public set existServer(existServer: boolean | undefined) {
        this['exist_server'] = existServer;
    }
    public get existServer() {
        return this['exist_server'];
    }
    public withType(type: ShowMigprojectResponseTypeEnum): ShowMigprojectResponse {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProject(enterpriseProject: string): ShowMigprojectResponse {
        this['enterprise_project'] = enterpriseProject;
        return this;
    }
    public set enterpriseProject(enterpriseProject: string | undefined) {
        this['enterprise_project'] = enterpriseProject;
    }
    public get enterpriseProject() {
        return this['enterprise_project'];
    }
    public withSyncing(syncing: boolean): ShowMigprojectResponse {
        this['syncing'] = syncing;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowMigprojectResponseTypeEnum {
    MIGRATE_BLOCK = 'MIGRATE_BLOCK',
    MIGRATE_FILE = 'MIGRATE_FILE'
}
