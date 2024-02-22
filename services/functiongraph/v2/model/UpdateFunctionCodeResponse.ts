import { Dependency } from './Dependency';
import { FuncCode } from './FuncCode';
import { StrategyConfig } from './StrategyConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFunctionCodeResponse extends SdkResponse {
    private 'func_urn'?: string;
    private 'func_name'?: string;
    private 'domain_id'?: string;
    public runtime?: UpdateFunctionCodeResponseRuntimeEnum | string;
    private 'code_type'?: UpdateFunctionCodeResponseCodeTypeEnum | string;
    private 'code_url'?: string;
    private 'code_filename'?: string;
    private 'code_size'?: number;
    public digest?: string;
    private 'last_modified'?: Date;
    private 'func_code'?: FuncCode;
    private 'depend_list'?: Array<string>;
    private 'depend_version_list'?: Array<string>;
    private 'strategy_config'?: StrategyConfig;
    public dependencies?: Array<Dependency>;
    public constructor() { 
        super();
    }
    public withFuncUrn(funcUrn: string): UpdateFunctionCodeResponse {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string  | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn(): string | undefined {
        return this['func_urn'];
    }
    public withFuncName(funcName: string): UpdateFunctionCodeResponse {
        this['func_name'] = funcName;
        return this;
    }
    public set funcName(funcName: string  | undefined) {
        this['func_name'] = funcName;
    }
    public get funcName(): string | undefined {
        return this['func_name'];
    }
    public withDomainId(domainId: string): UpdateFunctionCodeResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRuntime(runtime: UpdateFunctionCodeResponseRuntimeEnum | string): UpdateFunctionCodeResponse {
        this['runtime'] = runtime;
        return this;
    }
    public withCodeType(codeType: UpdateFunctionCodeResponseCodeTypeEnum | string): UpdateFunctionCodeResponse {
        this['code_type'] = codeType;
        return this;
    }
    public set codeType(codeType: UpdateFunctionCodeResponseCodeTypeEnum | string  | undefined) {
        this['code_type'] = codeType;
    }
    public get codeType(): UpdateFunctionCodeResponseCodeTypeEnum | string | undefined {
        return this['code_type'];
    }
    public withCodeUrl(codeUrl: string): UpdateFunctionCodeResponse {
        this['code_url'] = codeUrl;
        return this;
    }
    public set codeUrl(codeUrl: string  | undefined) {
        this['code_url'] = codeUrl;
    }
    public get codeUrl(): string | undefined {
        return this['code_url'];
    }
    public withCodeFilename(codeFilename: string): UpdateFunctionCodeResponse {
        this['code_filename'] = codeFilename;
        return this;
    }
    public set codeFilename(codeFilename: string  | undefined) {
        this['code_filename'] = codeFilename;
    }
    public get codeFilename(): string | undefined {
        return this['code_filename'];
    }
    public withCodeSize(codeSize: number): UpdateFunctionCodeResponse {
        this['code_size'] = codeSize;
        return this;
    }
    public set codeSize(codeSize: number  | undefined) {
        this['code_size'] = codeSize;
    }
    public get codeSize(): number | undefined {
        return this['code_size'];
    }
    public withDigest(digest: string): UpdateFunctionCodeResponse {
        this['digest'] = digest;
        return this;
    }
    public withLastModified(lastModified: Date): UpdateFunctionCodeResponse {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: Date  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): Date | undefined {
        return this['last_modified'];
    }
    public withFuncCode(funcCode: FuncCode): UpdateFunctionCodeResponse {
        this['func_code'] = funcCode;
        return this;
    }
    public set funcCode(funcCode: FuncCode  | undefined) {
        this['func_code'] = funcCode;
    }
    public get funcCode(): FuncCode | undefined {
        return this['func_code'];
    }
    public withDependList(dependList: Array<string>): UpdateFunctionCodeResponse {
        this['depend_list'] = dependList;
        return this;
    }
    public set dependList(dependList: Array<string>  | undefined) {
        this['depend_list'] = dependList;
    }
    public get dependList(): Array<string> | undefined {
        return this['depend_list'];
    }
    public withDependVersionList(dependVersionList: Array<string>): UpdateFunctionCodeResponse {
        this['depend_version_list'] = dependVersionList;
        return this;
    }
    public set dependVersionList(dependVersionList: Array<string>  | undefined) {
        this['depend_version_list'] = dependVersionList;
    }
    public get dependVersionList(): Array<string> | undefined {
        return this['depend_version_list'];
    }
    public withStrategyConfig(strategyConfig: StrategyConfig): UpdateFunctionCodeResponse {
        this['strategy_config'] = strategyConfig;
        return this;
    }
    public set strategyConfig(strategyConfig: StrategyConfig  | undefined) {
        this['strategy_config'] = strategyConfig;
    }
    public get strategyConfig(): StrategyConfig | undefined {
        return this['strategy_config'];
    }
    public withDependencies(dependencies: Array<Dependency>): UpdateFunctionCodeResponse {
        this['dependencies'] = dependencies;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateFunctionCodeResponseRuntimeEnum {
    JAVA8 = 'Java8',
    JAVA11 = 'Java11',
    NODE_JS6_10 = 'Node.js6.10',
    NODE_JS8_10 = 'Node.js8.10',
    NODE_JS10_16 = 'Node.js10.16',
    NODE_JS12_13 = 'Node.js12.13',
    NODE_JS14_18 = 'Node.js14.18',
    PYTHON2_7 = 'Python2.7',
    PYTHON3_6 = 'Python3.6',
    GO1_8 = 'Go1.8',
    GO1_X = 'Go1.x',
    C__NET_CORE_2_0 = 'C#(.NET Core 2.0)',
    C__NET_CORE_2_1 = 'C#(.NET Core 2.1)',
    C__NET_CORE_3_1 = 'C#(.NET Core 3.1)',
    PHP7_3 = 'PHP7.3',
    PYTHON3_9 = 'Python3.9',
    CUSTOM = 'Custom',
    HTTP = 'http',
    CUSTOM_IMAGE = 'Custom Image'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateFunctionCodeResponseCodeTypeEnum {
    INLINE = 'inline',
    ZIP = 'zip',
    OBS = 'obs',
    JAR = 'jar',
    CUSTOM_IMAGE_SWR = 'Custom-Image-Swr'
}
