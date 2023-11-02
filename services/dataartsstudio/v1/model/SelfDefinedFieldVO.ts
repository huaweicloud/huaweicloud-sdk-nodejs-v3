

export class SelfDefinedFieldVO {
    private 'fd_name_ch'?: string;
    private 'fd_name_en'?: string;
    private 'not_null'?: boolean;
    private 'fd_value'?: string;
    public constructor() { 
    }
    public withFdNameCh(fdNameCh: string): SelfDefinedFieldVO {
        this['fd_name_ch'] = fdNameCh;
        return this;
    }
    public set fdNameCh(fdNameCh: string  | undefined) {
        this['fd_name_ch'] = fdNameCh;
    }
    public get fdNameCh(): string | undefined {
        return this['fd_name_ch'];
    }
    public withFdNameEn(fdNameEn: string): SelfDefinedFieldVO {
        this['fd_name_en'] = fdNameEn;
        return this;
    }
    public set fdNameEn(fdNameEn: string  | undefined) {
        this['fd_name_en'] = fdNameEn;
    }
    public get fdNameEn(): string | undefined {
        return this['fd_name_en'];
    }
    public withNotNull(notNull: boolean): SelfDefinedFieldVO {
        this['not_null'] = notNull;
        return this;
    }
    public set notNull(notNull: boolean  | undefined) {
        this['not_null'] = notNull;
    }
    public get notNull(): boolean | undefined {
        return this['not_null'];
    }
    public withFdValue(fdValue: string): SelfDefinedFieldVO {
        this['fd_value'] = fdValue;
        return this;
    }
    public set fdValue(fdValue: string  | undefined) {
        this['fd_value'] = fdValue;
    }
    public get fdValue(): string | undefined {
        return this['fd_value'];
    }
}