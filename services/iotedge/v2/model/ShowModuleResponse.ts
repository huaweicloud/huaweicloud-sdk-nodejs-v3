import { ModuleContainerSettingsResDTO } from './ModuleContainerSettingsResDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowModuleResponse extends SdkResponse {
    private 'edge_app_id'?: string;
    private 'app_version'?: string;
    public state?: ShowModuleResponseStateEnum | string;
    private 'control_status'?: string;
    private 'node_id'?: string;
    private 'module_name'?: string;
    private 'module_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'app_type'?: ShowModuleResponseAppTypeEnum | string;
    private 'function_type'?: ShowModuleResponseFunctionTypeEnum | string;
    private 'container_settings'?: ModuleContainerSettingsResDTO;
    public constructor() { 
        super();
    }
    public withEdgeAppId(edgeAppId: string): ShowModuleResponse {
        this['edge_app_id'] = edgeAppId;
        return this;
    }
    public set edgeAppId(edgeAppId: string  | undefined) {
        this['edge_app_id'] = edgeAppId;
    }
    public get edgeAppId(): string | undefined {
        return this['edge_app_id'];
    }
    public withAppVersion(appVersion: string): ShowModuleResponse {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withState(state: ShowModuleResponseStateEnum | string): ShowModuleResponse {
        this['state'] = state;
        return this;
    }
    public withControlStatus(controlStatus: string): ShowModuleResponse {
        this['control_status'] = controlStatus;
        return this;
    }
    public set controlStatus(controlStatus: string  | undefined) {
        this['control_status'] = controlStatus;
    }
    public get controlStatus(): string | undefined {
        return this['control_status'];
    }
    public withNodeId(nodeId: string): ShowModuleResponse {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withModuleName(moduleName: string): ShowModuleResponse {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withModuleId(moduleId: string): ShowModuleResponse {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withCreateTime(createTime: string): ShowModuleResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowModuleResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withAppType(appType: ShowModuleResponseAppTypeEnum | string): ShowModuleResponse {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: ShowModuleResponseAppTypeEnum | string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): ShowModuleResponseAppTypeEnum | string | undefined {
        return this['app_type'];
    }
    public withFunctionType(functionType: ShowModuleResponseFunctionTypeEnum | string): ShowModuleResponse {
        this['function_type'] = functionType;
        return this;
    }
    public set functionType(functionType: ShowModuleResponseFunctionTypeEnum | string  | undefined) {
        this['function_type'] = functionType;
    }
    public get functionType(): ShowModuleResponseFunctionTypeEnum | string | undefined {
        return this['function_type'];
    }
    public withContainerSettings(containerSettings: ModuleContainerSettingsResDTO): ShowModuleResponse {
        this['container_settings'] = containerSettings;
        return this;
    }
    public set containerSettings(containerSettings: ModuleContainerSettingsResDTO  | undefined) {
        this['container_settings'] = containerSettings;
    }
    public get containerSettings(): ModuleContainerSettingsResDTO | undefined {
        return this['container_settings'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowModuleResponseStateEnum {
    PENDING = 'PENDING',
    PENDING_DELETE = 'PENDING_DELETE',
    DELETE_FAILED = 'DELETE_FAILED',
    RUNNING = 'RUNNING',
    FAILED = 'FAILED',
    SUCCEEDED = 'SUCCEEDED',
    UNKNOWN = 'UNKNOWN',
    DELETE_SUCCESS = 'DELETE_SUCCESS',
    STOPPED = 'STOPPED'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowModuleResponseAppTypeEnum {
    SYSTEM_REQUIRED = 'SYSTEM_REQUIRED',
    SYSTEM_OPTIONAL = 'SYSTEM_OPTIONAL',
    USER = 'USER'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowModuleResponseFunctionTypeEnum {
    DATA_PROCESSING = 'DATA_PROCESSING',
    PROTOCOL_PARSING = 'PROTOCOL_PARSING',
    ON_PREMISE_INTEGRATION = 'ON_PREMISE_INTEGRATION',
    GATEWAY_MANAGER = 'GATEWAY_MANAGER',
    COMPOSITE_APPLICATION = 'COMPOSITE_APPLICATION',
    DATA_COLLECTION = 'DATA_COLLECTION'
}
