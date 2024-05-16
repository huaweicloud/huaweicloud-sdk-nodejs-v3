

export class HtapInstanceListInstanceState {
    private 'instance_status'?: string;
    private 'create_fail_error_code'?: string;
    private 'fail_message'?: string;
    private 'wait_restart_for_params'?: boolean;
    public constructor() { 
    }
    public withInstanceStatus(instanceStatus: string): HtapInstanceListInstanceState {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withCreateFailErrorCode(createFailErrorCode: string): HtapInstanceListInstanceState {
        this['create_fail_error_code'] = createFailErrorCode;
        return this;
    }
    public set createFailErrorCode(createFailErrorCode: string  | undefined) {
        this['create_fail_error_code'] = createFailErrorCode;
    }
    public get createFailErrorCode(): string | undefined {
        return this['create_fail_error_code'];
    }
    public withFailMessage(failMessage: string): HtapInstanceListInstanceState {
        this['fail_message'] = failMessage;
        return this;
    }
    public set failMessage(failMessage: string  | undefined) {
        this['fail_message'] = failMessage;
    }
    public get failMessage(): string | undefined {
        return this['fail_message'];
    }
    public withWaitRestartForParams(waitRestartForParams: boolean): HtapInstanceListInstanceState {
        this['wait_restart_for_params'] = waitRestartForParams;
        return this;
    }
    public set waitRestartForParams(waitRestartForParams: boolean  | undefined) {
        this['wait_restart_for_params'] = waitRestartForParams;
    }
    public get waitRestartForParams(): boolean | undefined {
        return this['wait_restart_for_params'];
    }
}