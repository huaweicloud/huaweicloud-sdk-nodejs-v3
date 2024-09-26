import { Description } from './Description';
import { UUID64Identifier } from './UUID64Identifier';


export class SiteGroupReferenceInfo {
    public id?: string;
    public description?: string;
    private 'name_en'?: string;
    private 'name_cn'?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): SiteGroupReferenceInfo {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): SiteGroupReferenceInfo {
        this['description'] = description;
        return this;
    }
    public withNameEn(nameEn: string): SiteGroupReferenceInfo {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withNameCn(nameCn: string): SiteGroupReferenceInfo {
        this['name_cn'] = nameCn;
        return this;
    }
    public set nameCn(nameCn: string  | undefined) {
        this['name_cn'] = nameCn;
    }
    public get nameCn(): string | undefined {
        return this['name_cn'];
    }
}