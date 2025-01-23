import { CustomImage } from './CustomImage';
import { FuncCode } from './FuncCode';
import { FuncLogConfig } from './FuncLogConfig';
import { FuncVpc } from './FuncVpc';
import { MountConfig } from './MountConfig';
import { NetworkControlConfig } from './NetworkControlConfig';


export class CreateFunctionRequestBody {
    private 'func_name'?: string;
    private 'package'?: string;
    public runtime?: CreateFunctionRequestBodyRuntimeEnum | string;
    public timeout?: number;
    public handler?: string;
    private 'depend_version_list'?: Array<string>;
    private 'func_vpc'?: FuncVpc;
    private 'memory_size'?: number;
    private 'gpu_memory'?: number;
    private 'gpu_type'?: string;
    private 'code_type'?: CreateFunctionRequestBodyCodeTypeEnum | string;
    private 'code_url'?: string;
    private 'code_filename'?: string;
    private 'custom_image'?: CustomImage;
    private 'user_data'?: string;
    private 'encrypted_user_data'?: string;
    public xrole?: string;
    private 'app_xrole'?: string;
    public description?: string;
    private 'func_code'?: FuncCode;
    private 'mount_config'?: MountConfig;
    private 'initializer_handler'?: string;
    private 'initializer_timeout'?: number;
    private 'pre_stop_handler'?: string;
    private 'pre_stop_timeout'?: number;
    private 'enterprise_project_id'?: string;
    public type?: CreateFunctionRequestBodyTypeEnum | string;
    private 'log_config'?: FuncLogConfig;
    private 'network_controller'?: NetworkControlConfig;
    private 'is_stateful_function'?: boolean;
    private 'enable_dynamic_memory'?: boolean;
    private 'lts_custom_tag'?: { [key: string]: string; };
    public constructor(funcName?: string, _package?: string, runtime?: string, timeout?: number, handler?: string, memorySize?: number) { 
        this['func_name'] = funcName;
        this['package'] = _package;
        this['runtime'] = runtime;
        this['timeout'] = timeout;
        this['handler'] = handler;
        this['memory_size'] = memorySize;
    }
    public withFuncName(funcName: string): CreateFunctionRequestBody {
        this['func_name'] = funcName;
        return this;
    }
    public set funcName(funcName: string  | undefined) {
        this['func_name'] = funcName;
    }
    public get funcName(): string | undefined {
        return this['func_name'];
    }
    public withPackage(_package: string): CreateFunctionRequestBody {
        this['package'] = _package;
        return this;
    }
    public set _package(_package: string  | undefined) {
        this['package'] = _package;
    }
    public get _package(): string | undefined {
        return this['package'];
    }
    public withRuntime(runtime: CreateFunctionRequestBodyRuntimeEnum | string): CreateFunctionRequestBody {
        this['runtime'] = runtime;
        return this;
    }
    public withTimeout(timeout: number): CreateFunctionRequestBody {
        this['timeout'] = timeout;
        return this;
    }
    public withHandler(handler: string): CreateFunctionRequestBody {
        this['handler'] = handler;
        return this;
    }
    public withDependVersionList(dependVersionList: Array<string>): CreateFunctionRequestBody {
        this['depend_version_list'] = dependVersionList;
        return this;
    }
    public set dependVersionList(dependVersionList: Array<string>  | undefined) {
        this['depend_version_list'] = dependVersionList;
    }
    public get dependVersionList(): Array<string> | undefined {
        return this['depend_version_list'];
    }
    public withFuncVpc(funcVpc: FuncVpc): CreateFunctionRequestBody {
        this['func_vpc'] = funcVpc;
        return this;
    }
    public set funcVpc(funcVpc: FuncVpc  | undefined) {
        this['func_vpc'] = funcVpc;
    }
    public get funcVpc(): FuncVpc | undefined {
        return this['func_vpc'];
    }
    public withMemorySize(memorySize: number): CreateFunctionRequestBody {
        this['memory_size'] = memorySize;
        return this;
    }
    public set memorySize(memorySize: number  | undefined) {
        this['memory_size'] = memorySize;
    }
    public get memorySize(): number | undefined {
        return this['memory_size'];
    }
    public withGpuMemory(gpuMemory: number): CreateFunctionRequestBody {
        this['gpu_memory'] = gpuMemory;
        return this;
    }
    public set gpuMemory(gpuMemory: number  | undefined) {
        this['gpu_memory'] = gpuMemory;
    }
    public get gpuMemory(): number | undefined {
        return this['gpu_memory'];
    }
    public withGpuType(gpuType: string): CreateFunctionRequestBody {
        this['gpu_type'] = gpuType;
        return this;
    }
    public set gpuType(gpuType: string  | undefined) {
        this['gpu_type'] = gpuType;
    }
    public get gpuType(): string | undefined {
        return this['gpu_type'];
    }
    public withCodeType(codeType: CreateFunctionRequestBodyCodeTypeEnum | string): CreateFunctionRequestBody {
        this['code_type'] = codeType;
        return this;
    }
    public set codeType(codeType: CreateFunctionRequestBodyCodeTypeEnum | string  | undefined) {
        this['code_type'] = codeType;
    }
    public get codeType(): CreateFunctionRequestBodyCodeTypeEnum | string | undefined {
        return this['code_type'];
    }
    public withCodeUrl(codeUrl: string): CreateFunctionRequestBody {
        this['code_url'] = codeUrl;
        return this;
    }
    public set codeUrl(codeUrl: string  | undefined) {
        this['code_url'] = codeUrl;
    }
    public get codeUrl(): string | undefined {
        return this['code_url'];
    }
    public withCodeFilename(codeFilename: string): CreateFunctionRequestBody {
        this['code_filename'] = codeFilename;
        return this;
    }
    public set codeFilename(codeFilename: string  | undefined) {
        this['code_filename'] = codeFilename;
    }
    public get codeFilename(): string | undefined {
        return this['code_filename'];
    }
    public withCustomImage(customImage: CustomImage): CreateFunctionRequestBody {
        this['custom_image'] = customImage;
        return this;
    }
    public set customImage(customImage: CustomImage  | undefined) {
        this['custom_image'] = customImage;
    }
    public get customImage(): CustomImage | undefined {
        return this['custom_image'];
    }
    public withUserData(userData: string): CreateFunctionRequestBody {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withEncryptedUserData(encryptedUserData: string): CreateFunctionRequestBody {
        this['encrypted_user_data'] = encryptedUserData;
        return this;
    }
    public set encryptedUserData(encryptedUserData: string  | undefined) {
        this['encrypted_user_data'] = encryptedUserData;
    }
    public get encryptedUserData(): string | undefined {
        return this['encrypted_user_data'];
    }
    public withXrole(xrole: string): CreateFunctionRequestBody {
        this['xrole'] = xrole;
        return this;
    }
    public withAppXrole(appXrole: string): CreateFunctionRequestBody {
        this['app_xrole'] = appXrole;
        return this;
    }
    public set appXrole(appXrole: string  | undefined) {
        this['app_xrole'] = appXrole;
    }
    public get appXrole(): string | undefined {
        return this['app_xrole'];
    }
    public withDescription(description: string): CreateFunctionRequestBody {
        this['description'] = description;
        return this;
    }
    public withFuncCode(funcCode: FuncCode): CreateFunctionRequestBody {
        this['func_code'] = funcCode;
        return this;
    }
    public set funcCode(funcCode: FuncCode  | undefined) {
        this['func_code'] = funcCode;
    }
    public get funcCode(): FuncCode | undefined {
        return this['func_code'];
    }
    public withMountConfig(mountConfig: MountConfig): CreateFunctionRequestBody {
        this['mount_config'] = mountConfig;
        return this;
    }
    public set mountConfig(mountConfig: MountConfig  | undefined) {
        this['mount_config'] = mountConfig;
    }
    public get mountConfig(): MountConfig | undefined {
        return this['mount_config'];
    }
    public withInitializerHandler(initializerHandler: string): CreateFunctionRequestBody {
        this['initializer_handler'] = initializerHandler;
        return this;
    }
    public set initializerHandler(initializerHandler: string  | undefined) {
        this['initializer_handler'] = initializerHandler;
    }
    public get initializerHandler(): string | undefined {
        return this['initializer_handler'];
    }
    public withInitializerTimeout(initializerTimeout: number): CreateFunctionRequestBody {
        this['initializer_timeout'] = initializerTimeout;
        return this;
    }
    public set initializerTimeout(initializerTimeout: number  | undefined) {
        this['initializer_timeout'] = initializerTimeout;
    }
    public get initializerTimeout(): number | undefined {
        return this['initializer_timeout'];
    }
    public withPreStopHandler(preStopHandler: string): CreateFunctionRequestBody {
        this['pre_stop_handler'] = preStopHandler;
        return this;
    }
    public set preStopHandler(preStopHandler: string  | undefined) {
        this['pre_stop_handler'] = preStopHandler;
    }
    public get preStopHandler(): string | undefined {
        return this['pre_stop_handler'];
    }
    public withPreStopTimeout(preStopTimeout: number): CreateFunctionRequestBody {
        this['pre_stop_timeout'] = preStopTimeout;
        return this;
    }
    public set preStopTimeout(preStopTimeout: number  | undefined) {
        this['pre_stop_timeout'] = preStopTimeout;
    }
    public get preStopTimeout(): number | undefined {
        return this['pre_stop_timeout'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateFunctionRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: CreateFunctionRequestBodyTypeEnum | string): CreateFunctionRequestBody {
        this['type'] = type;
        return this;
    }
    public withLogConfig(logConfig: FuncLogConfig): CreateFunctionRequestBody {
        this['log_config'] = logConfig;
        return this;
    }
    public set logConfig(logConfig: FuncLogConfig  | undefined) {
        this['log_config'] = logConfig;
    }
    public get logConfig(): FuncLogConfig | undefined {
        return this['log_config'];
    }
    public withNetworkController(networkController: NetworkControlConfig): CreateFunctionRequestBody {
        this['network_controller'] = networkController;
        return this;
    }
    public set networkController(networkController: NetworkControlConfig  | undefined) {
        this['network_controller'] = networkController;
    }
    public get networkController(): NetworkControlConfig | undefined {
        return this['network_controller'];
    }
    public withIsStatefulFunction(isStatefulFunction: boolean): CreateFunctionRequestBody {
        this['is_stateful_function'] = isStatefulFunction;
        return this;
    }
    public set isStatefulFunction(isStatefulFunction: boolean  | undefined) {
        this['is_stateful_function'] = isStatefulFunction;
    }
    public get isStatefulFunction(): boolean | undefined {
        return this['is_stateful_function'];
    }
    public withEnableDynamicMemory(enableDynamicMemory: boolean): CreateFunctionRequestBody {
        this['enable_dynamic_memory'] = enableDynamicMemory;
        return this;
    }
    public set enableDynamicMemory(enableDynamicMemory: boolean  | undefined) {
        this['enable_dynamic_memory'] = enableDynamicMemory;
    }
    public get enableDynamicMemory(): boolean | undefined {
        return this['enable_dynamic_memory'];
    }
    public withLtsCustomTag(ltsCustomTag: { [key: string]: string; }): CreateFunctionRequestBody {
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
export enum CreateFunctionRequestBodyRuntimeEnum {
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
export enum CreateFunctionRequestBodyCodeTypeEnum {
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
export enum CreateFunctionRequestBodyTypeEnum {
    V1 = 'v1',
    V2 = 'v2'
}
