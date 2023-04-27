

export class Member {
    public status: MemberStatusEnum;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    private 'backup_id'?: string | undefined;
    private 'image_id'?: string | undefined;
    private 'dest_project_id'?: string | undefined;
    private 'vault_id'?: string | undefined;
    public id?: string;
    public constructor(status?: any) { 
        this['status'] = status;
    }
    public withStatus(status: MemberStatusEnum): Member {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): Member {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): Member {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withBackupId(backupId: string): Member {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
    public withImageId(imageId: string): Member {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId() {
        return this['image_id'];
    }
    public withDestProjectId(destProjectId: string): Member {
        this['dest_project_id'] = destProjectId;
        return this;
    }
    public set destProjectId(destProjectId: string | undefined) {
        this['dest_project_id'] = destProjectId;
    }
    public get destProjectId() {
        return this['dest_project_id'];
    }
    public withVaultId(vaultId: string): Member {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId() {
        return this['vault_id'];
    }
    public withId(id: string): Member {
        this['id'] = id;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MemberStatusEnum {
    PENDING = 'pending',
    ACCEPTED = 'accepted',
    REJECTED = 'rejected'
}
