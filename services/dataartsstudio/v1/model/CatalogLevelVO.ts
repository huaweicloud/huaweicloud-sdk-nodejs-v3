

export class CatalogLevelVO {
    public id?: number;
    public level?: number;
    private 'name_ch'?: string;
    private 'name_en'?: string;
    public constructor() { 
    }
    public withId(id: number): CatalogLevelVO {
        this['id'] = id;
        return this;
    }
    public withLevel(level: number): CatalogLevelVO {
        this['level'] = level;
        return this;
    }
    public withNameCh(nameCh: string): CatalogLevelVO {
        this['name_ch'] = nameCh;
        return this;
    }
    public set nameCh(nameCh: string  | undefined) {
        this['name_ch'] = nameCh;
    }
    public get nameCh(): string | undefined {
        return this['name_ch'];
    }
    public withNameEn(nameEn: string): CatalogLevelVO {
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