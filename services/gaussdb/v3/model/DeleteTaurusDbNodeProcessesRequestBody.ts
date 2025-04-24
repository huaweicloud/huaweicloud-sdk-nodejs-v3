

export class DeleteTaurusDbNodeProcessesRequestBody {
    public processes?: Array<number>;
    public constructor(processes?: Array<number>) { 
        this['processes'] = processes;
    }
    public withProcesses(processes: Array<number>): DeleteTaurusDbNodeProcessesRequestBody {
        this['processes'] = processes;
        return this;
    }
}