

export class CloneServer {
    private 'vm_id'?: string;
    public name?: string;
    private 'clone_error'?: string;
    private 'clone_state'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withVmId(vmId: string): CloneServer {
        this['vm_id'] = vmId;
        return this;
    }
    public set vmId(vmId: string  | undefined) {
        this['vm_id'] = vmId;
    }
    public get vmId(): string | undefined {
        return this['vm_id'];
    }
    public withName(name: string): CloneServer {
        this['name'] = name;
        return this;
    }
    public withCloneError(cloneError: string): CloneServer {
        this['clone_error'] = cloneError;
        return this;
    }
    public set cloneError(cloneError: string  | undefined) {
        this['clone_error'] = cloneError;
    }
    public get cloneError(): string | undefined {
        return this['clone_error'];
    }
    public withCloneState(cloneState: string): CloneServer {
        this['clone_state'] = cloneState;
        return this;
    }
    public set cloneState(cloneState: string  | undefined) {
        this['clone_state'] = cloneState;
    }
    public get cloneState(): string | undefined {
        return this['clone_state'];
    }
    public withErrorMsg(errorMsg: string): CloneServer {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}