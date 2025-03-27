import { CustomImage } from './CustomImage';
import { FuncLogConfig } from './FuncLogConfig';
import { FuncVpc } from './FuncVpc';
import { MountConfig } from './MountConfig';
import { NetworkControlConfig } from './NetworkControlConfig';
import { StrategyConfig } from './StrategyConfig';


export class UpdateFunctionConfigRequestBody {
    private 'func_name'?: string;
    public runtime?: UpdateFunctionConfigRequestBodyRuntimeEnum | string;
    public timeout?: number;
    public handler?: string;
    private 'memory_size'?: number;
    private 'gpu_memory'?: number;
    private 'gpu_type'?: string;
    private 'user_data'?: string;
    private 'encrypted_user_data'?: string;
    public xrole?: string;
    private 'app_xrole'?: string;
    public description?: string;
    private 'func_vpc'?: FuncVpc;
    private 'peering_cidr'?: string;
    private 'mount_config'?: MountConfig;
    private 'strategy_config'?: StrategyConfig;
    private 'custom_image'?: CustomImage;
    private 'extend_config'?: string;
    private 'initializer_handler'?: string;
    private 'initializer_timeout'?: number;
    private 'pre_stop_handler'?: string;
    private 'pre_stop_timeout'?: number;
    private 'ephemeral_storage'?: number;
    private 'enterprise_project_id'?: string;
    private 'log_config'?: FuncLogConfig;
    private 'network_controller'?: NetworkControlConfig;
    private 'is_stateful_function'?: boolean;
    private 'enable_dynamic_memory'?: boolean;
    private 'enable_auth_in_header'?: boolean;
    private 'domain_names'?: string;
    private 'restore_hook_handler'?: string;
    private 'restore_hook_timeout'?: number;
    private 'heartbeat_handler'?: string;
    private 'enable_class_isolation'?: boolean;
    private 'enable_lts_log'?: boolean;
    private 'lts_custom_tag'?: { [key: string]: string; };
    public constructor(funcName?: string, runtime?: string, timeout?: number, handler?: string, memorySize?: number) { 
        this['func_name'] = funcName;
        this['runtime'] = runtime;
        this['timeout'] = timeout;
        this['handler'] = handler;
        this['memory_size'] = memorySize;
    }
    public withFuncName(funcName: string): UpdateFunctionConfigRequestBody {
        this['func_name'] = funcName;
        return this;
    }
    public set funcName(funcName: string  | undefined) {
        this['func_name'] = funcName;
    }
    public get funcName(): string | undefined {
        return this['func_name'];
    }
    public withRuntime(runtime: UpdateFunctionConfigRequestBodyRuntimeEnum | string): UpdateFunctionConfigRequestBody {
        this['runtime'] = runtime;
        return this;
    }
    public withTimeout(timeout: number): UpdateFunctionConfigRequestBody {
        this['timeout'] = timeout;
        return this;
    }
    public withHandler(handler: string): UpdateFunctionConfigRequestBody {
        this['handler'] = handler;
        return this;
    }
    public withMemorySize(memorySize: number): UpdateFunctionConfigRequestBody {
        this['memory_size'] = memorySize;
        return this;
    }
    public set memorySize(memorySize: number  | undefined) {
        this['memory_size'] = memorySize;
    }
    public get memorySize(): number | undefined {
        return this['memory_size'];
    }
    public withGpuMemory(gpuMemory: number): UpdateFunctionConfigRequestBody {
        this['gpu_memory'] = gpuMemory;
        return this;
    }
    public set gpuMemory(gpuMemory: number  | undefined) {
        this['gpu_memory'] = gpuMemory;
    }
    public get gpuMemory(): number | undefined {
        return this['gpu_memory'];
    }
    public withGpuType(gpuType: string): UpdateFunctionConfigRequestBody {
        this['gpu_type'] = gpuType;
        return this;
    }
    public set gpuType(gpuType: string  | undefined) {
        this['gpu_type'] = gpuType;
    }
    public get gpuType(): string | undefined {
        return this['gpu_type'];
    }
    public withUserData(userData: string): UpdateFunctionConfigRequestBody {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withEncryptedUserData(encryptedUserData: string): UpdateFunctionConfigRequestBody {
        this['encrypted_user_data'] = encryptedUserData;
        return this;
    }
    public set encryptedUserData(encryptedUserData: string  | undefined) {
        this['encrypted_user_data'] = encryptedUserData;
    }
    public get encryptedUserData(): string | undefined {
        return this['encrypted_user_data'];
    }
    public withXrole(xrole: string): UpdateFunctionConfigRequestBody {
        this['xrole'] = xrole;
        return this;
    }
    public withAppXrole(appXrole: string): UpdateFunctionConfigRequestBody {
        this['app_xrole'] = appXrole;
        return this;
    }
    public set appXrole(appXrole: string  | undefined) {
        this['app_xrole'] = appXrole;
    }
    public get appXrole(): string | undefined {
        return this['app_xrole'];
    }
    public withDescription(description: string): UpdateFunctionConfigRequestBody {
        this['description'] = description;
        return this;
    }
    public withFuncVpc(funcVpc: FuncVpc): UpdateFunctionConfigRequestBody {
        this['func_vpc'] = funcVpc;
        return this;
    }
    public set funcVpc(funcVpc: FuncVpc  | undefined) {
        this['func_vpc'] = funcVpc;
    }
    public get funcVpc(): FuncVpc | undefined {
        return this['func_vpc'];
    }
    public withPeeringCidr(peeringCidr: string): UpdateFunctionConfigRequestBody {
        this['peering_cidr'] = peeringCidr;
        return this;
    }
    public set peeringCidr(peeringCidr: string  | undefined) {
        this['peering_cidr'] = peeringCidr;
    }
    public get peeringCidr(): string | undefined {
        return this['peering_cidr'];
    }
    public withMountConfig(mountConfig: MountConfig): UpdateFunctionConfigRequestBody {
        this['mount_config'] = mountConfig;
        return this;
    }
    public set mountConfig(mountConfig: MountConfig  | undefined) {
        this['mount_config'] = mountConfig;
    }
    public get mountConfig(): MountConfig | undefined {
        return this['mount_config'];
    }
    public withStrategyConfig(strategyConfig: StrategyConfig): UpdateFunctionConfigRequestBody {
        this['strategy_config'] = strategyConfig;
        return this;
    }
    public set strategyConfig(strategyConfig: StrategyConfig  | undefined) {
        this['strategy_config'] = strategyConfig;
    }
    public get strategyConfig(): StrategyConfig | undefined {
        return this['strategy_config'];
    }
    public withCustomImage(customImage: CustomImage): UpdateFunctionConfigRequestBody {
        this['custom_image'] = customImage;
        return this;
    }
    public set customImage(customImage: CustomImage  | undefined) {
        this['custom_image'] = customImage;
    }
    public get customImage(): CustomImage | undefined {
        return this['custom_image'];
    }
    public withExtendConfig(extendConfig: string): UpdateFunctionConfigRequestBody {
        this['extend_config'] = extendConfig;
        return this;
    }
    public set extendConfig(extendConfig: string  | undefined) {
        this['extend_config'] = extendConfig;
    }
    public get extendConfig(): string | undefined {
        return this['extend_config'];
    }
    public withInitializerHandler(initializerHandler: string): UpdateFunctionConfigRequestBody {
        this['initializer_handler'] = initializerHandler;
        return this;
    }
    public set initializerHandler(initializerHandler: string  | undefined) {
        this['initializer_handler'] = initializerHandler;
    }
    public get initializerHandler(): string | undefined {
        return this['initializer_handler'];
    }
    public withInitializerTimeout(initializerTimeout: number): UpdateFunctionConfigRequestBody {
        this['initializer_timeout'] = initializerTimeout;
        return this;
    }
    public set initializerTimeout(initializerTimeout: number  | undefined) {
        this['initializer_timeout'] = initializerTimeout;
    }
    public get initializerTimeout(): number | undefined {
        return this['initializer_timeout'];
    }
    public withPreStopHandler(preStopHandler: string): UpdateFunctionConfigRequestBody {
        this['pre_stop_handler'] = preStopHandler;
        return this;
    }
    public set preStopHandler(preStopHandler: string  | undefined) {
        this['pre_stop_handler'] = preStopHandler;
    }
    public get preStopHandler(): string | undefined {
        return this['pre_stop_handler'];
    }
    public withPreStopTimeout(preStopTimeout: number): UpdateFunctionConfigRequestBody {
        this['pre_stop_timeout'] = preStopTimeout;
        return this;
    }
    public set preStopTimeout(preStopTimeout: number  | undefined) {
        this['pre_stop_timeout'] = preStopTimeout;
    }
    public get preStopTimeout(): number | undefined {
        return this['pre_stop_timeout'];
    }
    public withEphemeralStorage(ephemeralStorage: number): UpdateFunctionConfigRequestBody {
        this['ephemeral_storage'] = ephemeralStorage;
        return this;
    }
    public set ephemeralStorage(ephemeralStorage: number  | undefined) {
        this['ephemeral_storage'] = ephemeralStorage;
    }
    public get ephemeralStorage(): number | undefined {
        return this['ephemeral_storage'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateFunctionConfigRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLogConfig(logConfig: FuncLogConfig): UpdateFunctionConfigRequestBody {
        this['log_config'] = logConfig;
        return this;
    }
    public set logConfig(logConfig: FuncLogConfig  | undefined) {
        this['log_config'] = logConfig;
    }
    public get logConfig(): FuncLogConfig | undefined {
        return this['log_config'];
    }
    public withNetworkController(networkController: NetworkControlConfig): UpdateFunctionConfigRequestBody {
        this['network_controller'] = networkController;
        return this;
    }
    public set networkController(networkController: NetworkControlConfig  | undefined) {
        this['network_controller'] = networkController;
    }
    public get networkController(): NetworkControlConfig | undefined {
        return this['network_controller'];
    }
    public withIsStatefulFunction(isStatefulFunction: boolean): UpdateFunctionConfigRequestBody {
        this['is_stateful_function'] = isStatefulFunction;
        return this;
    }
    public set isStatefulFunction(isStatefulFunction: boolean  | undefined) {
        this['is_stateful_function'] = isStatefulFunction;
    }
    public get isStatefulFunction(): boolean | undefined {
        return this['is_stateful_function'];
    }
    public withEnableDynamicMemory(enableDynamicMemory: boolean): UpdateFunctionConfigRequestBody {
        this['enable_dynamic_memory'] = enableDynamicMemory;
        return this;
    }
    public set enableDynamicMemory(enableDynamicMemory: boolean  | undefined) {
        this['enable_dynamic_memory'] = enableDynamicMemory;
    }
    public get enableDynamicMemory(): boolean | undefined {
        return this['enable_dynamic_memory'];
    }
    public withEnableAuthInHeader(enableAuthInHeader: boolean): UpdateFunctionConfigRequestBody {
        this['enable_auth_in_header'] = enableAuthInHeader;
        return this;
    }
    public set enableAuthInHeader(enableAuthInHeader: boolean  | undefined) {
        this['enable_auth_in_header'] = enableAuthInHeader;
    }
    public get enableAuthInHeader(): boolean | undefined {
        return this['enable_auth_in_header'];
    }
    public withDomainNames(domainNames: string): UpdateFunctionConfigRequestBody {
        this['domain_names'] = domainNames;
        return this;
    }
    public set domainNames(domainNames: string  | undefined) {
        this['domain_names'] = domainNames;
    }
    public get domainNames(): string | undefined {
        return this['domain_names'];
    }
    public withRestoreHookHandler(restoreHookHandler: string): UpdateFunctionConfigRequestBody {
        this['restore_hook_handler'] = restoreHookHandler;
        return this;
    }
    public set restoreHookHandler(restoreHookHandler: string  | undefined) {
        this['restore_hook_handler'] = restoreHookHandler;
    }
    public get restoreHookHandler(): string | undefined {
        return this['restore_hook_handler'];
    }
    public withRestoreHookTimeout(restoreHookTimeout: number): UpdateFunctionConfigRequestBody {
        this['restore_hook_timeout'] = restoreHookTimeout;
        return this;
    }
    public set restoreHookTimeout(restoreHookTimeout: number  | undefined) {
        this['restore_hook_timeout'] = restoreHookTimeout;
    }
    public get restoreHookTimeout(): number | undefined {
        return this['restore_hook_timeout'];
    }
    public withHeartbeatHandler(heartbeatHandler: string): UpdateFunctionConfigRequestBody {
        this['heartbeat_handler'] = heartbeatHandler;
        return this;
    }
    public set heartbeatHandler(heartbeatHandler: string  | undefined) {
        this['heartbeat_handler'] = heartbeatHandler;
    }
    public get heartbeatHandler(): string | undefined {
        return this['heartbeat_handler'];
    }
    public withEnableClassIsolation(enableClassIsolation: boolean): UpdateFunctionConfigRequestBody {
        this['enable_class_isolation'] = enableClassIsolation;
        return this;
    }
    public set enableClassIsolation(enableClassIsolation: boolean  | undefined) {
        this['enable_class_isolation'] = enableClassIsolation;
    }
    public get enableClassIsolation(): boolean | undefined {
        return this['enable_class_isolation'];
    }
    public withEnableLtsLog(enableLtsLog: boolean): UpdateFunctionConfigRequestBody {
        this['enable_lts_log'] = enableLtsLog;
        return this;
    }
    public set enableLtsLog(enableLtsLog: boolean  | undefined) {
        this['enable_lts_log'] = enableLtsLog;
    }
    public get enableLtsLog(): boolean | undefined {
        return this['enable_lts_log'];
    }
    public withLtsCustomTag(ltsCustomTag: { [key: string]: string; }): UpdateFunctionConfigRequestBody {
        this['lts_custom_tag'] = ltsCustomTag;
        return this;
    }
    public set ltsCustomTag(ltsCustomTag: { [key: string]: string; }  | undefined) {
        this['lts_custom_tag'] = ltsCustomTag;
    }
    public get ltsCustomTag(): { [key: string]: string; } | undefined {
        return this['lts_custom_tag'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateFunctionConfigRequestBodyRuntimeEnum {
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
