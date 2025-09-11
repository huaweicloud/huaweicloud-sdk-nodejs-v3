

export class OverwriteResultResp {
    private 'success_ids'?: string;
    private 'failed_ids'?: string;
    public constructor() { 
    }
    public withSuccessIds(successIds: string): OverwriteResultResp {
        this['success_ids'] = successIds;
        return this;
    }
    public set successIds(successIds: string  | undefined) {
        this['success_ids'] = successIds;
    }
    public get successIds(): string | undefined {
        return this['success_ids'];
    }
    public withFailedIds(failedIds: string): OverwriteResultResp {
        this['failed_ids'] = failedIds;
        return this;
    }
    public set failedIds(failedIds: string  | undefined) {
        this['failed_ids'] = failedIds;
    }
    public get failedIds(): string | undefined {
        return this['failed_ids'];
    }
}