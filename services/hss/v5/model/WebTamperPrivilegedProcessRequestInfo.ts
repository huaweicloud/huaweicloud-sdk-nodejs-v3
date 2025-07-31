

export class WebTamperPrivilegedProcessRequestInfo {
    private 'privileged_process_path_list'?: Array<string>;
    private 'privileged_child_status'?: boolean;
    public constructor() { 
    }
    public withPrivilegedProcessPathList(privilegedProcessPathList: Array<string>): WebTamperPrivilegedProcessRequestInfo {
        this['privileged_process_path_list'] = privilegedProcessPathList;
        return this;
    }
    public set privilegedProcessPathList(privilegedProcessPathList: Array<string>  | undefined) {
        this['privileged_process_path_list'] = privilegedProcessPathList;
    }
    public get privilegedProcessPathList(): Array<string> | undefined {
        return this['privileged_process_path_list'];
    }
    public withPrivilegedChildStatus(privilegedChildStatus: boolean): WebTamperPrivilegedProcessRequestInfo {
        this['privileged_child_status'] = privilegedChildStatus;
        return this;
    }
    public set privilegedChildStatus(privilegedChildStatus: boolean  | undefined) {
        this['privileged_child_status'] = privilegedChildStatus;
    }
    public get privilegedChildStatus(): boolean | undefined {
        return this['privileged_child_status'];
    }
}