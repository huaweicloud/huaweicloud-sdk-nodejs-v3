

export class BatchUpdateMembersRequestBody {
    public images: Array<string>;
    private 'project_id': string | undefined;
    public status: BatchUpdateMembersRequestBodyStatusEnum;
    private 'vault_id'?: string | undefined;
    public constructor(images?: any, projectId?: any, status?: any) { 
        this['images'] = images;
        this['project_id'] = projectId;
        this['status'] = status;
    }
    public withImages(images: Array<string>): BatchUpdateMembersRequestBody {
        this['images'] = images;
        return this;
    }
    public withProjectId(projectId: string): BatchUpdateMembersRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withStatus(status: BatchUpdateMembersRequestBodyStatusEnum): BatchUpdateMembersRequestBody {
        this['status'] = status;
        return this;
    }
    public withVaultId(vaultId: string): BatchUpdateMembersRequestBody {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId() {
        return this['vault_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchUpdateMembersRequestBodyStatusEnum {
    ACCEPTED = 'accepted',
    REJECTED = 'rejected'
}
