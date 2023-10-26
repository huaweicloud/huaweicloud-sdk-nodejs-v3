

export class DeleteBackendTargetRequest {
    private 'share_id'?: string;
    private 'target_id'?: string;
    private 'delete_data_in_file_system'?: boolean;
    public constructor(shareId?: string, targetId?: string) { 
        this['share_id'] = shareId;
        this['target_id'] = targetId;
    }
    public withShareId(shareId: string): DeleteBackendTargetRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withTargetId(targetId: string): DeleteBackendTargetRequest {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withDeleteDataInFileSystem(deleteDataInFileSystem: boolean): DeleteBackendTargetRequest {
        this['delete_data_in_file_system'] = deleteDataInFileSystem;
        return this;
    }
    public set deleteDataInFileSystem(deleteDataInFileSystem: boolean  | undefined) {
        this['delete_data_in_file_system'] = deleteDataInFileSystem;
    }
    public get deleteDataInFileSystem(): boolean | undefined {
        return this['delete_data_in_file_system'];
    }
}