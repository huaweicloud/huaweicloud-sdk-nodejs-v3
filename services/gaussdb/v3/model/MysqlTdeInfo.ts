

export class MysqlTdeInfo {
    private 'enable_tde'?: boolean;
    private 'encryption_type'?: string;
    public constructor(enableTde?: boolean, encryptionType?: string) { 
        this['enable_tde'] = enableTde;
        this['encryption_type'] = encryptionType;
    }
    public withEnableTde(enableTde: boolean): MysqlTdeInfo {
        this['enable_tde'] = enableTde;
        return this;
    }
    public set enableTde(enableTde: boolean  | undefined) {
        this['enable_tde'] = enableTde;
    }
    public get enableTde(): boolean | undefined {
        return this['enable_tde'];
    }
    public withEncryptionType(encryptionType: string): MysqlTdeInfo {
        this['encryption_type'] = encryptionType;
        return this;
    }
    public set encryptionType(encryptionType: string  | undefined) {
        this['encryption_type'] = encryptionType;
    }
    public get encryptionType(): string | undefined {
        return this['encryption_type'];
    }
}