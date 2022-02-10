import { Dependency } from './Dependency';
import { FuncVpc } from './FuncVpc';
import { FunctionAsyncConfig } from './FunctionAsyncConfig';
import { MountConfig } from './MountConfig';
import { StrategyConfig } from './StrategyConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFunctionVersionResponse extends SdkResponse {
    private 'func_urn'?: string | undefined;
    private 'func_name'?: string | undefined;
    private 'domain_id'?: string | undefined;
    public namespace?: string;
    private 'project_name'?: string | undefined;
    private 'package'?: string | undefined;
    public runtime?: CreateFunctionVersionResponseRuntimeEnum;
    public timeout?: number;
    public handler?: string;
    private 'memory_size'?: number | undefined;
    public cpu?: number;
    private 'code_type'?: CreateFunctionVersionResponseCodeTypeEnum | undefined;
    private 'code_url'?: string | undefined;
    private 'code_filename'?: string | undefined;
    private 'code_size'?: number | undefined;
    private 'user_data'?: string | undefined;
    private 'encrypted_user_data'?: string | undefined;
    public digest?: string;
    public version?: string;
    private 'image_name'?: string | undefined;
    public xrole?: string;
    private 'app_xrole'?: string | undefined;
    public description?: string;
    private 'version_description'?: string | undefined;
    private 'last_modified'?: Date | undefined;
    private 'func_vpc'?: FuncVpc | undefined;
    private 'mount_config'?: MountConfig | undefined;
    private 'strategy_config'?: StrategyConfig | undefined;
    public dependencies?: Array<Dependency>;
    private 'initializer_handler'?: string | undefined;
    private 'initializer_timeout'?: number | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'long_time'?: boolean | undefined;
    private 'log_group_id'?: string | undefined;
    private 'log_stream_id'?: string | undefined;
    public type?: CreateFunctionVersionResponseTypeEnum;
    private 'enable_dynamic_memory'?: boolean | undefined;
    private 'function_async_config'?: FunctionAsyncConfig | undefined;
    public constructor() { 
        super();
    }
    public withFuncUrn(funcUrn: string): CreateFunctionVersionResponse {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn() {
        return this['func_urn'];
    }
    public withFuncName(funcName: string): CreateFunctionVersionResponse {
        this['func_name'] = funcName;
        return this;
    }
    public set funcName(funcName: string | undefined) {
        this['func_name'] = funcName;
    }
    public get funcName() {
        return this['func_name'];
    }
    public withDomainId(domainId: string): CreateFunctionVersionResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withNamespace(namespace: string): CreateFunctionVersionResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withProjectName(projectName: string): CreateFunctionVersionResponse {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName() {
        return this['project_name'];
    }
    public withPackage(_package: string): CreateFunctionVersionResponse {
        this['package'] = _package;
        return this;
    }
    public set _package(_package: string | undefined) {
        this['package'] = _package;
    }
    public get _package() {
        return this['package'];
    }
    public withRuntime(runtime: CreateFunctionVersionResponseRuntimeEnum): CreateFunctionVersionResponse {
        this['runtime'] = runtime;
        return this;
    }
    public withTimeout(timeout: number): CreateFunctionVersionResponse {
        this['timeout'] = timeout;
        return this;
    }
    public withHandler(handler: string): CreateFunctionVersionResponse {
        this['handler'] = handler;
        return this;
    }
    public withMemorySize(memorySize: number): CreateFunctionVersionResponse {
        this['memory_size'] = memorySize;
        return this;
    }
    public set memorySize(memorySize: number | undefined) {
        this['memory_size'] = memorySize;
    }
    public get memorySize() {
        return this['memory_size'];
    }
    public withCpu(cpu: number): CreateFunctionVersionResponse {
        this['cpu'] = cpu;
        return this;
    }
    public withCodeType(codeType: CreateFunctionVersionResponseCodeTypeEnum): CreateFunctionVersionResponse {
        this['code_type'] = codeType;
        return this;
    }
    public set codeType(codeType: CreateFunctionVersionResponseCodeTypeEnum | undefined) {
        this['code_type'] = codeType;
    }
    public get codeType() {
        return this['code_type'];
    }
    public withCodeUrl(codeUrl: string): CreateFunctionVersionResponse {
        this['code_url'] = codeUrl;
        return this;
    }
    public set codeUrl(codeUrl: string | undefined) {
        this['code_url'] = codeUrl;
    }
    public get codeUrl() {
        return this['code_url'];
    }
    public withCodeFilename(codeFilename: string): CreateFunctionVersionResponse {
        this['code_filename'] = codeFilename;
        return this;
    }
    public set codeFilename(codeFilename: string | undefined) {
        this['code_filename'] = codeFilename;
    }
    public get codeFilename() {
        return this['code_filename'];
    }
    public withCodeSize(codeSize: number): CreateFunctionVersionResponse {
        this['code_size'] = codeSize;
        return this;
    }
    public set codeSize(codeSize: number | undefined) {
        this['code_size'] = codeSize;
    }
    public get codeSize() {
        return this['code_size'];
    }
    public withUserData(userData: string): CreateFunctionVersionResponse {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
        return this['user_data'];
    }
    public withEncryptedUserData(encryptedUserData: string): CreateFunctionVersionResponse {
        this['encrypted_user_data'] = encryptedUserData;
        return this;
    }
    public set encryptedUserData(encryptedUserData: string | undefined) {
        this['encrypted_user_data'] = encryptedUserData;
    }
    public get encryptedUserData() {
        return this['encrypted_user_data'];
    }
    public withDigest(digest: string): CreateFunctionVersionResponse {
        this['digest'] = digest;
        return this;
    }
    public withVersion(version: string): CreateFunctionVersionResponse {
        this['version'] = version;
        return this;
    }
    public withImageName(imageName: string): CreateFunctionVersionResponse {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName() {
        return this['image_name'];
    }
    public withXrole(xrole: string): CreateFunctionVersionResponse {
        this['xrole'] = xrole;
        return this;
    }
    public withAppXrole(appXrole: string): CreateFunctionVersionResponse {
        this['app_xrole'] = appXrole;
        return this;
    }
    public set appXrole(appXrole: string | undefined) {
        this['app_xrole'] = appXrole;
    }
    public get appXrole() {
        return this['app_xrole'];
    }
    public withDescription(description: string): CreateFunctionVersionResponse {
        this['description'] = description;
        return this;
    }
    public withVersionDescription(versionDescription: string): CreateFunctionVersionResponse {
        this['version_description'] = versionDescription;
        return this;
    }
    public set versionDescription(versionDescription: string | undefined) {
        this['version_description'] = versionDescription;
    }
    public get versionDescription() {
        return this['version_description'];
    }
    public withLastModified(lastModified: Date): CreateFunctionVersionResponse {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: Date | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified() {
        return this['last_modified'];
    }
    public withFuncVpc(funcVpc: FuncVpc): CreateFunctionVersionResponse {
        this['func_vpc'] = funcVpc;
        return this;
    }
    public set funcVpc(funcVpc: FuncVpc | undefined) {
        this['func_vpc'] = funcVpc;
    }
    public get funcVpc() {
        return this['func_vpc'];
    }
    public withMountConfig(mountConfig: MountConfig): CreateFunctionVersionResponse {
        this['mount_config'] = mountConfig;
        return this;
    }
    public set mountConfig(mountConfig: MountConfig | undefined) {
        this['mount_config'] = mountConfig;
    }
    public get mountConfig() {
        return this['mount_config'];
    }
    public withStrategyConfig(strategyConfig: StrategyConfig): CreateFunctionVersionResponse {
        this['strategy_config'] = strategyConfig;
        return this;
    }
    public set strategyConfig(strategyConfig: StrategyConfig | undefined) {
        this['strategy_config'] = strategyConfig;
    }
    public get strategyConfig() {
        return this['strategy_config'];
    }
    public withDependencies(dependencies: Array<Dependency>): CreateFunctionVersionResponse {
        this['dependencies'] = dependencies;
        return this;
    }
    public withInitializerHandler(initializerHandler: string): CreateFunctionVersionResponse {
        this['initializer_handler'] = initializerHandler;
        return this;
    }
    public set initializerHandler(initializerHandler: string | undefined) {
        this['initializer_handler'] = initializerHandler;
    }
    public get initializerHandler() {
        return this['initializer_handler'];
    }
    public withInitializerTimeout(initializerTimeout: number): CreateFunctionVersionResponse {
        this['initializer_timeout'] = initializerTimeout;
        return this;
    }
    public set initializerTimeout(initializerTimeout: number | undefined) {
        this['initializer_timeout'] = initializerTimeout;
    }
    public get initializerTimeout() {
        return this['initializer_timeout'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateFunctionVersionResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withLongTime(longTime: boolean): CreateFunctionVersionResponse {
        this['long_time'] = longTime;
        return this;
    }
    public set longTime(longTime: boolean | undefined) {
        this['long_time'] = longTime;
    }
    public get longTime() {
        return this['long_time'];
    }
    public withLogGroupId(logGroupId: string): CreateFunctionVersionResponse {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): CreateFunctionVersionResponse {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId() {
        return this['log_stream_id'];
    }
    public withType(type: CreateFunctionVersionResponseTypeEnum): CreateFunctionVersionResponse {
        this['type'] = type;
        return this;
    }
    public withEnableDynamicMemory(enableDynamicMemory: boolean): CreateFunctionVersionResponse {
        this['enable_dynamic_memory'] = enableDynamicMemory;
        return this;
    }
    public set enableDynamicMemory(enableDynamicMemory: boolean | undefined) {
        this['enable_dynamic_memory'] = enableDynamicMemory;
    }
    public get enableDynamicMemory() {
        return this['enable_dynamic_memory'];
    }
    public withFunctionAsyncConfig(functionAsyncConfig: FunctionAsyncConfig): CreateFunctionVersionResponse {
        this['function_async_config'] = functionAsyncConfig;
        return this;
    }
    public set functionAsyncConfig(functionAsyncConfig: FunctionAsyncConfig | undefined) {
        this['function_async_config'] = functionAsyncConfig;
    }
    public get functionAsyncConfig() {
        return this['function_async_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateFunctionVersionResponseRuntimeEnum {
    JAVA_8 = 'Java 8',
    NODE_JS_6_10 = 'Node.js 6.10',
    NODE_JS_8_10 = 'Node.js 8.10',
    NODE_JS_10_16 = 'Node.js 10.16',
    NODE_JS_12_13 = 'Node.js 12.13',
    PYTHON_2_7 = 'Python 2.7',
    PYTHON_3_6 = 'Python 3.6',
    GO_1_8 = 'Go 1.8',
    GO_1_X = 'Go 1.x',
    C__NET_CORE_2_0 = 'C#(.NET Core 2.0)',
    C__NET_CORE_2_1 = 'C#(.NET Core 2.1)',
    C__NET_CORE_3_1 = 'C#(.NET Core 3.1)',
    PHP_7_3 = 'PHP 7.3'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateFunctionVersionResponseCodeTypeEnum {
    INLINE = 'inline',
    ZIP = 'zip',
    OBS = 'obs',
    JAR = 'jar'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateFunctionVersionResponseTypeEnum {
    V1 = 'v1',
    V2 = 'v2'
}
