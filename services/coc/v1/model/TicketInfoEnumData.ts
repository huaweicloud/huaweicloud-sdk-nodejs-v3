

export class TicketInfoEnumData {
    private 'filed_key'?: string;
    private 'enum_key'?: string;
    private 'name_zh'?: string;
    private 'name_en'?: string;
    public constructor(filedKey?: string, enumKey?: string, nameZh?: string, nameEn?: string) { 
        this['filed_key'] = filedKey;
        this['enum_key'] = enumKey;
        this['name_zh'] = nameZh;
        this['name_en'] = nameEn;
    }
    public withFiledKey(filedKey: string): TicketInfoEnumData {
        this['filed_key'] = filedKey;
        return this;
    }
    public set filedKey(filedKey: string  | undefined) {
        this['filed_key'] = filedKey;
    }
    public get filedKey(): string | undefined {
        return this['filed_key'];
    }
    public withEnumKey(enumKey: string): TicketInfoEnumData {
        this['enum_key'] = enumKey;
        return this;
    }
    public set enumKey(enumKey: string  | undefined) {
        this['enum_key'] = enumKey;
    }
    public get enumKey(): string | undefined {
        return this['enum_key'];
    }
    public withNameZh(nameZh: string): TicketInfoEnumData {
        this['name_zh'] = nameZh;
        return this;
    }
    public set nameZh(nameZh: string  | undefined) {
        this['name_zh'] = nameZh;
    }
    public get nameZh(): string | undefined {
        return this['name_zh'];
    }
    public withNameEn(nameEn: string): TicketInfoEnumData {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
}