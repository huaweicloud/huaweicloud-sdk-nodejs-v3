

export class JobStatusBody {
    public status?: string;
    private 'abort_status'?: string;
    public label?: string;
    public constructor() { 
    }
    public withStatus(status: string): JobStatusBody {
        this['status'] = status;
        return this;
    }
    public withAbortStatus(abortStatus: string): JobStatusBody {
        this['abort_status'] = abortStatus;
        return this;
    }
    public set abortStatus(abortStatus: string  | undefined) {
        this['abort_status'] = abortStatus;
    }
    public get abortStatus(): string | undefined {
        return this['abort_status'];
    }
    public withLabel(label: string): JobStatusBody {
        this['label'] = label;
        return this;
    }
}