import { FunctionAsyncConfig } from './FunctionAsyncConfig';
import { StrategyConfig } from './StrategyConfig';


export class ListFunctionVersionResult {
    private 'func_urn': string | undefined;
    private 'func_name': string | undefined;
    private 'domain_id': string | undefined;
    public namespace: string;
    private 'project_name': string | undefined;
    private 'package': string | undefined;
    public runtime: ListFunctionVersionResultRuntimeEnum;
    public timeout: number;
    public handler: string;
    private 'memory_size': number | undefined;
    public cpu: number;
    private 'code_type': ListFunctionVersionResultCodeTypeEnum | undefined;
    private 'code_url'?: string | undefined;
    private 'code_filename'?: string | undefined;
    private 'code_size': number | undefined;
    private 'user_data'?: string | undefined;
    private 'encrypted_user_data'?: string | undefined;
    public digest: string;
    public version: string;
    private 'image_name': string | undefined;
    public xrole?: string;
    private 'app_xrole'?: string | undefined;
    private 'last_modified': Date | undefined;
    private 'func_vpc_id'?: string | undefined;
    public concurrency?: number;
    private 'concurrent_num'?: number | undefined;
    private 'strategy_config'?: StrategyConfig | undefined;
    private 'initializer_handler'?: string | undefined;
    private 'initializer_timeout'?: number | undefined;
    private 'long_time'?: boolean | undefined;
    private 'log_group_id'?: string | undefined;
    private 'log_stream_id'?: string | undefined;
    private 'function_async_config'?: FunctionAsyncConfig | undefined;
    public type?: string;
    private 'enable_cloud_debug'?: string | undefined;
    private 'enable_dynamic_memory'?: boolean | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(funcUrn?: any, funcName?: any, domainId?: any, namespace?: any, projectName?: any, _package?: any, runtime?: any, timeout?: any, handler?: any, memorySize?: any, cpu?: any, codeType?: any, codeSize?: any, digest?: any, version?: any, imageName?: any, lastModified?: any) { 
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
    public set funcUrn(funcUrn: string | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn() {
        return this['func_urn'];
    }
    public withFuncName(funcName: string): ListFunctionVersionResult {
        this['func_name'] = funcName;
        return this;
    }
    public set funcName(funcName: string | undefined) {
        this['func_name'] = funcName;
    }
    public get funcName() {
        return this['func_name'];
    }
    public withDomainId(domainId: string): ListFunctionVersionResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
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
    public set projectName(projectName: string | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName() {
        return this['project_name'];
    }
    public withPackage(_package: string): ListFunctionVersionResult {
        this['package'] = _package;
        return this;
    }
    public set _package(_package: string | undefined) {
        this['package'] = _package;
    }
    public get _package() {
        return this['package'];
    }
    public withRuntime(runtime: ListFunctionVersionResultRuntimeEnum): ListFunctionVersionResult {
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
    public set memorySize(memorySize: number | undefined) {
        this['memory_size'] = memorySize;
    }
    public get memorySize() {
        return this['memory_size'];
    }
    public withCpu(cpu: number): ListFunctionVersionResult {
        this['cpu'] = cpu;
        return this;
    }
    public withCodeType(codeType: ListFunctionVersionResultCodeTypeEnum): ListFunctionVersionResult {
        this['code_type'] = codeType;
        return this;
    }
    public set codeType(codeType: ListFunctionVersionResultCodeTypeEnum | undefined) {
        this['code_type'] = codeType;
    }
    public get codeType() {
        return this['code_type'];
    }
    public withCodeUrl(codeUrl: string): ListFunctionVersionResult {
        this['code_url'] = codeUrl;
        return this;
    }
    public set codeUrl(codeUrl: string | undefined) {
        this['code_url'] = codeUrl;
    }
    public get codeUrl() {
        return this['code_url'];
    }
    public withCodeFilename(codeFilename: string): ListFunctionVersionResult {
        this['code_filename'] = codeFilename;
        return this;
    }
    public set codeFilename(codeFilename: string | undefined) {
        this['code_filename'] = codeFilename;
    }
    public get codeFilename() {
        return this['code_filename'];
    }
    public withCodeSize(codeSize: number): ListFunctionVersionResult {
        this['code_size'] = codeSize;
        return this;
    }
    public set codeSize(codeSize: number | undefined) {
        this['code_size'] = codeSize;
    }
    public get codeSize() {
        return this['code_size'];
    }
    public withUserData(userData: string): ListFunctionVersionResult {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
        return this['user_data'];
    }
    public withEncryptedUserData(encryptedUserData: string): ListFunctionVersionResult {
        this['encrypted_user_data'] = encryptedUserData;
        return this;
    }
    public set encryptedUserData(encryptedUserData: string | undefined) {
        this['encrypted_user_data'] = encryptedUserData;
    }
    public get encryptedUserData() {
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
    public set imageName(imageName: string | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName() {
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
    public set appXrole(appXrole: string | undefined) {
        this['app_xrole'] = appXrole;
    }
    public get appXrole() {
        return this['app_xrole'];
    }
    public withLastModified(lastModified: Date): ListFunctionVersionResult {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: Date | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified() {
        return this['last_modified'];
    }
    public withFuncVpcId(funcVpcId: string): ListFunctionVersionResult {
        this['func_vpc_id'] = funcVpcId;
        return this;
    }
    public set funcVpcId(funcVpcId: string | undefined) {
        this['func_vpc_id'] = funcVpcId;
    }
    public get funcVpcId() {
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
    public set concurrentNum(concurrentNum: number | undefined) {
        this['concurrent_num'] = concurrentNum;
    }
    public get concurrentNum() {
        return this['concurrent_num'];
    }
    public withStrategyConfig(strategyConfig: StrategyConfig): ListFunctionVersionResult {
        this['strategy_config'] = strategyConfig;
        return this;
    }
    public set strategyConfig(strategyConfig: StrategyConfig | undefined) {
        this['strategy_config'] = strategyConfig;
    }
    public get strategyConfig() {
        return this['strategy_config'];
    }
    public withInitializerHandler(initializerHandler: string): ListFunctionVersionResult {
        this['initializer_handler'] = initializerHandler;
        return this;
    }
    public set initializerHandler(initializerHandler: string | undefined) {
        this['initializer_handler'] = initializerHandler;
    }
    public get initializerHandler() {
        return this['initializer_handler'];
    }
    public withInitializerTimeout(initializerTimeout: number): ListFunctionVersionResult {
        this['initializer_timeout'] = initializerTimeout;
        return this;
    }
    public set initializerTimeout(initializerTimeout: number | undefined) {
        this['initializer_timeout'] = initializerTimeout;
    }
    public get initializerTimeout() {
        return this['initializer_timeout'];
    }
    public withLongTime(longTime: boolean): ListFunctionVersionResult {
        this['long_time'] = longTime;
        return this;
    }
    public set longTime(longTime: boolean | undefined) {
        this['long_time'] = longTime;
    }
    public get longTime() {
        return this['long_time'];
    }
    public withLogGroupId(logGroupId: string): ListFunctionVersionResult {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): ListFunctionVersionResult {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId() {
        return this['log_stream_id'];
    }
    public withFunctionAsyncConfig(functionAsyncConfig: FunctionAsyncConfig): ListFunctionVersionResult {
        this['function_async_config'] = functionAsyncConfig;
        return this;
    }
    public set functionAsyncConfig(functionAsyncConfig: FunctionAsyncConfig | undefined) {
        this['function_async_config'] = functionAsyncConfig;
    }
    public get functionAsyncConfig() {
        return this['function_async_config'];
    }
    public withType(type: string): ListFunctionVersionResult {
        this['type'] = type;
        return this;
    }
    public withEnableCloudDebug(enableCloudDebug: string): ListFunctionVersionResult {
        this['enable_cloud_debug'] = enableCloudDebug;
        return this;
    }
    public set enableCloudDebug(enableCloudDebug: string | undefined) {
        this['enable_cloud_debug'] = enableCloudDebug;
    }
    public get enableCloudDebug() {
        return this['enable_cloud_debug'];
    }
    public withEnableDynamicMemory(enableDynamicMemory: boolean): ListFunctionVersionResult {
        this['enable_dynamic_memory'] = enableDynamicMemory;
        return this;
    }
    public set enableDynamicMemory(enableDynamicMemory: boolean | undefined) {
        this['enable_dynamic_memory'] = enableDynamicMemory;
    }
    public get enableDynamicMemory() {
        return this['enable_dynamic_memory'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListFunctionVersionResult {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFunctionVersionResultRuntimeEnum {
    PYTHON2_7 = 'Python2.7',
    PYTHON3_6 = 'Python3.6',
    GO1_8 = 'Go1.8',
    JAVA8 = 'Java8',
    NODE_JS6_10 = 'Node.js6.10',
    NODE_JS8_10 = 'Node.js8.10',
    C__NET_CORE_2_0 = 'C#(.NET Core 2.0)',
    C__NET_CORE_2_1 = 'C#(.NET Core 2.1)',
    C__NET_CORE_3_1 = 'C#(.NET Core 3.1)',
    CUSTOM = 'Custom',
    PHP7_3 = 'PHP7.3'
}
/**
    * @export
    * @enum {string}
    */
export enum ListFunctionVersionResultCodeTypeEnum {
    INLINE = 'inline',
    ZIP = 'zip',
    OBS = 'obs',
    JAR = 'jar'
}
