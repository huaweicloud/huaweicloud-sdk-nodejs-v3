import { FuncCode } from './FuncCode';


export class CreateFunctionRequestBody {
    private 'func_name': string | undefined;
    private 'package': string | undefined;
    public runtime: CreateFunctionRequestBodyRuntimeEnum;
    public timeout: number;
    public handler: string;
    private 'memory_size': number | undefined;
    private 'code_type': CreateFunctionRequestBodyCodeTypeEnum | undefined;
    private 'code_url'?: string | undefined;
    private 'code_filename'?: string | undefined;
    private 'user_data'?: string | undefined;
    public xrole?: string;
    private 'app_xrole'?: string | undefined;
    public description?: string;
    private 'func_code'?: FuncCode | undefined;
    private 'initializer_handler'?: string | undefined;
    private 'initializer_timeout'?: number | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public type?: CreateFunctionRequestBodyTypeEnum;
    public constructor(funcName?: any, _package?: any, runtime?: any, timeout?: any, handler?: any, memorySize?: any, codeType?: any) { 
        this['func_name'] = funcName;
        this['package'] = _package;
        this['runtime'] = runtime;
        this['timeout'] = timeout;
        this['handler'] = handler;
        this['memory_size'] = memorySize;
        this['code_type'] = codeType;
    }
    public withFuncName(funcName: string): CreateFunctionRequestBody {
        this['func_name'] = funcName;
        return this;
    }
    public set funcName(funcName: string | undefined) {
        this['func_name'] = funcName;
    }
    public get funcName() {
        return this['func_name'];
    }
    public withPackage(_package: string): CreateFunctionRequestBody {
        this['package'] = _package;
        return this;
    }
    public set _package(_package: string | undefined) {
        this['package'] = _package;
    }
    public get _package() {
        return this['package'];
    }
    public withRuntime(runtime: CreateFunctionRequestBodyRuntimeEnum): CreateFunctionRequestBody {
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
    public withMemorySize(memorySize: number): CreateFunctionRequestBody {
        this['memory_size'] = memorySize;
        return this;
    }
    public set memorySize(memorySize: number | undefined) {
        this['memory_size'] = memorySize;
    }
    public get memorySize() {
        return this['memory_size'];
    }
    public withCodeType(codeType: CreateFunctionRequestBodyCodeTypeEnum): CreateFunctionRequestBody {
        this['code_type'] = codeType;
        return this;
    }
    public set codeType(codeType: CreateFunctionRequestBodyCodeTypeEnum | undefined) {
        this['code_type'] = codeType;
    }
    public get codeType() {
        return this['code_type'];
    }
    public withCodeUrl(codeUrl: string): CreateFunctionRequestBody {
        this['code_url'] = codeUrl;
        return this;
    }
    public set codeUrl(codeUrl: string | undefined) {
        this['code_url'] = codeUrl;
    }
    public get codeUrl() {
        return this['code_url'];
    }
    public withCodeFilename(codeFilename: string): CreateFunctionRequestBody {
        this['code_filename'] = codeFilename;
        return this;
    }
    public set codeFilename(codeFilename: string | undefined) {
        this['code_filename'] = codeFilename;
    }
    public get codeFilename() {
        return this['code_filename'];
    }
    public withUserData(userData: string): CreateFunctionRequestBody {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
        return this['user_data'];
    }
    public withXrole(xrole: string): CreateFunctionRequestBody {
        this['xrole'] = xrole;
        return this;
    }
    public withAppXrole(appXrole: string): CreateFunctionRequestBody {
        this['app_xrole'] = appXrole;
        return this;
    }
    public set appXrole(appXrole: string | undefined) {
        this['app_xrole'] = appXrole;
    }
    public get appXrole() {
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
    public set funcCode(funcCode: FuncCode | undefined) {
        this['func_code'] = funcCode;
    }
    public get funcCode() {
        return this['func_code'];
    }
    public withInitializerHandler(initializerHandler: string): CreateFunctionRequestBody {
        this['initializer_handler'] = initializerHandler;
        return this;
    }
    public set initializerHandler(initializerHandler: string | undefined) {
        this['initializer_handler'] = initializerHandler;
    }
    public get initializerHandler() {
        return this['initializer_handler'];
    }
    public withInitializerTimeout(initializerTimeout: number): CreateFunctionRequestBody {
        this['initializer_timeout'] = initializerTimeout;
        return this;
    }
    public set initializerTimeout(initializerTimeout: number | undefined) {
        this['initializer_timeout'] = initializerTimeout;
    }
    public get initializerTimeout() {
        return this['initializer_timeout'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateFunctionRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withType(type: CreateFunctionRequestBodyTypeEnum): CreateFunctionRequestBody {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateFunctionRequestBodyRuntimeEnum {
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
    PYTHON3_9 = 'Python3.9'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateFunctionRequestBodyCodeTypeEnum {
    INLINE = 'inline',
    ZIP = 'zip',
    OBS = 'obs',
    JAR = 'jar'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateFunctionRequestBodyTypeEnum {
    V1 = 'v1',
    V2 = 'v2'
}
