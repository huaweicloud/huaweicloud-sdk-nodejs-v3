import { StrategyConfig } from './StrategyConfig';


export class ListFunctionResult {
    private 'resource_id'?: string;
    private 'func_urn'?: string;
    private 'func_name'?: string;
    private 'domain_id'?: string;
    public namespace?: string;
    private 'project_name'?: string;
    private 'package'?: string;
    public runtime?: ListFunctionResultRuntimeEnum | string;
    public timeout?: number;
    public handler?: string;
    private 'memory_size'?: number;
    private 'gpu_memory'?: number;
    public cpu?: number;
    private 'code_type'?: ListFunctionResultCodeTypeEnum | string;
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
    private 'func_vpc_id'?: string;
    private 'strategy_config'?: StrategyConfig;
    private 'extend_config'?: string;
    private 'initializer_handler'?: string;
    private 'initializer_timeout'?: number;
    private 'pre_stop_handler'?: string;
    private 'pre_stop_timeout'?: number;
    private 'enterprise_project_id'?: string;
    private 'long_time'?: boolean;
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    public type?: ListFunctionResultTypeEnum | string;
    private 'fail_count'?: number;
    private 'is_bridge_function'?: boolean;
    private 'bind_bridge_funcUrns'?: Array<string>;
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
    public withResourceId(resourceId: string): ListFunctionResult {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withFuncUrn(funcUrn: string): ListFunctionResult {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string  | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn(): string | undefined {
        return this['func_urn'];
    }
    public withFuncName(funcName: string): ListFunctionResult {
        this['func_name'] = funcName;
        return this;
    }
    public set funcName(funcName: string  | undefined) {
        this['func_name'] = funcName;
    }
    public get funcName(): string | undefined {
        return this['func_name'];
    }
    public withDomainId(domainId: string): ListFunctionResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withNamespace(namespace: string): ListFunctionResult {
        this['namespace'] = namespace;
        return this;
    }
    public withProjectName(projectName: string): ListFunctionResult {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withPackage(_package: string): ListFunctionResult {
        this['package'] = _package;
        return this;
    }
    public set _package(_package: string  | undefined) {
        this['package'] = _package;
    }
    public get _package(): string | undefined {
        return this['package'];
    }
    public withRuntime(runtime: ListFunctionResultRuntimeEnum | string): ListFunctionResult {
        this['runtime'] = runtime;
        return this;
    }
    public withTimeout(timeout: number): ListFunctionResult {
        this['timeout'] = timeout;
        return this;
    }
    public withHandler(handler: string): ListFunctionResult {
        this['handler'] = handler;
        return this;
    }
    public withMemorySize(memorySize: number): ListFunctionResult {
        this['memory_size'] = memorySize;
        return this;
    }
    public set memorySize(memorySize: number  | undefined) {
        this['memory_size'] = memorySize;
    }
    public get memorySize(): number | undefined {
        return this['memory_size'];
    }
    public withGpuMemory(gpuMemory: number): ListFunctionResult {
        this['gpu_memory'] = gpuMemory;
        return this;
    }
    public set gpuMemory(gpuMemory: number  | undefined) {
        this['gpu_memory'] = gpuMemory;
    }
    public get gpuMemory(): number | undefined {
        return this['gpu_memory'];
    }
    public withCpu(cpu: number): ListFunctionResult {
        this['cpu'] = cpu;
        return this;
    }
    public withCodeType(codeType: ListFunctionResultCodeTypeEnum | string): ListFunctionResult {
        this['code_type'] = codeType;
        return this;
    }
    public set codeType(codeType: ListFunctionResultCodeTypeEnum | string  | undefined) {
        this['code_type'] = codeType;
    }
    public get codeType(): ListFunctionResultCodeTypeEnum | string | undefined {
        return this['code_type'];
    }
    public withCodeUrl(codeUrl: string): ListFunctionResult {
        this['code_url'] = codeUrl;
        return this;
    }
    public set codeUrl(codeUrl: string  | undefined) {
        this['code_url'] = codeUrl;
    }
    public get codeUrl(): string | undefined {
        return this['code_url'];
    }
    public withCodeFilename(codeFilename: string): ListFunctionResult {
        this['code_filename'] = codeFilename;
        return this;
    }
    public set codeFilename(codeFilename: string  | undefined) {
        this['code_filename'] = codeFilename;
    }
    public get codeFilename(): string | undefined {
        return this['code_filename'];
    }
    public withCodeSize(codeSize: number): ListFunctionResult {
        this['code_size'] = codeSize;
        return this;
    }
    public set codeSize(codeSize: number  | undefined) {
        this['code_size'] = codeSize;
    }
    public get codeSize(): number | undefined {
        return this['code_size'];
    }
    public withUserData(userData: string): ListFunctionResult {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withEncryptedUserData(encryptedUserData: string): ListFunctionResult {
        this['encrypted_user_data'] = encryptedUserData;
        return this;
    }
    public set encryptedUserData(encryptedUserData: string  | undefined) {
        this['encrypted_user_data'] = encryptedUserData;
    }
    public get encryptedUserData(): string | undefined {
        return this['encrypted_user_data'];
    }
    public withDigest(digest: string): ListFunctionResult {
        this['digest'] = digest;
        return this;
    }
    public withVersion(version: string): ListFunctionResult {
        this['version'] = version;
        return this;
    }
    public withImageName(imageName: string): ListFunctionResult {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withXrole(xrole: string): ListFunctionResult {
        this['xrole'] = xrole;
        return this;
    }
    public withAppXrole(appXrole: string): ListFunctionResult {
        this['app_xrole'] = appXrole;
        return this;
    }
    public set appXrole(appXrole: string  | undefined) {
        this['app_xrole'] = appXrole;
    }
    public get appXrole(): string | undefined {
        return this['app_xrole'];
    }
    public withDescription(description: string): ListFunctionResult {
        this['description'] = description;
        return this;
    }
    public withLastModified(lastModified: Date): ListFunctionResult {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: Date  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): Date | undefined {
        return this['last_modified'];
    }
    public withFuncVpcId(funcVpcId: string): ListFunctionResult {
        this['func_vpc_id'] = funcVpcId;
        return this;
    }
    public set funcVpcId(funcVpcId: string  | undefined) {
        this['func_vpc_id'] = funcVpcId;
    }
    public get funcVpcId(): string | undefined {
        return this['func_vpc_id'];
    }
    public withStrategyConfig(strategyConfig: StrategyConfig): ListFunctionResult {
        this['strategy_config'] = strategyConfig;
        return this;
    }
    public set strategyConfig(strategyConfig: StrategyConfig  | undefined) {
        this['strategy_config'] = strategyConfig;
    }
    public get strategyConfig(): StrategyConfig | undefined {
        return this['strategy_config'];
    }
    public withExtendConfig(extendConfig: string): ListFunctionResult {
        this['extend_config'] = extendConfig;
        return this;
    }
    public set extendConfig(extendConfig: string  | undefined) {
        this['extend_config'] = extendConfig;
    }
    public get extendConfig(): string | undefined {
        return this['extend_config'];
    }
    public withInitializerHandler(initializerHandler: string): ListFunctionResult {
        this['initializer_handler'] = initializerHandler;
        return this;
    }
    public set initializerHandler(initializerHandler: string  | undefined) {
        this['initializer_handler'] = initializerHandler;
    }
    public get initializerHandler(): string | undefined {
        return this['initializer_handler'];
    }
    public withInitializerTimeout(initializerTimeout: number): ListFunctionResult {
        this['initializer_timeout'] = initializerTimeout;
        return this;
    }
    public set initializerTimeout(initializerTimeout: number  | undefined) {
        this['initializer_timeout'] = initializerTimeout;
    }
    public get initializerTimeout(): number | undefined {
        return this['initializer_timeout'];
    }
    public withPreStopHandler(preStopHandler: string): ListFunctionResult {
        this['pre_stop_handler'] = preStopHandler;
        return this;
    }
    public set preStopHandler(preStopHandler: string  | undefined) {
        this['pre_stop_handler'] = preStopHandler;
    }
    public get preStopHandler(): string | undefined {
        return this['pre_stop_handler'];
    }
    public withPreStopTimeout(preStopTimeout: number): ListFunctionResult {
        this['pre_stop_timeout'] = preStopTimeout;
        return this;
    }
    public set preStopTimeout(preStopTimeout: number  | undefined) {
        this['pre_stop_timeout'] = preStopTimeout;
    }
    public get preStopTimeout(): number | undefined {
        return this['pre_stop_timeout'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListFunctionResult {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLongTime(longTime: boolean): ListFunctionResult {
        this['long_time'] = longTime;
        return this;
    }
    public set longTime(longTime: boolean  | undefined) {
        this['long_time'] = longTime;
    }
    public get longTime(): boolean | undefined {
        return this['long_time'];
    }
    public withLogGroupId(logGroupId: string): ListFunctionResult {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): ListFunctionResult {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withType(type: ListFunctionResultTypeEnum | string): ListFunctionResult {
        this['type'] = type;
        return this;
    }
    public withFailCount(failCount: number): ListFunctionResult {
        this['fail_count'] = failCount;
        return this;
    }
    public set failCount(failCount: number  | undefined) {
        this['fail_count'] = failCount;
    }
    public get failCount(): number | undefined {
        return this['fail_count'];
    }
    public withIsBridgeFunction(isBridgeFunction: boolean): ListFunctionResult {
        this['is_bridge_function'] = isBridgeFunction;
        return this;
    }
    public set isBridgeFunction(isBridgeFunction: boolean  | undefined) {
        this['is_bridge_function'] = isBridgeFunction;
    }
    public get isBridgeFunction(): boolean | undefined {
        return this['is_bridge_function'];
    }
    public withBindBridgeFuncUrns(bindBridgeFuncUrns: Array<string>): ListFunctionResult {
        this['bind_bridge_funcUrns'] = bindBridgeFuncUrns;
        return this;
    }
    public set bindBridgeFuncUrns(bindBridgeFuncUrns: Array<string>  | undefined) {
        this['bind_bridge_funcUrns'] = bindBridgeFuncUrns;
    }
    public get bindBridgeFuncUrns(): Array<string> | undefined {
        return this['bind_bridge_funcUrns'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFunctionResultRuntimeEnum {
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
export enum ListFunctionResultCodeTypeEnum {
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
export enum ListFunctionResultTypeEnum {
    V1 = 'v1',
    V2 = 'v2'
}
