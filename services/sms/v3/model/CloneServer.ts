

export class CloneServer {
    private 'vm_id'?: string | undefined;
    public name?: string;
    private 'clone_error'?: string | undefined;
    private 'clone_state'?: string | undefined;
    private 'error_msg'?: string | undefined;
    public constructor() { 
    }
    public withVmId(vmId: string): CloneServer {
        this['vm_id'] = vmId;
        return this;
    }
    public set vmId(vmId: string | undefined) {
        this['vm_id'] = vmId;
    }
    public get vmId() {
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
    public set cloneError(cloneError: string | undefined) {
        this['clone_error'] = cloneError;
    }
    public get cloneError() {
        return this['clone_error'];
    }
    public withCloneState(cloneState: string): CloneServer {
        this['clone_state'] = cloneState;
        return this;
    }
    public set cloneState(cloneState: string | undefined) {
        this['clone_state'] = cloneState;
    }
    public get cloneState() {
        return this['clone_state'];
    }
    public withErrorMsg(errorMsg: string): CloneServer {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg() {
        return this['error_msg'];
    }
}