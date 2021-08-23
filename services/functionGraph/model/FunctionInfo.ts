export interface FunctionInfoInputInterface {
    func_urn?: string;
    func_name?: string;
    domain_id?: string;
    namespace?: string;
    project_name?: string;
    pkg?: string;
    runtime?: string;
    timeout?: number;
    handler?: string;
    memory_size?: string;
    cpu?: number;
    code_type?: string;
    code_filename?: string;
    code_size?: number;
    digest?: string;
    version?: string;
    image_name?: string;
    enterprise_project_id?: string;
}

const INFO_KEYS = ['func_urn', 'func_name', 'domain_id', 'namespace', 'project_name', 'pkg', 'runtime', 'timeout', 
'handler', 'memory_size', 'cpu', 'code_type', 'code_filename', 'code_size', 'digest', 'version', 'image_name', 'eenterprise_project_id'];
export class FunctionInfo {
    public func_urn?: string;
    public func_name?: string;
    public domain_id?: string;
    public namespace?: string;
    public project_name?: string;
    public pkg?: string;
    public runtime?: string;
    public timeout?: number;
    public handler?: string;
    public memory_size?: string;
    public cpu?: number;
    public code_type?: string;
    public code_filename?: string;
    public code_size?: number;
    public digest?: string;
    public version?: string;
    public image_name?: string;
    public enterprise_project_id?: string;

    public constructor(input: FunctionInfoInputInterface){
        this['func_urn'] = input.func_urn;
        this['func_name'] = input.func_name;
        this['domain_id'] = input.domain_id;
        this['namespace'] = input.namespace;
        this['project_name'] = input.project_name;
        this['pkg'] = input.pkg;
        this['runtime'] = input.runtime;
        this['timeout'] = input.timeout;
        this['handler'] = input.handler;
        this['memory_size'] = input.memory_size;
        this['cpu'] = input.cpu;
        this['code_type'] = input.code_type;
        this['code_filename'] = input.code_filename;
        this['code_size'] = input.code_size;
        this['digest'] = input.digest;
        this['version'] = input.version;
        this['image_name'] = input.image_name;
        this['enterprise_project_id'] = input.enterprise_project_id;
    }
}