

export class ShowMembersDetailRequest {
    private 'backup_id': string | undefined;
    private 'dest_project_id'?: string | undefined;
    private 'image_id'?: string | undefined;
    public status?: string;
    private 'vault_id'?: string | undefined;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public sort?: string;
    public constructor(backupId?: any) { 
        this['backup_id'] = backupId;
    }
    public withBackupId(backupId: string): ShowMembersDetailRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
    public withDestProjectId(destProjectId: string): ShowMembersDetailRequest {
        this['dest_project_id'] = destProjectId;
        return this;
    }
    public set destProjectId(destProjectId: string | undefined) {
        this['dest_project_id'] = destProjectId;
    }
    public get destProjectId() {
        return this['dest_project_id'];
    }
    public withImageId(imageId: string): ShowMembersDetailRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId() {
        return this['image_id'];
    }
    public withStatus(status: string): ShowMembersDetailRequest {
        this['status'] = status;
        return this;
    }
    public withVaultId(vaultId: string): ShowMembersDetailRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId() {
        return this['vault_id'];
    }
    public withLimit(limit: number): ShowMembersDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ShowMembersDetailRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ShowMembersDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withSort(sort: string): ShowMembersDetailRequest {
        this['sort'] = sort;
        return this;
    }
}