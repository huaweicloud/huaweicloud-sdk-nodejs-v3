import { FuncVpc } from './FuncVpc';
import { MountConfig } from './MountConfig';
import { StrategyConfig } from './StrategyConfig';


export class UpdateFunctionConfigRequestBody {
    private 'func_name': string | undefined;
    public runtime: UpdateFunctionConfigRequestBodyRuntimeEnum;
    public timeout: number;
    public handler: string;
    private 'memory_size': number | undefined;
    private 'user_data'?: string | undefined;
    public xrole?: string;
    private 'app_xrole'?: string | undefined;
    public description?: string;
    private 'func_vpc'?: FuncVpc | undefined;
    private 'mount_config'?: MountConfig | undefined;
    private 'strategy_config'?: StrategyConfig | undefined;
    private 'extend_config'?: string | undefined;
    private 'initializer_handler'?: string | undefined;
    private 'initializer_timeout'?: number | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'is_stateful_function'?: boolean | undefined;
    public constructor(funcName?: any, runtime?: any, timeout?: any, handler?: any, memorySize?: any) { 
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
    public set funcName(funcName: string | undefined) {
        this['func_name'] = funcName;
    }
    public get funcName() {
        return this['func_name'];
    }
    public withRuntime(runtime: UpdateFunctionConfigRequestBodyRuntimeEnum): UpdateFunctionConfigRequestBody {
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
    public set memorySize(memorySize: number | undefined) {
        this['memory_size'] = memorySize;
    }
    public get memorySize() {
        return this['memory_size'];
    }
    public withUserData(userData: string): UpdateFunctionConfigRequestBody {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
        return this['user_data'];
    }
    public withXrole(xrole: string): UpdateFunctionConfigRequestBody {
        this['xrole'] = xrole;
        return this;
    }
    public withAppXrole(appXrole: string): UpdateFunctionConfigRequestBody {
        this['app_xrole'] = appXrole;
        return this;
    }
    public set appXrole(appXrole: string | undefined) {
        this['app_xrole'] = appXrole;
    }
    public get appXrole() {
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
    public set funcVpc(funcVpc: FuncVpc | undefined) {
        this['func_vpc'] = funcVpc;
    }
    public get funcVpc() {
        return this['func_vpc'];
    }
    public withMountConfig(mountConfig: MountConfig): UpdateFunctionConfigRequestBody {
        this['mount_config'] = mountConfig;
        return this;
    }
    public set mountConfig(mountConfig: MountConfig | undefined) {
        this['mount_config'] = mountConfig;
    }
    public get mountConfig() {
        return this['mount_config'];
    }
    public withStrategyConfig(strategyConfig: StrategyConfig): UpdateFunctionConfigRequestBody {
        this['strategy_config'] = strategyConfig;
        return this;
    }
    public set strategyConfig(strategyConfig: StrategyConfig | undefined) {
        this['strategy_config'] = strategyConfig;
    }
    public get strategyConfig() {
        return this['strategy_config'];
    }
    public withExtendConfig(extendConfig: string): UpdateFunctionConfigRequestBody {
        this['extend_config'] = extendConfig;
        return this;
    }
    public set extendConfig(extendConfig: string | undefined) {
        this['extend_config'] = extendConfig;
    }
    public get extendConfig() {
        return this['extend_config'];
    }
    public withInitializerHandler(initializerHandler: string): UpdateFunctionConfigRequestBody {
        this['initializer_handler'] = initializerHandler;
        return this;
    }
    public set initializerHandler(initializerHandler: string | undefined) {
        this['initializer_handler'] = initializerHandler;
    }
    public get initializerHandler() {
        return this['initializer_handler'];
    }
    public withInitializerTimeout(initializerTimeout: number): UpdateFunctionConfigRequestBody {
        this['initializer_timeout'] = initializerTimeout;
        return this;
    }
    public set initializerTimeout(initializerTimeout: number | undefined) {
        this['initializer_timeout'] = initializerTimeout;
    }
    public get initializerTimeout() {
        return this['initializer_timeout'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateFunctionConfigRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withIsStatefulFunction(isStatefulFunction: boolean): UpdateFunctionConfigRequestBody {
        this['is_stateful_function'] = isStatefulFunction;
        return this;
    }
    public set isStatefulFunction(isStatefulFunction: boolean | undefined) {
        this['is_stateful_function'] = isStatefulFunction;
    }
    public get isStatefulFunction() {
        return this['is_stateful_function'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateFunctionConfigRequestBodyRuntimeEnum {
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
