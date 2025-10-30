

export class KernelForensicInfo {
    private 'read_addr'?: number;
    private 'syscall_num'?: number;
    private 'function'?: string;
    public module?: string;
    private 'ext_info'?: string;
    public constructor() { 
    }
    public withReadAddr(readAddr: number): KernelForensicInfo {
        this['read_addr'] = readAddr;
        return this;
    }
    public set readAddr(readAddr: number  | undefined) {
        this['read_addr'] = readAddr;
    }
    public get readAddr(): number | undefined {
        return this['read_addr'];
    }
    public withSyscallNum(syscallNum: number): KernelForensicInfo {
        this['syscall_num'] = syscallNum;
        return this;
    }
    public set syscallNum(syscallNum: number  | undefined) {
        this['syscall_num'] = syscallNum;
    }
    public get syscallNum(): number | undefined {
        return this['syscall_num'];
    }
    public withFunction(_function: string): KernelForensicInfo {
        this['function'] = _function;
        return this;
    }
    public set _function(_function: string  | undefined) {
        this['function'] = _function;
    }
    public get _function(): string | undefined {
        return this['function'];
    }
    public withModule(module: string): KernelForensicInfo {
        this['module'] = module;
        return this;
    }
    public withExtInfo(extInfo: string): KernelForensicInfo {
        this['ext_info'] = extInfo;
        return this;
    }
    public set extInfo(extInfo: string  | undefined) {
        this['ext_info'] = extInfo;
    }
    public get extInfo(): string | undefined {
        return this['ext_info'];
    }
}