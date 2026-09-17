import { CancelInstanceProcessInfo } from './CancelInstanceProcessInfo';


export class CancelInstanceProcessRequestBody {
    private 'engine_type'?: string;
    public processes?: Array<CancelInstanceProcessInfo>;
    public constructor(engineType?: string, processes?: Array<CancelInstanceProcessInfo>) { 
        this['engine_type'] = engineType;
        this['processes'] = processes;
    }
    public withEngineType(engineType: string): CancelInstanceProcessRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withProcesses(processes: Array<CancelInstanceProcessInfo>): CancelInstanceProcessRequestBody {
        this['processes'] = processes;
        return this;
    }
}