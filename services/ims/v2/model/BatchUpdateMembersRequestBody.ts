

export class BatchUpdateMembersRequestBody {
    public images?: Array<string>;
    private 'project_id'?: string;
    public status?: BatchUpdateMembersRequestBodyStatusEnum | string;
    private 'vault_id'?: string;
    public constructor(images?: Array<string>, projectId?: string, status?: string) { 
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
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withStatus(status: BatchUpdateMembersRequestBodyStatusEnum | string): BatchUpdateMembersRequestBody {
        this['status'] = status;
        return this;
    }
    public withVaultId(vaultId: string): BatchUpdateMembersRequestBody {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
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
