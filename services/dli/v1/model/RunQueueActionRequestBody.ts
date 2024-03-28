

export class RunQueueActionRequestBody {
    public action?: string;
    public force?: boolean;
    private 'cu_count'?: number;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): RunQueueActionRequestBody {
        this['action'] = action;
        return this;
    }
    public withForce(force: boolean): RunQueueActionRequestBody {
        this['force'] = force;
        return this;
    }
    public withCuCount(cuCount: number): RunQueueActionRequestBody {
        this['cu_count'] = cuCount;
        return this;
    }
    public set cuCount(cuCount: number  | undefined) {
        this['cu_count'] = cuCount;
    }
    public get cuCount(): number | undefined {
        return this['cu_count'];
    }
}