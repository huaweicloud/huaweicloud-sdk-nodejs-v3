

export class WarRoomEnumeration {
    public id?: string;
    private 'name_zh'?: string;
    private 'name_en'?: string;
    public type?: string;
    public constructor() { 
    }
    public withId(id: string): WarRoomEnumeration {
        this['id'] = id;
        return this;
    }
    public withNameZh(nameZh: string): WarRoomEnumeration {
        this['name_zh'] = nameZh;
        return this;
    }
    public set nameZh(nameZh: string  | undefined) {
        this['name_zh'] = nameZh;
    }
    public get nameZh(): string | undefined {
        return this['name_zh'];
    }
    public withNameEn(nameEn: string): WarRoomEnumeration {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withType(type: string): WarRoomEnumeration {
        this['type'] = type;
        return this;
    }
}