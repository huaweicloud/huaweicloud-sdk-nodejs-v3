

export class CreateCredentialOption {
    private 'user_id': string | undefined;
    public description?: string;
    public constructor(userId?: any) { 
        this['user_id'] = userId;
    }
    public withUserId(userId: string): CreateCredentialOption {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withDescription(description: string): CreateCredentialOption {
        this['description'] = description;
        return this;
    }
}