import { CustomImage } from './CustomImage';
import { FunctionAsyncConfig } from './FunctionAsyncConfig';
import { StrategyConfig } from './StrategyConfig';


export class ListFunctionVersionResult {
    private 'func_urn'?: string;
    private 'func_name'?: string;
    private 'domain_id'?: string;
    public namespace?: string;
    private 'project_name'?: string;
    private 'package'?: string;
    public runtime?: ListFunctionVersionResultRuntimeEnum | string;
    public timeout?: number;
    public handler?: string;
    private 'memory_size'?: number;
    public cpu?: number;
    private 'code_type'?: ListFunctionVersionResultCodeTypeEnum | string;
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
    private 'last_modified'?: Date;
    private 'func_vpc_id'?: string;
    public concurrency?: number;
    private 'concurrent_num'?: number;
    private 'strategy_config'?: StrategyConfig;
    private 'initializer_handler'?: string;
    private 'initializer_timeout'?: number;
    private 'pre_stop_handler'?: string;
    private 'pre_stop_timeout'?: number;
    private 'long_time'?: boolean;
    private 'function_async_config'?: FunctionAsyncConfig;
    public type?: string;
    private 'enable_dynamic_memory'?: boolean;
    private 'enterprise_project_id'?: string;
    private 'is_stateful_function'?: boolean;
    private 'enable_auth_in_header'?: boolean;
    private 'custom_image'?: CustomImage;
    private 'reserved_instance_idle_mode'?: boolean;
    public constructor(funcUrn?: string, funcName?: string, domainId?: string, namespace?: string, projectName?: string, _package?: string, runtime?: string, timeout?: number, handler?: string, memorySize?: number, cpu?: number, codeType?: string, codeSize?: number, digest?: string, version?: string, imageName?: string, lastModified?: Date) { 
        this['func_urn'] = funcUrn;
        this['func_name'] = funcName;
        this['domain_id'] = domainId;
        this['namespace'] = namespace;
        this['project_name'] = projectName;
        this['package'] = _package;
        this['runtime'] = runtime;
        this['timeout'] = timeout;
        this['handler'] = handler;
        this['memory_size'] = memorySize;
        this['cpu'] = cpu;
        this['code_type'] = codeType;
        this['code_size'] = codeSize;
        this['digest'] = digest;
        this['version'] = version;
        this['image_name'] = imageName;
        this['last_modified'] = lastModified;
    }
    public withFuncUrn(funcUrn: string): ListFunctionVersionResult {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string  | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn(): string | undefined {
        return this['func_urn'];
    }
    public withFuncName(funcName: string): ListFunctionVersionResult {
        this['func_name'] = funcName;
        return this;
    }
    public set funcName(funcName: string  | undefined) {
        this['func_name'] = funcName;
    }
    public get funcName(): string | undefined {
        return this['func_name'];
    }
    public withDomainId(domainId: string): ListFunctionVersionResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withNamespace(namespace: string): ListFunctionVersionResult {
        this['namespace'] = namespace;
        return this;
    }
    public withProjectName(projectName: string): ListFunctionVersionResult {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withPackage(_package: string): ListFunctionVersionResult {
        this['package'] = _package;
        return this;
    }
    public set _package(_package: string  | undefined) {
        this['package'] = _package;
    }
    public get _package(): string | undefined {
        return this['package'];
    }
    public withRuntime(runtime: ListFunctionVersionResultRuntimeEnum | string): ListFunctionVersionResult {
        this['runtime'] = runtime;
        return this;
    }
    public withTimeout(timeout: number): ListFunctionVersionResult {
        this['timeout'] = timeout;
        return this;
    }
    public withHandler(handler: string): ListFunctionVersionResult {
        this['handler'] = handler;
        return this;
    }
    public withMemorySize(memorySize: number): ListFunctionVersionResult {
        this['memory_size'] = memorySize;
        return this;
    }
    public set memorySize(memorySize: number  | undefined) {
        this['memory_size'] = memorySize;
    }
    public get memorySize(): number | undefined {
        return this['memory_size'];
    }
    public withCpu(cpu: number): ListFunctionVersionResult {
        this['cpu'] = cpu;
        return this;
    }
    public withCodeType(codeType: ListFunctionVersionResultCodeTypeEnum | string): ListFunctionVersionResult {
        this['code_type'] = codeType;
        return this;
    }
    public set codeType(codeType: ListFunctionVersionResultCodeTypeEnum | string  | undefined) {
        this['code_type'] = codeType;
    }
    public get codeType(): ListFunctionVersionResultCodeTypeEnum | string | undefined {
        return this['code_type'];
    }
    public withCodeUrl(codeUrl: string): ListFunctionVersionResult {
        this['code_url'] = codeUrl;
        return this;
    }
    public set codeUrl(codeUrl: string  | undefined) {
        this['code_url'] = codeUrl;
    }
    public get codeUrl(): string | undefined {
        return this['code_url'];
    }
    public withCodeFilename(codeFilename: string): ListFunctionVersionResult {
        this['code_filename'] = codeFilename;
        return this;
    }
    public set codeFilename(codeFilename: string  | undefined) {
        this['code_filename'] = codeFilename;
    }
    public get codeFilename(): string | undefined {
        return this['code_filename'];
    }
    public withCodeSize(codeSize: number): ListFunctionVersionResult {
        this['code_size'] = codeSize;
        return this;
    }
    public set codeSize(codeSize: number  | undefined) {
        this['code_size'] = codeSize;
    }
    public get codeSize(): number | undefined {
        return this['code_size'];
    }
    public withUserData(userData: string): ListFunctionVersionResult {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withEncryptedUserData(encryptedUserData: string): ListFunctionVersionResult {
        this['encrypted_user_data'] = encryptedUserData;
        return this;
    }
    public set encryptedUserData(encryptedUserData: string  | undefined) {
        this['encrypted_user_data'] = encryptedUserData;
    }
    public get encryptedUserData(): string | undefined {
        return this['encrypted_user_data'];
    }
    public withDigest(digest: string): ListFunctionVersionResult {
        this['digest'] = digest;
        return this;
    }
    public withVersion(version: string): ListFunctionVersionResult {
        this['version'] = version;
        return this;
    }
    public withImageName(imageName: string): ListFunctionVersionResult {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withXrole(xrole: string): ListFunctionVersionResult {
        this['xrole'] = xrole;
        return this;
    }
    public withAppXrole(appXrole: string): ListFunctionVersionResult {
        this['app_xrole'] = appXrole;
        return this;
    }
    public set appXrole(appXrole: string  | undefined) {
        this['app_xrole'] = appXrole;
    }
    public get appXrole(): string | undefined {
        return this['app_xrole'];
    }
    public withLastModified(lastModified: Date): ListFunctionVersionResult {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: Date  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): Date | undefined {
        return this['last_modified'];
    }
    public withFuncVpcId(funcVpcId: string): ListFunctionVersionResult {
        this['func_vpc_id'] = funcVpcId;
        return this;
    }
    public set funcVpcId(funcVpcId: string  | undefined) {
        this['func_vpc_id'] = funcVpcId;
    }
    public get funcVpcId(): string | undefined {
        return this['func_vpc_id'];
    }
    public withConcurrency(concurrency: number): ListFunctionVersionResult {
        this['concurrency'] = concurrency;
        return this;
    }
    public withConcurrentNum(concurrentNum: number): ListFunctionVersionResult {
        this['concurrent_num'] = concurrentNum;
        return this;
    }
    public set concurrentNum(concurrentNum: number  | undefined) {
        this['concurrent_num'] = concurrentNum;
    }
    public get concurrentNum(): number | undefined {
        return this['concurrent_num'];
    }
    public withStrategyConfig(strategyConfig: StrategyConfig): ListFunctionVersionResult {
        this['strategy_config'] = strategyConfig;
        return this;
    }
    public set strategyConfig(strategyConfig: StrategyConfig  | undefined) {
        this['strategy_config'] = strategyConfig;
    }
    public get strategyConfig(): StrategyConfig | undefined {
        return this['strategy_config'];
    }
    public withInitializerHandler(initializerHandler: string): ListFunctionVersionResult {
        this['initializer_handler'] = initializerHandler;
        return this;
    }
    public set initializerHandler(initializerHandler: string  | undefined) {
        this['initializer_handler'] = initializerHandler;
    }
    public get initializerHandler(): string | undefined {
        return this['initializer_handler'];
    }
    public withInitializerTimeout(initializerTimeout: number): ListFunctionVersionResult {
        this['initializer_timeout'] = initializerTimeout;
        return this;
    }
    public set initializerTimeout(initializerTimeout: number  | undefined) {
        this['initializer_timeout'] = initializerTimeout;
    }
    public get initializerTimeout(): number | undefined {
        return this['initializer_timeout'];
    }
    public withPreStopHandler(preStopHandler: string): ListFunctionVersionResult {
        this['pre_stop_handler'] = preStopHandler;
        return this;
    }
    public set preStopHandler(preStopHandler: string  | undefined) {
        this['pre_stop_handler'] = preStopHandler;
    }
    public get preStopHandler(): string | undefined {
        return this['pre_stop_handler'];
    }
    public withPreStopTimeout(preStopTimeout: number): ListFunctionVersionResult {
        this['pre_stop_timeout'] = preStopTimeout;
        return this;
    }
    public set preStopTimeout(preStopTimeout: number  | undefined) {
        this['pre_stop_timeout'] = preStopTimeout;
    }
    public get preStopTimeout(): number | undefined {
        return this['pre_stop_timeout'];
    }
    public withLongTime(longTime: boolean): ListFunctionVersionResult {
        this['long_time'] = longTime;
        return this;
    }
    public set longTime(longTime: boolean  | undefined) {
        this['long_time'] = longTime;
    }
    public get longTime(): boolean | undefined {
        return this['long_time'];
    }
    public withFunctionAsyncConfig(functionAsyncConfig: FunctionAsyncConfig): ListFunctionVersionResult {
        this['function_async_config'] = functionAsyncConfig;
        return this;
    }
    public set functionAsyncConfig(functionAsyncConfig: FunctionAsyncConfig  | undefined) {
        this['function_async_config'] = functionAsyncConfig;
    }
    public get functionAsyncConfig(): FunctionAsyncConfig | undefined {
        return this['function_async_config'];
    }
    public withType(type: string): ListFunctionVersionResult {
        this['type'] = type;
        return this;
    }
    public withEnableDynamicMemory(enableDynamicMemory: boolean): ListFunctionVersionResult {
        this['enable_dynamic_memory'] = enableDynamicMemory;
        return this;
    }
    public set enableDynamicMemory(enableDynamicMemory: boolean  | undefined) {
        this['enable_dynamic_memory'] = enableDynamicMemory;
    }
    public get enableDynamicMemory(): boolean | undefined {
        return this['enable_dynamic_memory'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListFunctionVersionResult {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withIsStatefulFunction(isStatefulFunction: boolean): ListFunctionVersionResult {
        this['is_stateful_function'] = isStatefulFunction;
        return this;
    }
    public set isStatefulFunction(isStatefulFunction: boolean  | undefined) {
        this['is_stateful_function'] = isStatefulFunction;
    }
    public get isStatefulFunction(): boolean | undefined {
        return this['is_stateful_function'];
    }
    public withEnableAuthInHeader(enableAuthInHeader: boolean): ListFunctionVersionResult {
        this['enable_auth_in_header'] = enableAuthInHeader;
        return this;
    }
    public set enableAuthInHeader(enableAuthInHeader: boolean  | undefined) {
        this['enable_auth_in_header'] = enableAuthInHeader;
    }
    public get enableAuthInHeader(): boolean | undefined {
        return this['enable_auth_in_header'];
    }
    public withCustomImage(customImage: CustomImage): ListFunctionVersionResult {
        this['custom_image'] = customImage;
        return this;
    }
    public set customImage(customImage: CustomImage  | undefined) {
        this['custom_image'] = customImage;
    }
    public get customImage(): CustomImage | undefined {
        return this['custom_image'];
    }
    public withReservedInstanceIdleMode(reservedInstanceIdleMode: boolean): ListFunctionVersionResult {
        this['reserved_instance_idle_mode'] = reservedInstanceIdleMode;
        return this;
    }
    public set reservedInstanceIdleMode(reservedInstanceIdleMode: boolean  | undefined) {
        this['reserved_instance_idle_mode'] = reservedInstanceIdleMode;
    }
    public get reservedInstanceIdleMode(): boolean | undefined {
        return this['reserved_instance_idle_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFunctionVersionResultRuntimeEnum {
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
export enum ListFunctionVersionResultCodeTypeEnum {
    INLINE = 'inline',
    ZIP = 'zip',
    OBS = 'obs',
    JAR = 'jar',
    CUSTOM_IMAGE_SWR = 'Custom-Image-Swr'
}
