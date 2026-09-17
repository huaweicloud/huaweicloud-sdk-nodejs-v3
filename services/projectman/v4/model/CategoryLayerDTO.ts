import { BaseCategory } from './BaseCategory';


export class CategoryLayerDTO {
    public category?: BaseCategory;
    private 'link_parent_field'?: string;
    public id?: string;
    public children?: Array<CategoryLayerDTO>;
    public code?: string;
    private 'category_code'?: string;
    private 'category_id'?: string;
    private 'layer_type'?: string;
    private 'parent_id'?: string;
    private 'root_id'?: string;
    private 'position_x'?: number;
    private 'position_y'?: number;
    public constructor() { 
    }
    public withCategory(category: BaseCategory): CategoryLayerDTO {
        this['category'] = category;
        return this;
    }
    public withLinkParentField(linkParentField: string): CategoryLayerDTO {
        this['link_parent_field'] = linkParentField;
        return this;
    }
    public set linkParentField(linkParentField: string  | undefined) {
        this['link_parent_field'] = linkParentField;
    }
    public get linkParentField(): string | undefined {
        return this['link_parent_field'];
    }
    public withId(id: string): CategoryLayerDTO {
        this['id'] = id;
        return this;
    }
    public withChildren(children: Array<CategoryLayerDTO>): CategoryLayerDTO {
        this['children'] = children;
        return this;
    }
    public withCode(code: string): CategoryLayerDTO {
        this['code'] = code;
        return this;
    }
    public withCategoryCode(categoryCode: string): CategoryLayerDTO {
        this['category_code'] = categoryCode;
        return this;
    }
    public set categoryCode(categoryCode: string  | undefined) {
        this['category_code'] = categoryCode;
    }
    public get categoryCode(): string | undefined {
        return this['category_code'];
    }
    public withCategoryId(categoryId: string): CategoryLayerDTO {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: string  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): string | undefined {
        return this['category_id'];
    }
    public withLayerType(layerType: string): CategoryLayerDTO {
        this['layer_type'] = layerType;
        return this;
    }
    public set layerType(layerType: string  | undefined) {
        this['layer_type'] = layerType;
    }
    public get layerType(): string | undefined {
        return this['layer_type'];
    }
    public withParentId(parentId: string): CategoryLayerDTO {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withRootId(rootId: string): CategoryLayerDTO {
        this['root_id'] = rootId;
        return this;
    }
    public set rootId(rootId: string  | undefined) {
        this['root_id'] = rootId;
    }
    public get rootId(): string | undefined {
        return this['root_id'];
    }
    public withPositionX(positionX: number): CategoryLayerDTO {
        this['position_x'] = positionX;
        return this;
    }
    public set positionX(positionX: number  | undefined) {
        this['position_x'] = positionX;
    }
    public get positionX(): number | undefined {
        return this['position_x'];
    }
    public withPositionY(positionY: number): CategoryLayerDTO {
        this['position_y'] = positionY;
        return this;
    }
    public set positionY(positionY: number  | undefined) {
        this['position_y'] = positionY;
    }
    public get positionY(): number | undefined {
        return this['position_y'];
    }
}