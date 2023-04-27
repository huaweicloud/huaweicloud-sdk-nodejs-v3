

export class UpdateMember {
    public status: UpdateMemberStatusEnum;
    private 'vault_id'?: string | undefined;
    public constructor(status?: any) { 
        this['status'] = status;
    }
    public withStatus(status: UpdateMemberStatusEnum): UpdateMember {
        this['status'] = status;
        return this;
    }
    public withVaultId(vaultId: string): UpdateMember {
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
export enum UpdateMemberStatusEnum {
    ACCEPTED = 'accepted',
    PENDING = 'pending',
    REJECTED = 'rejected'
}
