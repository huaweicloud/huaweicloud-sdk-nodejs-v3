import { FuncVpc } from './FuncVpc';
import { StrategyConfig } from './StrategyConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportFunctionResponse extends SdkResponse {
    private 'func_urn'?: string | undefined;
    private 'func_name'?: string | undefined;
    private 'domain_id'?: string | undefined;
    public namespace?: string;
    private 'project_name'?: string | undefined;
    private 'package'?: string | undefined;
    public runtime?: ImportFunctionResponseRuntimeEnum;
    public timeout?: number;
    public handler?: string;
    private 'memory_size'?: number | undefined;
    public cpu?: number;
    private 'code_type'?: ImportFunctionResponseCodeTypeEnum | undefined;
    private 'code_url'?: string | undefined;
    private 'code_filename'?: string | undefined;
    private 'code_size'?: number | undefined;
    private 'user_data'?: string | undefined;
    public digest?: string;
    public version?: string;
    private 'image_name'?: string | undefined;
    public xrole?: string;
    private 'app_xrole'?: string | undefined;
    public description?: string;
    private 'version_description'?: string | undefined;
    private 'last_modified'?: Date | undefined;
    private 'func_vpc'?: FuncVpc | undefined;
    private 'depend_list'?: Array<string> | undefined;
    private 'strategy_config'?: StrategyConfig | undefined;
    private 'extend_config'?: string | undefined;
    private 'initializer_handler'?: string | undefined;
    private 'initializer_timeout'?: number | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withFuncUrn(funcUrn: string): ImportFunctionResponse {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn() {
        return this['func_urn'];
    }
    public withFuncName(funcName: string): ImportFunctionResponse {
        this['func_name'] = funcName;
        return this;
    }
    public set funcName(funcName: string | undefined) {
        this['func_name'] = funcName;
    }
    public get funcName() {
        return this['func_name'];
    }
    public withDomainId(domainId: string): ImportFunctionResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withNamespace(namespace: string): ImportFunctionResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withProjectName(projectName: string): ImportFunctionResponse {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName() {
        return this['project_name'];
    }
    public withPackage(_package: string): ImportFunctionResponse {
        this['package'] = _package;
        return this;
    }
    public set _package(_package: string | undefined) {
        this['package'] = _package;
    }
    public get _package() {
        return this['package'];
    }
    public withRuntime(runtime: ImportFunctionResponseRuntimeEnum): ImportFunctionResponse {
        this['runtime'] = runtime;
        return this;
    }
    public withTimeout(timeout: number): ImportFunctionResponse {
        this['timeout'] = timeout;
        return this;
    }
    public withHandler(handler: string): ImportFunctionResponse {
        this['handler'] = handler;
        return this;
    }
    public withMemorySize(memorySize: number): ImportFunctionResponse {
        this['memory_size'] = memorySize;
        return this;
    }
    public set memorySize(memorySize: number | undefined) {
        this['memory_size'] = memorySize;
    }
    public get memorySize() {
        return this['memory_size'];
    }
    public withCpu(cpu: number): ImportFunctionResponse {
        this['cpu'] = cpu;
        return this;
    }
    public withCodeType(codeType: ImportFunctionResponseCodeTypeEnum): ImportFunctionResponse {
        this['code_type'] = codeType;
        return this;
    }
    public set codeType(codeType: ImportFunctionResponseCodeTypeEnum | undefined) {
        this['code_type'] = codeType;
    }
    public get codeType() {
        return this['code_type'];
    }
    public withCodeUrl(codeUrl: string): ImportFunctionResponse {
        this['code_url'] = codeUrl;
        return this;
    }
    public set codeUrl(codeUrl: string | undefined) {
        this['code_url'] = codeUrl;
    }
    public get codeUrl() {
        return this['code_url'];
    }
    public withCodeFilename(codeFilename: string): ImportFunctionResponse {
        this['code_filename'] = codeFilename;
        return this;
    }
    public set codeFilename(codeFilename: string | undefined) {
        this['code_filename'] = codeFilename;
    }
    public get codeFilename() {
        return this['code_filename'];
    }
    public withCodeSize(codeSize: number): ImportFunctionResponse {
        this['code_size'] = codeSize;
        return this;
    }
    public set codeSize(codeSize: number | undefined) {
        this['code_size'] = codeSize;
    }
    public get codeSize() {
        return this['code_size'];
    }
    public withUserData(userData: string): ImportFunctionResponse {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
        return this['user_data'];
    }
    public withDigest(digest: string): ImportFunctionResponse {
        this['digest'] = digest;
        return this;
    }
    public withVersion(version: string): ImportFunctionResponse {
        this['version'] = version;
        return this;
    }
    public withImageName(imageName: string): ImportFunctionResponse {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName() {
        return this['image_name'];
    }
    public withXrole(xrole: string): ImportFunctionResponse {
        this['xrole'] = xrole;
        return this;
    }
    public withAppXrole(appXrole: string): ImportFunctionResponse {
        this['app_xrole'] = appXrole;
        return this;
    }
    public set appXrole(appXrole: string | undefined) {
        this['app_xrole'] = appXrole;
    }
    public get appXrole() {
        return this['app_xrole'];
    }
    public withDescription(description: string): ImportFunctionResponse {
        this['description'] = description;
        return this;
    }
    public withVersionDescription(versionDescription: string): ImportFunctionResponse {
        this['version_description'] = versionDescription;
        return this;
    }
    public set versionDescription(versionDescription: string | undefined) {
        this['version_description'] = versionDescription;
    }
    public get versionDescription() {
        return this['version_description'];
    }
    public withLastModified(lastModified: Date): ImportFunctionResponse {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: Date | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified() {
        return this['last_modified'];
    }
    public withFuncVpc(funcVpc: FuncVpc): ImportFunctionResponse {
        this['func_vpc'] = funcVpc;
        return this;
    }
    public set funcVpc(funcVpc: FuncVpc | undefined) {
        this['func_vpc'] = funcVpc;
    }
    public get funcVpc() {
        return this['func_vpc'];
    }
    public withDependList(dependList: Array<string>): ImportFunctionResponse {
        this['depend_list'] = dependList;
        return this;
    }
    public set dependList(dependList: Array<string> | undefined) {
        this['depend_list'] = dependList;
    }
    public get dependList() {
        return this['depend_list'];
    }
    public withStrategyConfig(strategyConfig: StrategyConfig): ImportFunctionResponse {
        this['strategy_config'] = strategyConfig;
        return this;
    }
    public set strategyConfig(strategyConfig: StrategyConfig | undefined) {
        this['strategy_config'] = strategyConfig;
    }
    public get strategyConfig() {
        return this['strategy_config'];
    }
    public withExtendConfig(extendConfig: string): ImportFunctionResponse {
        this['extend_config'] = extendConfig;
        return this;
    }
    public set extendConfig(extendConfig: string | undefined) {
        this['extend_config'] = extendConfig;
    }
    public get extendConfig() {
        return this['extend_config'];
    }
    public withInitializerHandler(initializerHandler: string): ImportFunctionResponse {
        this['initializer_handler'] = initializerHandler;
        return this;
    }
    public set initializerHandler(initializerHandler: string | undefined) {
        this['initializer_handler'] = initializerHandler;
    }
    public get initializerHandler() {
        return this['initializer_handler'];
    }
    public withInitializerTimeout(initializerTimeout: number): ImportFunctionResponse {
        this['initializer_timeout'] = initializerTimeout;
        return this;
    }
    public set initializerTimeout(initializerTimeout: number | undefined) {
        this['initializer_timeout'] = initializerTimeout;
    }
    public get initializerTimeout() {
        return this['initializer_timeout'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ImportFunctionResponse {
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
export enum ImportFunctionResponseRuntimeEnum {
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
export enum ImportFunctionResponseCodeTypeEnum {
    INLINE = 'inline',
    ZIP = 'zip',
    OBS = 'obs',
    JAR = 'jar'
}
