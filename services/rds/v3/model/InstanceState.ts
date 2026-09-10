

export class InstanceState {
    public status?: string;
    private 'wait_restart_for_params'?: boolean;
    public constructor() { 
    }
    public withStatus(status: string): InstanceState {
        this['status'] = status;
        return this;
    }
    public withWaitRestartForParams(waitRestartForParams: boolean): InstanceState {
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