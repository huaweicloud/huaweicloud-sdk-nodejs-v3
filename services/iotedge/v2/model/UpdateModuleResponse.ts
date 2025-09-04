
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateModuleResponse extends SdkResponse {
    private 'edge_app_id'?: string;
    private 'app_version'?: string;
    public state?: UpdateModuleResponseStateEnum | string;
    private 'control_status'?: string;
    private 'node_id'?: string;
    private 'module_name'?: string;
    private 'module_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'app_type'?: UpdateModuleResponseAppTypeEnum | string;
    private 'function_type'?: UpdateModuleResponseFunctionTypeEnum | string;
    public constructor() { 
        super();
    }
    public withEdgeAppId(edgeAppId: string): UpdateModuleResponse {
        this['edge_app_id'] = edgeAppId;
        return this;
    }
    public set edgeAppId(edgeAppId: string  | undefined) {
        this['edge_app_id'] = edgeAppId;
    }
    public get edgeAppId(): string | undefined {
        return this['edge_app_id'];
    }
    public withAppVersion(appVersion: string): UpdateModuleResponse {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withState(state: UpdateModuleResponseStateEnum | string): UpdateModuleResponse {
        this['state'] = state;
        return this;
    }
    public withControlStatus(controlStatus: string): UpdateModuleResponse {
        this['control_status'] = controlStatus;
        return this;
    }
    public set controlStatus(controlStatus: string  | undefined) {
        this['control_status'] = controlStatus;
    }
    public get controlStatus(): string | undefined {
        return this['control_status'];
    }
    public withNodeId(nodeId: string): UpdateModuleResponse {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withModuleName(moduleName: string): UpdateModuleResponse {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withModuleId(moduleId: string): UpdateModuleResponse {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withCreateTime(createTime: string): UpdateModuleResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): UpdateModuleResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withAppType(appType: UpdateModuleResponseAppTypeEnum | string): UpdateModuleResponse {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: UpdateModuleResponseAppTypeEnum | string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): UpdateModuleResponseAppTypeEnum | string | undefined {
        return this['app_type'];
    }
    public withFunctionType(functionType: UpdateModuleResponseFunctionTypeEnum | string): UpdateModuleResponse {
        this['function_type'] = functionType;
        return this;
    }
    public set functionType(functionType: UpdateModuleResponseFunctionTypeEnum | string  | undefined) {
        this['function_type'] = functionType;
    }
    public get functionType(): UpdateModuleResponseFunctionTypeEnum | string | undefined {
        return this['function_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateModuleResponseStateEnum {
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
export enum UpdateModuleResponseAppTypeEnum {
    SYSTEM_REQUIRED = 'SYSTEM_REQUIRED',
    SYSTEM_OPTIONAL = 'SYSTEM_OPTIONAL',
    USER = 'USER'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateModuleResponseFunctionTypeEnum {
    DATA_PROCESSING = 'DATA_PROCESSING',
    PROTOCOL_PARSING = 'PROTOCOL_PARSING',
    ON_PREMISE_INTEGRATION = 'ON_PREMISE_INTEGRATION',
    GATEWAY_MANAGER = 'GATEWAY_MANAGER',
    COMPOSITE_APPLICATION = 'COMPOSITE_APPLICATION',
    DATA_COLLECTION = 'DATA_COLLECTION'
}
