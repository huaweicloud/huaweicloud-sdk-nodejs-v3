

export class ListKeystoreResult {
    private 'keystore_name'?: string;
    public id?: string;
    public constructor() { 
    }
    public withKeystoreName(keystoreName: string): ListKeystoreResult {
        this['keystore_name'] = keystoreName;
        return this;
    }
    public set keystoreName(keystoreName: string  | undefined) {
        this['keystore_name'] = keystoreName;
    }
    public get keystoreName(): string | undefined {
        return this['keystore_name'];
    }
    public withId(id: string): ListKeystoreResult {
        this['id'] = id;
        return this;
    }
}