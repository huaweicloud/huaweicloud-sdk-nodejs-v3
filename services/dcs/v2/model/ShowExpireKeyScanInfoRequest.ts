

export class ShowExpireKeyScanInfoRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public status?: ShowExpireKeyScanInfoRequestStatusEnum | string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowExpireKeyScanInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ShowExpireKeyScanInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowExpireKeyScanInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withStatus(status: ShowExpireKeyScanInfoRequestStatusEnum | string): ShowExpireKeyScanInfoRequest {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowExpireKeyScanInfoRequestStatusEnum {
    WAITING = 'waiting',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed'
}
