import { ContainerSettingsReqDTO } from './ContainerSettingsReqDTO';


export class CreateEdgeModuleReqDTO {
    private 'edge_app_id'?: string;
    private 'app_version'?: string;
    private 'module_name'?: string;
    private 'container_settings'?: ContainerSettingsReqDTO;
    public constructor(edgeAppId?: string, appVersion?: string) { 
        this['edge_app_id'] = edgeAppId;
        this['app_version'] = appVersion;
    }
    public withEdgeAppId(edgeAppId: string): CreateEdgeModuleReqDTO {
        this['edge_app_id'] = edgeAppId;
        return this;
    }
    public set edgeAppId(edgeAppId: string  | undefined) {
        this['edge_app_id'] = edgeAppId;
    }
    public get edgeAppId(): string | undefined {
        return this['edge_app_id'];
    }
    public withAppVersion(appVersion: string): CreateEdgeModuleReqDTO {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withModuleName(moduleName: string): CreateEdgeModuleReqDTO {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withContainerSettings(containerSettings: ContainerSettingsReqDTO): CreateEdgeModuleReqDTO {
        this['container_settings'] = containerSettings;
        return this;
    }
    public set containerSettings(containerSettings: ContainerSettingsReqDTO  | undefined) {
        this['container_settings'] = containerSettings;
    }
    public get containerSettings(): ContainerSettingsReqDTO | undefined {
        return this['container_settings'];
    }
}