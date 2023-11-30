import { DimensionAttributeVO } from './DimensionAttributeVO';


export class HierarchiesAttrVO {
    public id?: number;
    private 'hierarchies_id'?: number;
    private 'attr_id'?: number;
    public level?: number;
    private 'attr_name_en'?: string;
    private 'attr_name_ch'?: string;
    private 'detail_attr_ids'?: Array<number>;
    private 'detail_attr_name_ens'?: Array<string>;
    private 'detail_attr_name_chs'?: Array<string>;
    public attr?: DimensionAttributeVO;
    private 'detail_attrs'?: Array<DimensionAttributeVO>;
    public constructor() { 
    }
    public withId(id: number): HierarchiesAttrVO {
        this['id'] = id;
        return this;
    }
    public withHierarchiesId(hierarchiesId: number): HierarchiesAttrVO {
        this['hierarchies_id'] = hierarchiesId;
        return this;
    }
    public set hierarchiesId(hierarchiesId: number  | undefined) {
        this['hierarchies_id'] = hierarchiesId;
    }
    public get hierarchiesId(): number | undefined {
        return this['hierarchies_id'];
    }
    public withAttrId(attrId: number): HierarchiesAttrVO {
        this['attr_id'] = attrId;
        return this;
    }
    public set attrId(attrId: number  | undefined) {
        this['attr_id'] = attrId;
    }
    public get attrId(): number | undefined {
        return this['attr_id'];
    }
    public withLevel(level: number): HierarchiesAttrVO {
        this['level'] = level;
        return this;
    }
    public withAttrNameEn(attrNameEn: string): HierarchiesAttrVO {
        this['attr_name_en'] = attrNameEn;
        return this;
    }
    public set attrNameEn(attrNameEn: string  | undefined) {
        this['attr_name_en'] = attrNameEn;
    }
    public get attrNameEn(): string | undefined {
        return this['attr_name_en'];
    }
    public withAttrNameCh(attrNameCh: string): HierarchiesAttrVO {
        this['attr_name_ch'] = attrNameCh;
        return this;
    }
    public set attrNameCh(attrNameCh: string  | undefined) {
        this['attr_name_ch'] = attrNameCh;
    }
    public get attrNameCh(): string | undefined {
        return this['attr_name_ch'];
    }
    public withDetailAttrIds(detailAttrIds: Array<number>): HierarchiesAttrVO {
        this['detail_attr_ids'] = detailAttrIds;
        return this;
    }
    public set detailAttrIds(detailAttrIds: Array<number>  | undefined) {
        this['detail_attr_ids'] = detailAttrIds;
    }
    public get detailAttrIds(): Array<number> | undefined {
        return this['detail_attr_ids'];
    }
    public withDetailAttrNameEns(detailAttrNameEns: Array<string>): HierarchiesAttrVO {
        this['detail_attr_name_ens'] = detailAttrNameEns;
        return this;
    }
    public set detailAttrNameEns(detailAttrNameEns: Array<string>  | undefined) {
        this['detail_attr_name_ens'] = detailAttrNameEns;
    }
    public get detailAttrNameEns(): Array<string> | undefined {
        return this['detail_attr_name_ens'];
    }
    public withDetailAttrNameChs(detailAttrNameChs: Array<string>): HierarchiesAttrVO {
        this['detail_attr_name_chs'] = detailAttrNameChs;
        return this;
    }
    public set detailAttrNameChs(detailAttrNameChs: Array<string>  | undefined) {
        this['detail_attr_name_chs'] = detailAttrNameChs;
    }
    public get detailAttrNameChs(): Array<string> | undefined {
        return this['detail_attr_name_chs'];
    }
    public withAttr(attr: DimensionAttributeVO): HierarchiesAttrVO {
        this['attr'] = attr;
        return this;
    }
    public withDetailAttrs(detailAttrs: Array<DimensionAttributeVO>): HierarchiesAttrVO {
        this['detail_attrs'] = detailAttrs;
        return this;
    }
    public set detailAttrs(detailAttrs: Array<DimensionAttributeVO>  | undefined) {
        this['detail_attrs'] = detailAttrs;
    }
    public get detailAttrs(): Array<DimensionAttributeVO> | undefined {
        return this['detail_attrs'];
    }
}