

export class BigKeysInfoResponseBody {
    private 'db_id'?: number;
    private 'key_type'?: string;
    private 'key_name'?: string;
    private 'key_size'?: number;
    public constructor() { 
    }
    public withDbId(dbId: number): BigKeysInfoResponseBody {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: number  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): number | undefined {
        return this['db_id'];
    }
    public withKeyType(keyType: string): BigKeysInfoResponseBody {
        this['key_type'] = keyType;
        return this;
    }
    public set keyType(keyType: string  | undefined) {
        this['key_type'] = keyType;
    }
    public get keyType(): string | undefined {
        return this['key_type'];
    }
    public withKeyName(keyName: string): BigKeysInfoResponseBody {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withKeySize(keySize: number): BigKeysInfoResponseBody {
        this['key_size'] = keySize;
        return this;
    }
    public set keySize(keySize: number  | undefined) {
        this['key_size'] = keySize;
    }
    public get keySize(): number | undefined {
        return this['key_size'];
    }
}