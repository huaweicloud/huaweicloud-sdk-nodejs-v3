
// export class CreateFunctionRequestBody {
//     private 'security_group': CreateFunctionRequestBody | undefined;
//     public constructor(security_group?: any){
//         this['security_group'] = security_group;
//     }
//     public withSecurityGroup(security_group: CreateFunctionRequestBody): CreateFunctionRequestBody{
//         this['security_group'] = security_group;
//         return this;
//     }
//     public set securityGroup(securityGroup: CreateFunctionRequestBody | undefined){
//         this['securityGroup'] = securityGroup;
//     }
//     public get securithGroup(){
//         return this['securith_group'];
//     }
// }

export interface InputProps {
    func_name: string;
    handler: string;
    memory_size: number;
    timeout: number;
    runtime: string;
    pkg: string;
    code_type: string;
}
export class CreateFunctionRequestBody {
    public func_name: string;
    public handler: string;
    public memory_size: number;
    public timeout: number;
    public runtime: string;
    public package: string;
    public code_type: string;
    public code_filename?: string;
    public func_code?: any;
    public description?: string;
    public enterprise_project_id?: string;
    public app_xrole?: string;
    public initializer_handler?: string;
    public initializer_timeout?: string;
    public constructor(input: InputProps){
        this['func_name'] = input.func_name;
        this['handler'] = input.handler;
        this['memory_size'] = input.memory_size;
        this['timeout'] = input.timeout;
        this['runtime'] = input.runtime;
        this['package'] = input.pkg;
        this['code_type'] = input.code_type;
    }
    public withFunctionName(func_name: string): CreateFunctionRequestBody{
        this['func_name'] = func_name;
        return this;
    }
    public withHandler(handler: string): CreateFunctionRequestBody{
        this['handler'] = handler;
        return this;
    }
    public withMemorySize(memory_size: number): CreateFunctionRequestBody{
        this['memory_size'] = memory_size;
        return this;
    }
    public withTimeout(timeout: number): CreateFunctionRequestBody{
        this['timeout'] = timeout;
        return this;
    }
    public withRuntime(runtime: string): CreateFunctionRequestBody{
        this['runtime'] = runtime;
        return this;
    }
    public withpkg(pkg: string): CreateFunctionRequestBody{
        this['package'] = pkg;
        return this;
    }
    public withCodeType(code_type: string): CreateFunctionRequestBody{
        this['code_type'] = code_type;
        return this;
    }
    public withCodeFileName(code_filename: string): CreateFunctionRequestBody{
        this['code_filename'] = code_filename;
        return this;
    }
    public withFunctionCode(functionCode: string): CreateFunctionRequestBody{
        this['func_code'] = {file:functionCode};
        return this;
    }
    public withEnterpriseProjectId(enterprise_project_id: string): CreateFunctionRequestBody{
        this['enterprise_project_id'] = enterprise_project_id;
        return this;
    }
    public withAppXrole(app_xrole: string): CreateFunctionRequestBody{
        this['app_xrole'] = app_xrole;
        return this;
    }
    public withInitializerHandler(initializer_handler: string): CreateFunctionRequestBody{
        this['initializer_handler'] = initializer_handler;
        return this;
    }
    public withInitializerTimeout(initializer_timeout: string): CreateFunctionRequestBody{
        this['initializer_timeout'] = initializer_timeout;
        return this;
    }
}