import { CustomImage } from './CustomImage';
import { Dependency } from './Dependency';
import { FuncVpc } from './FuncVpc';
import { MountConfig } from './MountConfig';
import { NetworkControlConfig } from './NetworkControlConfig';
import { StrategyConfig } from './StrategyConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFunctionConfigResponse extends SdkResponse {
    private 'func_id'?: string;
    private 'resource_id'?: string;
    private 'func_urn'?: string;
    private 'func_name'?: string;
    private 'domain_id'?: string;
    public namespace?: string;
    private 'project_name'?: string;
    private 'package'?: string;
    public runtime?: ShowFunctionConfigResponseRuntimeEnum | string;
    public timeout?: number;
    public handler?: string;
    private 'memory_size'?: number;
    private 'gpu_memory'?: number;
    public cpu?: number;
    private 'code_type'?: ShowFunctionConfigResponseCodeTypeEnum | string;
    private 'code_url'?: string;
    private 'code_filename'?: string;
    private 'code_size'?: number;
    private 'user_data'?: string;
    private 'encrypted_user_data'?: string;
    public digest?: string;
    public version?: string;
    private 'image_name'?: string;
    public xrole?: string;
    private 'app_xrole'?: string;
    public description?: string;
    private 'last_modified'?: Date;
    private 'ephemeral_storage'?: number;
    private 'func_vpc'?: FuncVpc;
    private 'mount_config'?: MountConfig;
    private 'depend_list'?: Array<string>;
    private 'depend_version_list'?: Array<string>;
    private 'strategy_config'?: StrategyConfig;
    public dependencies?: Array<Dependency>;
    private 'initializer_handler'?: string;
    private 'initializer_timeout'?: number;
    private 'pre_stop_handler'?: string;
    private 'pre_stop_timeout'?: number;
    private 'enterprise_project_id'?: string;
    private 'long_time'?: boolean;
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    public type?: ShowFunctionConfigResponseTypeEnum | string;
    private 'enable_cloud_debug'?: string;
    private 'enable_dynamic_memory'?: boolean;
    private 'is_stateful_function'?: boolean;
    private 'is_bridge_function'?: boolean;
    private 'enable_auth_in_header'?: boolean;
    private 'custom_image'?: CustomImage;
    private 'reserved_instance_idle_mode'?: boolean;
    private 'apig_route_enable'?: boolean;
    private 'heartbeat_handler'?: string;
    private 'enable_class_isolation'?: boolean;
    private 'gpu_type'?: string;
    private 'allow_ephemeral_storage'?: boolean;
    private 'network_controller'?: NetworkControlConfig;
    private 'is_return_stream'?: boolean;
    public constructor() { 
        super();
    }
    public withFuncId(funcId: string): ShowFunctionConfigResponse {
        this['func_id'] = funcId;
        return this;
    }
    public set funcId(funcId: string  | undefined) {
        this['func_id'] = funcId;
    }
    public get funcId(): string | undefined {
        return this['func_id'];
    }
    public withResourceId(resourceId: string): ShowFunctionConfigResponse {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withFuncUrn(funcUrn: string): ShowFunctionConfigResponse {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string  | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn(): string | undefined {
        return this['func_urn'];
    }
    public withFuncName(funcName: string): ShowFunctionConfigResponse {
        this['func_name'] = funcName;
        return this;
    }
    public set funcName(funcName: string  | undefined) {
        this['func_name'] = funcName;
    }
    public get funcName(): string | undefined {
        return this['func_name'];
    }
    public withDomainId(domainId: string): ShowFunctionConfigResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withNamespace(namespace: string): ShowFunctionConfigResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withProjectName(projectName: string): ShowFunctionConfigResponse {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withPackage(_package: string): ShowFunctionConfigResponse {
        this['package'] = _package;
        return this;
    }
    public set _package(_package: string  | undefined) {
        this['package'] = _package;
    }
    public get _package(): string | undefined {
        return this['package'];
    }
    public withRuntime(runtime: ShowFunctionConfigResponseRuntimeEnum | string): ShowFunctionConfigResponse {
        this['runtime'] = runtime;
        return this;
    }
    public withTimeout(timeout: number): ShowFunctionConfigResponse {
        this['timeout'] = timeout;
        return this;
    }
    public withHandler(handler: string): ShowFunctionConfigResponse {
        this['handler'] = handler;
        return this;
    }
    public withMemorySize(memorySize: number): ShowFunctionConfigResponse {
        this['memory_size'] = memorySize;
        return this;
    }
    public set memorySize(memorySize: number  | undefined) {
        this['memory_size'] = memorySize;
    }
    public get memorySize(): number | undefined {
        return this['memory_size'];
    }
    public withGpuMemory(gpuMemory: number): ShowFunctionConfigResponse {
        this['gpu_memory'] = gpuMemory;
        return this;
    }
    public set gpuMemory(gpuMemory: number  | undefined) {
        this['gpu_memory'] = gpuMemory;
    }
    public get gpuMemory(): number | undefined {
        return this['gpu_memory'];
    }
    public withCpu(cpu: number): ShowFunctionConfigResponse {
        this['cpu'] = cpu;
        return this;
    }
    public withCodeType(codeType: ShowFunctionConfigResponseCodeTypeEnum | string): ShowFunctionConfigResponse {
        this['code_type'] = codeType;
        return this;
    }
    public set codeType(codeType: ShowFunctionConfigResponseCodeTypeEnum | string  | undefined) {
        this['code_type'] = codeType;
    }
    public get codeType(): ShowFunctionConfigResponseCodeTypeEnum | string | undefined {
        return this['code_type'];
    }
    public withCodeUrl(codeUrl: string): ShowFunctionConfigResponse {
        this['code_url'] = codeUrl;
        return this;
    }
    public set codeUrl(codeUrl: string  | undefined) {
        this['code_url'] = codeUrl;
    }
    public get codeUrl(): string | undefined {
        return this['code_url'];
    }
    public withCodeFilename(codeFilename: string): ShowFunctionConfigResponse {
        this['code_filename'] = codeFilename;
        return this;
    }
    public set codeFilename(codeFilename: string  | undefined) {
        this['code_filename'] = codeFilename;
    }
    public get codeFilename(): string | undefined {
        return this['code_filename'];
    }
    public withCodeSize(codeSize: number): ShowFunctionConfigResponse {
        this['code_size'] = codeSize;
        return this;
    }
    public set codeSize(codeSize: number  | undefined) {
        this['code_size'] = codeSize;
    }
    public get codeSize(): number | undefined {
        return this['code_size'];
    }
    public withUserData(userData: string): ShowFunctionConfigResponse {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withEncryptedUserData(encryptedUserData: string): ShowFunctionConfigResponse {
        this['encrypted_user_data'] = encryptedUserData;
        return this;
    }
    public set encryptedUserData(encryptedUserData: string  | undefined) {
        this['encrypted_user_data'] = encryptedUserData;
    }
    public get encryptedUserData(): string | undefined {
        return this['encrypted_user_data'];
    }
    public withDigest(digest: string): ShowFunctionConfigResponse {
        this['digest'] = digest;
        return this;
    }
    public withVersion(version: string): ShowFunctionConfigResponse {
        this['version'] = version;
        return this;
    }
    public withImageName(imageName: string): ShowFunctionConfigResponse {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withXrole(xrole: string): ShowFunctionConfigResponse {
        this['xrole'] = xrole;
        return this;
    }
    public withAppXrole(appXrole: string): ShowFunctionConfigResponse {
        this['app_xrole'] = appXrole;
        return this;
    }
    public set appXrole(appXrole: string  | undefined) {
        this['app_xrole'] = appXrole;
    }
    public get appXrole(): string | undefined {
        return this['app_xrole'];
    }
    public withDescription(description: string): ShowFunctionConfigResponse {
        this['description'] = description;
        return this;
    }
    public withLastModified(lastModified: Date): ShowFunctionConfigResponse {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: Date  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): Date | undefined {
        return this['last_modified'];
    }
    public withEphemeralStorage(ephemeralStorage: number): ShowFunctionConfigResponse {
        this['ephemeral_storage'] = ephemeralStorage;
        return this;
    }
    public set ephemeralStorage(ephemeralStorage: number  | undefined) {
        this['ephemeral_storage'] = ephemeralStorage;
    }
    public get ephemeralStorage(): number | undefined {
        return this['ephemeral_storage'];
    }
    public withFuncVpc(funcVpc: FuncVpc): ShowFunctionConfigResponse {
        this['func_vpc'] = funcVpc;
        return this;
    }
    public set funcVpc(funcVpc: FuncVpc  | undefined) {
        this['func_vpc'] = funcVpc;
    }
    public get funcVpc(): FuncVpc | undefined {
        return this['func_vpc'];
    }
    public withMountConfig(mountConfig: MountConfig): ShowFunctionConfigResponse {
        this['mount_config'] = mountConfig;
        return this;
    }
    public set mountConfig(mountConfig: MountConfig  | undefined) {
        this['mount_config'] = mountConfig;
    }
    public get mountConfig(): MountConfig | undefined {
        return this['mount_config'];
    }
    public withDependList(dependList: Array<string>): ShowFunctionConfigResponse {
        this['depend_list'] = dependList;
        return this;
    }
    public set dependList(dependList: Array<string>  | undefined) {
        this['depend_list'] = dependList;
    }
    public get dependList(): Array<string> | undefined {
        return this['depend_list'];
    }
    public withDependVersionList(dependVersionList: Array<string>): ShowFunctionConfigResponse {
        this['depend_version_list'] = dependVersionList;
        return this;
    }
    public set dependVersionList(dependVersionList: Array<string>  | undefined) {
        this['depend_version_list'] = dependVersionList;
    }
    public get dependVersionList(): Array<string> | undefined {
        return this['depend_version_list'];
    }
    public withStrategyConfig(strategyConfig: StrategyConfig): ShowFunctionConfigResponse {
        this['strategy_config'] = strategyConfig;
        return this;
    }
    public set strategyConfig(strategyConfig: StrategyConfig  | undefined) {
        this['strategy_config'] = strategyConfig;
    }
    public get strategyConfig(): StrategyConfig | undefined {
        return this['strategy_config'];
    }
    public withDependencies(dependencies: Array<Dependency>): ShowFunctionConfigResponse {
        this['dependencies'] = dependencies;
        return this;
    }
    public withInitializerHandler(initializerHandler: string): ShowFunctionConfigResponse {
        this['initializer_handler'] = initializerHandler;
        return this;
    }
    public set initializerHandler(initializerHandler: string  | undefined) {
        this['initializer_handler'] = initializerHandler;
    }
    public get initializerHandler(): string | undefined {
        return this['initializer_handler'];
    }
    public withInitializerTimeout(initializerTimeout: number): ShowFunctionConfigResponse {
        this['initializer_timeout'] = initializerTimeout;
        return this;
    }
    public set initializerTimeout(initializerTimeout: number  | undefined) {
        this['initializer_timeout'] = initializerTimeout;
    }
    public get initializerTimeout(): number | undefined {
        return this['initializer_timeout'];
    }
    public withPreStopHandler(preStopHandler: string): ShowFunctionConfigResponse {
        this['pre_stop_handler'] = preStopHandler;
        return this;
    }
    public set preStopHandler(preStopHandler: string  | undefined) {
        this['pre_stop_handler'] = preStopHandler;
    }
    public get preStopHandler(): string | undefined {
        return this['pre_stop_handler'];
    }
    public withPreStopTimeout(preStopTimeout: number): ShowFunctionConfigResponse {
        this['pre_stop_timeout'] = preStopTimeout;
        return this;
    }
    public set preStopTimeout(preStopTimeout: number  | undefined) {
        this['pre_stop_timeout'] = preStopTimeout;
    }
    public get preStopTimeout(): number | undefined {
        return this['pre_stop_timeout'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowFunctionConfigResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLongTime(longTime: boolean): ShowFunctionConfigResponse {
        this['long_time'] = longTime;
        return this;
    }
    public set longTime(longTime: boolean  | undefined) {
        this['long_time'] = longTime;
    }
    public get longTime(): boolean | undefined {
        return this['long_time'];
    }
    public withLogGroupId(logGroupId: string): ShowFunctionConfigResponse {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): ShowFunctionConfigResponse {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withType(type: ShowFunctionConfigResponseTypeEnum | string): ShowFunctionConfigResponse {
        this['type'] = type;
        return this;
    }
    public withEnableCloudDebug(enableCloudDebug: string): ShowFunctionConfigResponse {
        this['enable_cloud_debug'] = enableCloudDebug;
        return this;
    }
    public set enableCloudDebug(enableCloudDebug: string  | undefined) {
        this['enable_cloud_debug'] = enableCloudDebug;
    }
    public get enableCloudDebug(): string | undefined {
        return this['enable_cloud_debug'];
    }
    public withEnableDynamicMemory(enableDynamicMemory: boolean): ShowFunctionConfigResponse {
        this['enable_dynamic_memory'] = enableDynamicMemory;
        return this;
    }
    public set enableDynamicMemory(enableDynamicMemory: boolean  | undefined) {
        this['enable_dynamic_memory'] = enableDynamicMemory;
    }
    public get enableDynamicMemory(): boolean | undefined {
        return this['enable_dynamic_memory'];
    }
    public withIsStatefulFunction(isStatefulFunction: boolean): ShowFunctionConfigResponse {
        this['is_stateful_function'] = isStatefulFunction;
        return this;
    }
    public set isStatefulFunction(isStatefulFunction: boolean  | undefined) {
        this['is_stateful_function'] = isStatefulFunction;
    }
    public get isStatefulFunction(): boolean | undefined {
        return this['is_stateful_function'];
    }
    public withIsBridgeFunction(isBridgeFunction: boolean): ShowFunctionConfigResponse {
        this['is_bridge_function'] = isBridgeFunction;
        return this;
    }
    public set isBridgeFunction(isBridgeFunction: boolean  | undefined) {
        this['is_bridge_function'] = isBridgeFunction;
    }
    public get isBridgeFunction(): boolean | undefined {
        return this['is_bridge_function'];
    }
    public withEnableAuthInHeader(enableAuthInHeader: boolean): ShowFunctionConfigResponse {
        this['enable_auth_in_header'] = enableAuthInHeader;
        return this;
    }
    public set enableAuthInHeader(enableAuthInHeader: boolean  | undefined) {
        this['enable_auth_in_header'] = enableAuthInHeader;
    }
    public get enableAuthInHeader(): boolean | undefined {
        return this['enable_auth_in_header'];
    }
    public withCustomImage(customImage: CustomImage): ShowFunctionConfigResponse {
        this['custom_image'] = customImage;
        return this;
    }
    public set customImage(customImage: CustomImage  | undefined) {
        this['custom_image'] = customImage;
    }
    public get customImage(): CustomImage | undefined {
        return this['custom_image'];
    }
    public withReservedInstanceIdleMode(reservedInstanceIdleMode: boolean): ShowFunctionConfigResponse {
        this['reserved_instance_idle_mode'] = reservedInstanceIdleMode;
        return this;
    }
    public set reservedInstanceIdleMode(reservedInstanceIdleMode: boolean  | undefined) {
        this['reserved_instance_idle_mode'] = reservedInstanceIdleMode;
    }
    public get reservedInstanceIdleMode(): boolean | undefined {
        return this['reserved_instance_idle_mode'];
    }
    public withApigRouteEnable(apigRouteEnable: boolean): ShowFunctionConfigResponse {
        this['apig_route_enable'] = apigRouteEnable;
        return this;
    }
    public set apigRouteEnable(apigRouteEnable: boolean  | undefined) {
        this['apig_route_enable'] = apigRouteEnable;
    }
    public get apigRouteEnable(): boolean | undefined {
        return this['apig_route_enable'];
    }
    public withHeartbeatHandler(heartbeatHandler: string): ShowFunctionConfigResponse {
        this['heartbeat_handler'] = heartbeatHandler;
        return this;
    }
    public set heartbeatHandler(heartbeatHandler: string  | undefined) {
        this['heartbeat_handler'] = heartbeatHandler;
    }
    public get heartbeatHandler(): string | undefined {
        return this['heartbeat_handler'];
    }
    public withEnableClassIsolation(enableClassIsolation: boolean): ShowFunctionConfigResponse {
        this['enable_class_isolation'] = enableClassIsolation;
        return this;
    }
    public set enableClassIsolation(enableClassIsolation: boolean  | undefined) {
        this['enable_class_isolation'] = enableClassIsolation;
    }
    public get enableClassIsolation(): boolean | undefined {
        return this['enable_class_isolation'];
    }
    public withGpuType(gpuType: string): ShowFunctionConfigResponse {
        this['gpu_type'] = gpuType;
        return this;
    }
    public set gpuType(gpuType: string  | undefined) {
        this['gpu_type'] = gpuType;
    }
    public get gpuType(): string | undefined {
        return this['gpu_type'];
    }
    public withAllowEphemeralStorage(allowEphemeralStorage: boolean): ShowFunctionConfigResponse {
        this['allow_ephemeral_storage'] = allowEphemeralStorage;
        return this;
    }
    public set allowEphemeralStorage(allowEphemeralStorage: boolean  | undefined) {
        this['allow_ephemeral_storage'] = allowEphemeralStorage;
    }
    public get allowEphemeralStorage(): boolean | undefined {
        return this['allow_ephemeral_storage'];
    }
    public withNetworkController(networkController: NetworkControlConfig): ShowFunctionConfigResponse {
        this['network_controller'] = networkController;
        return this;
    }
    public set networkController(networkController: NetworkControlConfig  | undefined) {
        this['network_controller'] = networkController;
    }
    public get networkController(): NetworkControlConfig | undefined {
        return this['network_controller'];
    }
    public withIsReturnStream(isReturnStream: boolean): ShowFunctionConfigResponse {
        this['is_return_stream'] = isReturnStream;
        return this;
    }
    public set isReturnStream(isReturnStream: boolean  | undefined) {
        this['is_return_stream'] = isReturnStream;
    }
    public get isReturnStream(): boolean | undefined {
        return this['is_return_stream'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowFunctionConfigResponseRuntimeEnum {
    JAVA8 = 'Java8',
    JAVA11 = 'Java11',
    JAVA17 = 'Java17',
    PYTHON2_7 = 'Python2.7',
    PYTHON3_6 = 'Python3.6',
    PYTHON3_9 = 'Python3.9',
    PYTHON3_10 = 'Python3.10',
    GO1_8 = 'Go1.8',
    GO1_X = 'Go1.x',
    NODE_JS6_10 = 'Node.js6.10',
    NODE_JS8_10 = 'Node.js8.10',
    NODE_JS10_16 = 'Node.js10.16',
    NODE_JS12_13 = 'Node.js12.13',
    NODE_JS14_18 = 'Node.js14.18',
    NODE_JS16_17 = 'Node.js16.17',
    NODE_JS18_15 = 'Node.js18.15',
    C__NET_CORE_2_0 = 'C#(.NET Core 2.0)',
    C__NET_CORE_2_1 = 'C#(.NET Core 2.1)',
    C__NET_CORE_3_1 = 'C#(.NET Core 3.1)',
    C__NET_CORE_6_0 = 'C#(.NET Core 6.0)',
    CUSTOM = 'Custom',
    PHP7_3 = 'PHP7.3',
    CANGJIE1_0 = 'Cangjie1.0',
    HTTP = 'http',
    CUSTOM_IMAGE = 'Custom Image'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowFunctionConfigResponseCodeTypeEnum {
    INLINE = 'inline',
    ZIP = 'zip',
    OBS = 'obs',
    JAR = 'jar',
    CUSTOM_IMAGE_SWR = 'Custom-Image-Swr'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowFunctionConfigResponseTypeEnum {
    V1 = 'v1',
    V2 = 'v2'
}
