import { ContainerSettingsDTO } from './ContainerSettingsDTO';
import { ProbeDTO } from './ProbeDTO';


export class UpdateEdgeAppVersionDTO {
    public description?: string;
    private 'deploy_type'?: string;
    private 'deploy_multi_instance'?: boolean;
    private 'container_settings'?: ContainerSettingsDTO;
    private 'liveness_probe'?: ProbeDTO;
    private 'readiness_probe'?: ProbeDTO;
    private 'sdk_version'?: string;
    public arch?: object;
    public command?: object;
    public args?: object;
    public outputs?: object;
    public inputs?: object;
    public services?: object;
    private 'tpl_id'?: string;
    public constructor() { 
    }
    public withDescription(description: string): UpdateEdgeAppVersionDTO {
        this['description'] = description;
        return this;
    }
    public withDeployType(deployType: string): UpdateEdgeAppVersionDTO {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): string | undefined {
        return this['deploy_type'];
    }
    public withDeployMultiInstance(deployMultiInstance: boolean): UpdateEdgeAppVersionDTO {
        this['deploy_multi_instance'] = deployMultiInstance;
        return this;
    }
    public set deployMultiInstance(deployMultiInstance: boolean  | undefined) {
        this['deploy_multi_instance'] = deployMultiInstance;
    }
    public get deployMultiInstance(): boolean | undefined {
        return this['deploy_multi_instance'];
    }
    public withContainerSettings(containerSettings: ContainerSettingsDTO): UpdateEdgeAppVersionDTO {
        this['container_settings'] = containerSettings;
        return this;
    }
    public set containerSettings(containerSettings: ContainerSettingsDTO  | undefined) {
        this['container_settings'] = containerSettings;
    }
    public get containerSettings(): ContainerSettingsDTO | undefined {
        return this['container_settings'];
    }
    public withLivenessProbe(livenessProbe: ProbeDTO): UpdateEdgeAppVersionDTO {
        this['liveness_probe'] = livenessProbe;
        return this;
    }
    public set livenessProbe(livenessProbe: ProbeDTO  | undefined) {
        this['liveness_probe'] = livenessProbe;
    }
    public get livenessProbe(): ProbeDTO | undefined {
        return this['liveness_probe'];
    }
    public withReadinessProbe(readinessProbe: ProbeDTO): UpdateEdgeAppVersionDTO {
        this['readiness_probe'] = readinessProbe;
        return this;
    }
    public set readinessProbe(readinessProbe: ProbeDTO  | undefined) {
        this['readiness_probe'] = readinessProbe;
    }
    public get readinessProbe(): ProbeDTO | undefined {
        return this['readiness_probe'];
    }
    public withSdkVersion(sdkVersion: string): UpdateEdgeAppVersionDTO {
        this['sdk_version'] = sdkVersion;
        return this;
    }
    public set sdkVersion(sdkVersion: string  | undefined) {
        this['sdk_version'] = sdkVersion;
    }
    public get sdkVersion(): string | undefined {
        return this['sdk_version'];
    }
    public withArch(arch: object): UpdateEdgeAppVersionDTO {
        this['arch'] = arch;
        return this;
    }
    public withCommand(command: object): UpdateEdgeAppVersionDTO {
        this['command'] = command;
        return this;
    }
    public withArgs(args: object): UpdateEdgeAppVersionDTO {
        this['args'] = args;
        return this;
    }
    public withOutputs(outputs: object): UpdateEdgeAppVersionDTO {
        this['outputs'] = outputs;
        return this;
    }
    public withInputs(inputs: object): UpdateEdgeAppVersionDTO {
        this['inputs'] = inputs;
        return this;
    }
    public withServices(services: object): UpdateEdgeAppVersionDTO {
        this['services'] = services;
        return this;
    }
    public withTplId(tplId: string): UpdateEdgeAppVersionDTO {
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