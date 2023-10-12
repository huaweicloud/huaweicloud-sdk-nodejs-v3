

export class ShowCertKeyRequest {
    private 'task_id'?: string;
    private 'enable_ca_cert'?: boolean;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): ShowCertKeyRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withEnableCaCert(enableCaCert: boolean): ShowCertKeyRequest {
        this['enable_ca_cert'] = enableCaCert;
        return this;
    }
    public set enableCaCert(enableCaCert: boolean  | undefined) {
        this['enable_ca_cert'] = enableCaCert;
    }
    public get enableCaCert(): boolean | undefined {
        return this['enable_ca_cert'];
    }
}