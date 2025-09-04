import { ContainerSettingsReqDTO } from './ContainerSettingsReqDTO';


export class UpdateEdgeModuleReqDTO {
    private 'app_version'?: string;
    private 'module_name'?: string;
    private 'container_settings'?: ContainerSettingsReqDTO;
    private 'desired_state'?: UpdateEdgeModuleReqDTODesiredStateEnum | string;
    public constructor() { 
    }
    public withAppVersion(appVersion: string): UpdateEdgeModuleReqDTO {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withModuleName(moduleName: string): UpdateEdgeModuleReqDTO {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withContainerSettings(containerSettings: ContainerSettingsReqDTO): UpdateEdgeModuleReqDTO {
        this['container_settings'] = containerSettings;
        return this;
    }
    public set containerSettings(containerSettings: ContainerSettingsReqDTO  | undefined) {
        this['container_settings'] = containerSettings;
    }
    public get containerSettings(): ContainerSettingsReqDTO | undefined {
        return this['container_settings'];
    }
    public withDesiredState(desiredState: UpdateEdgeModuleReqDTODesiredStateEnum | string): UpdateEdgeModuleReqDTO {
        this['desired_state'] = desiredState;
        return this;
    }
    public set desiredState(desiredState: UpdateEdgeModuleReqDTODesiredStateEnum | string  | undefined) {
        this['desired_state'] = desiredState;
    }
    public get desiredState(): UpdateEdgeModuleReqDTODesiredStateEnum | string | undefined {
        return this['desired_state'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateEdgeModuleReqDTODesiredStateEnum {
    RUNNING = 'RUNNING',
    STOPPED = 'STOPPED'
}
