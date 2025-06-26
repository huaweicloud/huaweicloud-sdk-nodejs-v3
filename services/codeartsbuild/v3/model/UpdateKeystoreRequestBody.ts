

export class UpdateKeystoreRequestBody {
    public id?: string;
    public description?: string;
    private 'keystore_name'?: string;
    public share?: number;
    public constructor(id?: string, description?: string, keystoreName?: string, share?: number) { 
        this['id'] = id;
        this['description'] = description;
        this['keystore_name'] = keystoreName;
        this['share'] = share;
    }
    public withId(id: string): UpdateKeystoreRequestBody {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): UpdateKeystoreRequestBody {
        this['description'] = description;
        return this;
    }
    public withKeystoreName(keystoreName: string): UpdateKeystoreRequestBody {
        this['keystore_name'] = keystoreName;
        return this;
    }
    public set keystoreName(keystoreName: string  | undefined) {
        this['keystore_name'] = keystoreName;
    }
    public get keystoreName(): string | undefined {
        return this['keystore_name'];
    }
    public withShare(share: number): UpdateKeystoreRequestBody {
        this['share'] = share;
        return this;
    }
}