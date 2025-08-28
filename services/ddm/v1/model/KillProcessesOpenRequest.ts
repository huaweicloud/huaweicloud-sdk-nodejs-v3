

export class KillProcessesOpenRequest {
    private 'process_ids'?: Array<string>;
    public constructor(processIds?: Array<string>) { 
        this['process_ids'] = processIds;
    }
    public withProcessIds(processIds: Array<string>): KillProcessesOpenRequest {
        this['process_ids'] = processIds;
        return this;
    }
    public set processIds(processIds: Array<string>  | undefined) {
        this['process_ids'] = processIds;
    }
    public get processIds(): Array<string> | undefined {
        return this['process_ids'];
    }
}