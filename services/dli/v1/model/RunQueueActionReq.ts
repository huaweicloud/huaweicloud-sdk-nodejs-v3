

export class RunQueueActionReq {
    public action?: string;
    public force?: boolean;
    private 'cu_count'?: number;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): RunQueueActionReq {
        this['action'] = action;
        return this;
    }
    public withForce(force: boolean): RunQueueActionReq {
        this['force'] = force;
        return this;
    }
    public withCuCount(cuCount: number): RunQueueActionReq {
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