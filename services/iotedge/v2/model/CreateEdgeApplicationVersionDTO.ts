import { ContainerSettingsDTO } from './ContainerSettingsDTO';
import { ProbeDTO } from './ProbeDTO';


export class CreateEdgeApplicationVersionDTO {
    public version?: string;
    public description?: string;
    private 'sdk_version'?: string;
    private 'deploy_type'?: CreateEdgeApplicationVersionDTODeployTypeEnum | string;
    private 'deploy_multi_instance'?: boolean;
    private 'container_settings'?: ContainerSettingsDTO;
    private 'liveness_probe'?: ProbeDTO;
    private 'readiness_probe'?: ProbeDTO;
    public arch?: object;
    public command?: object;
    public args?: object;
    public outputs?: object;
    public inputs?: object;
    public services?: object;
    public supplier?: string;
    private 'tpl_id'?: string;
    public constructor(version?: string, containerSettings?: ContainerSettingsDTO, arch?: object) { 
        this['version'] = version;
        this['container_settings'] = containerSettings;
        this['arch'] = arch;
    }
    public withVersion(version: string): CreateEdgeApplicationVersionDTO {
        this['version'] = version;
        return this;
    }
    public withDescription(description: string): CreateEdgeApplicationVersionDTO {
        this['description'] = description;
        return this;
    }
    public withSdkVersion(sdkVersion: string): CreateEdgeApplicationVersionDTO {
        this['sdk_version'] = sdkVersion;
        return this;
    }
    public set sdkVersion(sdkVersion: string  | undefined) {
        this['sdk_version'] = sdkVersion;
    }
    public get sdkVersion(): string | undefined {
        return this['sdk_version'];
    }
    public withDeployType(deployType: CreateEdgeApplicationVersionDTODeployTypeEnum | string): CreateEdgeApplicationVersionDTO {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: CreateEdgeApplicationVersionDTODeployTypeEnum | string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): CreateEdgeApplicationVersionDTODeployTypeEnum | string | undefined {
        return this['deploy_type'];
    }
    public withDeployMultiInstance(deployMultiInstance: boolean): CreateEdgeApplicationVersionDTO {
        this['deploy_multi_instance'] = deployMultiInstance;
        return this;
    }
    public set deployMultiInstance(deployMultiInstance: boolean  | undefined) {
        this['deploy_multi_instance'] = deployMultiInstance;
    }
    public get deployMultiInstance(): boolean | undefined {
        return this['deploy_multi_instance'];
    }
    public withContainerSettings(containerSettings: ContainerSettingsDTO): CreateEdgeApplicationVersionDTO {
        this['container_settings'] = containerSettings;
        return this;
    }
    public set containerSettings(containerSettings: ContainerSettingsDTO  | undefined) {
        this['container_settings'] = containerSettings;
    }
    public get containerSettings(): ContainerSettingsDTO | undefined {
        return this['container_settings'];
    }
    public withLivenessProbe(livenessProbe: ProbeDTO): CreateEdgeApplicationVersionDTO {
        this['liveness_probe'] = livenessProbe;
        return this;
    }
    public set livenessProbe(livenessProbe: ProbeDTO  | undefined) {
        this['liveness_probe'] = livenessProbe;
    }
    public get livenessProbe(): ProbeDTO | undefined {
        return this['liveness_probe'];
    }
    public withReadinessProbe(readinessProbe: ProbeDTO): CreateEdgeApplicationVersionDTO {
        this['readiness_probe'] = readinessProbe;
        return this;
    }
    public set readinessProbe(readinessProbe: ProbeDTO  | undefined) {
        this['readiness_probe'] = readinessProbe;
    }
    public get readinessProbe(): ProbeDTO | undefined {
        return this['readiness_probe'];
    }
    public withArch(arch: object): CreateEdgeApplicationVersionDTO {
        this['arch'] = arch;
        return this;
    }
    public withCommand(command: object): CreateEdgeApplicationVersionDTO {
        this['command'] = command;
        return this;
    }
    public withArgs(args: object): CreateEdgeApplicationVersionDTO {
        this['args'] = args;
        return this;
    }
    public withOutputs(outputs: object): CreateEdgeApplicationVersionDTO {
        this['outputs'] = outputs;
        return this;
    }
    public withInputs(inputs: object): CreateEdgeApplicationVersionDTO {
        this['inputs'] = inputs;
        return this;
    }
    public withServices(services: object): CreateEdgeApplicationVersionDTO {
        this['services'] = services;
        return this;
    }
    public withSupplier(supplier: string): CreateEdgeApplicationVersionDTO {
        this['supplier'] = supplier;
        return this;
    }
    public withTplId(tplId: string): CreateEdgeApplicationVersionDTO {
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
export enum CreateEdgeApplicationVersionDTODeployTypeEnum {
    DOCKER = 'docker',
    PROCESS = 'process'
}
