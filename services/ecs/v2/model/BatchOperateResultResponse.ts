

export class BatchOperateResultResponse {
    public status?: string;
    private 'server_id'?: string;
    private 'fail_reason'?: string;
    public constructor() { 
    }
    public withStatus(status: string): BatchOperateResultResponse {
        this['status'] = status;
        return this;
    }
    public withServerId(serverId: string): BatchOperateResultResponse {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withFailReason(failReason: string): BatchOperateResultResponse {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
}