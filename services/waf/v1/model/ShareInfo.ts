

export class ShareInfo {
    private 'share_count'?: number | undefined;
    private 'accept_count'?: number | undefined;
    private 'process_status'?: number | undefined;
    public constructor() { 
    }
    public withShareCount(shareCount: number): ShareInfo {
        this['share_count'] = shareCount;
        return this;
    }
    public set shareCount(shareCount: number | undefined) {
        this['share_count'] = shareCount;
    }
    public get shareCount() {
        return this['share_count'];
    }
    public withAcceptCount(acceptCount: number): ShareInfo {
        this['accept_count'] = acceptCount;
        return this;
    }
    public set acceptCount(acceptCount: number | undefined) {
        this['accept_count'] = acceptCount;
    }
    public get acceptCount() {
        return this['accept_count'];
    }
    public withProcessStatus(processStatus: number): ShareInfo {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: number | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus() {
        return this['process_status'];
    }
}