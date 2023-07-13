

export class GlanceUpdateImageMemberRequestBody {
    public status: GlanceUpdateImageMemberRequestBodyStatusEnum;
    private 'vault_id'?: string | undefined;
    public constructor(status?: any) { 
        this['status'] = status;
    }
    public withStatus(status: GlanceUpdateImageMemberRequestBodyStatusEnum): GlanceUpdateImageMemberRequestBody {
        this['status'] = status;
        return this;
    }
    public withVaultId(vaultId: string): GlanceUpdateImageMemberRequestBody {
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
export enum GlanceUpdateImageMemberRequestBodyStatusEnum {
    ACCEPTED = 'accepted',
    REJECTED = 'rejected'
}
