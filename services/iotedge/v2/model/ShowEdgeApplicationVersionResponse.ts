import { ContainerSettingsDTO } from './ContainerSettingsDTO';
import { ProbeDTO } from './ProbeDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEdgeApplicationVersionResponse extends SdkResponse {
    private 'edge_app_id'?: string;
    public name?: string;
    private 'deploy_type'?: string;
    private 'deploy_multi_instance'?: boolean;
    public version?: string;
    private 'sdk_version'?: string;
    public description?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public state?: ShowEdgeApplicationVersionResponseStateEnum | string;
    private 'liveness_probe'?: ProbeDTO;
    private 'readiness_probe'?: ProbeDTO;
    public arch?: Array<string>;
    public command?: Array<string>;
    public args?: Array<string>;
    private 'container_settings'?: ContainerSettingsDTO;
    public outputs?: Array<string>;
    public inputs?: Array<string>;
    public services?: Array<string>;
    private 'publish_time'?: string;
    private 'off_shelf_time'?: string;
    public supplier?: string;
    private 'tpl_id'?: string;
    public constructor() { 
        super();
    }
    public withEdgeAppId(edgeAppId: string): ShowEdgeApplicationVersionResponse {
        this['edge_app_id'] = edgeAppId;
        return this;
    }
    public set edgeAppId(edgeAppId: string  | undefined) {
        this['edge_app_id'] = edgeAppId;
    }
    public get edgeAppId(): string | undefined {
        return this['edge_app_id'];
    }
    public withName(name: string): ShowEdgeApplicationVersionResponse {
        this['name'] = name;
        return this;
    }
    public withDeployType(deployType: string): ShowEdgeApplicationVersionResponse {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): string | undefined {
        return this['deploy_type'];
    }
    public withDeployMultiInstance(deployMultiInstance: boolean): ShowEdgeApplicationVersionResponse {
        this['deploy_multi_instance'] = deployMultiInstance;
        return this;
    }
    public set deployMultiInstance(deployMultiInstance: boolean  | undefined) {
        this['deploy_multi_instance'] = deployMultiInstance;
    }
    public get deployMultiInstance(): boolean | undefined {
        return this['deploy_multi_instance'];
    }
    public withVersion(version: string): ShowEdgeApplicationVersionResponse {
        this['version'] = version;
        return this;
    }
    public withSdkVersion(sdkVersion: string): ShowEdgeApplicationVersionResponse {
        this['sdk_version'] = sdkVersion;
        return this;
    }
    public set sdkVersion(sdkVersion: string  | undefined) {
        this['sdk_version'] = sdkVersion;
    }
    public get sdkVersion(): string | undefined {
        return this['sdk_version'];
    }
    public withDescription(description: string): ShowEdgeApplicationVersionResponse {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): ShowEdgeApplicationVersionResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowEdgeApplicationVersionResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withState(state: ShowEdgeApplicationVersionResponseStateEnum | string): ShowEdgeApplicationVersionResponse {
        this['state'] = state;
        return this;
    }
    public withLivenessProbe(livenessProbe: ProbeDTO): ShowEdgeApplicationVersionResponse {
        this['liveness_probe'] = livenessProbe;
        return this;
    }
    public set livenessProbe(livenessProbe: ProbeDTO  | undefined) {
        this['liveness_probe'] = livenessProbe;
    }
    public get livenessProbe(): ProbeDTO | undefined {
        return this['liveness_probe'];
    }
    public withReadinessProbe(readinessProbe: ProbeDTO): ShowEdgeApplicationVersionResponse {
        this['readiness_probe'] = readinessProbe;
        return this;
    }
    public set readinessProbe(readinessProbe: ProbeDTO  | undefined) {
        this['readiness_probe'] = readinessProbe;
    }
    public get readinessProbe(): ProbeDTO | undefined {
        return this['readiness_probe'];
    }
    public withArch(arch: Array<string>): ShowEdgeApplicationVersionResponse {
        this['arch'] = arch;
        return this;
    }
    public withCommand(command: Array<string>): ShowEdgeApplicationVersionResponse {
        this['command'] = command;
        return this;
    }
    public withArgs(args: Array<string>): ShowEdgeApplicationVersionResponse {
        this['args'] = args;
        return this;
    }
    public withContainerSettings(containerSettings: ContainerSettingsDTO): ShowEdgeApplicationVersionResponse {
        this['container_settings'] = containerSettings;
        return this;
    }
    public set containerSettings(containerSettings: ContainerSettingsDTO  | undefined) {
        this['container_settings'] = containerSettings;
    }
    public get containerSettings(): ContainerSettingsDTO | undefined {
        return this['container_settings'];
    }
    public withOutputs(outputs: Array<string>): ShowEdgeApplicationVersionResponse {
        this['outputs'] = outputs;
        return this;
    }
    public withInputs(inputs: Array<string>): ShowEdgeApplicationVersionResponse {
        this['inputs'] = inputs;
        return this;
    }
    public withServices(services: Array<string>): ShowEdgeApplicationVersionResponse {
        this['services'] = services;
        return this;
    }
    public withPublishTime(publishTime: string): ShowEdgeApplicationVersionResponse {
        this['publish_time'] = publishTime;
        return this;
    }
    public set publishTime(publishTime: string  | undefined) {
        this['publish_time'] = publishTime;
    }
    public get publishTime(): string | undefined {
        return this['publish_time'];
    }
    public withOffShelfTime(offShelfTime: string): ShowEdgeApplicationVersionResponse {
        this['off_shelf_time'] = offShelfTime;
        return this;
    }
    public set offShelfTime(offShelfTime: string  | undefined) {
        this['off_shelf_time'] = offShelfTime;
    }
    public get offShelfTime(): string | undefined {
        return this['off_shelf_time'];
    }
    public withSupplier(supplier: string): ShowEdgeApplicationVersionResponse {
        this['supplier'] = supplier;
        return this;
    }
    public withTplId(tplId: string): ShowEdgeApplicationVersionResponse {
        this['tpl_id'] = tplId;
        return this;
    }
    public set tplId(tplId: string  | undefined) {
        this['tpl_id'] = tplId;
    }
    public get tplId(): string | undefined {
        return this['tpl_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowEdgeApplicationVersionResponseStateEnum {
    DRAFT = 'DRAFT',
    PUBLISHED = 'PUBLISHED',
    OFF_SHELF = 'OFF_SHELF'
}
