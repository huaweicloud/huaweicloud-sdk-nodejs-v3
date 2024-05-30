import { BizStatusEnum } from './BizStatusEnum';
import { BizVersionManageVO } from './BizVersionManageVO';
import { SelfDefinedFieldVO } from './SelfDefinedFieldVO';


export class CatalogVO {
    private 'name_ch'?: string;
    private 'name_en'?: string;
    public description?: string;
    private 'qualified_name'?: string;
    public guid?: string;
    public code?: string;
    public alias?: string;
    public status?: BizStatusEnum;
    private 'new_biz'?: BizVersionManageVO;
    private 'data_owner'?: string;
    private 'data_owner_list'?: string;
    private 'data_department'?: string;
    public path?: string;
    public level?: number;
    public ordinal?: number;
    public owner?: string;
    private 'parent_id'?: string;
    private 'swap_order_id'?: string;
    public id?: string;
    private 'qualified_id'?: string;
    private 'from_public'?: boolean;
    private 'create_by'?: string;
    private 'update_by'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'children_num'?: number;
    public children?: Array<CatalogVO>;
    private 'self_defined_fields'?: Array<SelfDefinedFieldVO>;
    public constructor() { 
    }
    public withNameCh(nameCh: string): CatalogVO {
        this['name_ch'] = nameCh;
        return this;
    }
    public set nameCh(nameCh: string  | undefined) {
        this['name_ch'] = nameCh;
    }
    public get nameCh(): string | undefined {
        return this['name_ch'];
    }
    public withNameEn(nameEn: string): CatalogVO {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withDescription(description: string): CatalogVO {
        this['description'] = description;
        return this;
    }
    public withQualifiedName(qualifiedName: string): CatalogVO {
        this['qualified_name'] = qualifiedName;
        return this;
    }
    public set qualifiedName(qualifiedName: string  | undefined) {
        this['qualified_name'] = qualifiedName;
    }
    public get qualifiedName(): string | undefined {
        return this['qualified_name'];
    }
    public withGuid(guid: string): CatalogVO {
        this['guid'] = guid;
        return this;
    }
    public withCode(code: string): CatalogVO {
        this['code'] = code;
        return this;
    }
    public withAlias(alias: string): CatalogVO {
        this['alias'] = alias;
        return this;
    }
    public withStatus(status: BizStatusEnum): CatalogVO {
        this['status'] = status;
        return this;
    }
    public withNewBiz(newBiz: BizVersionManageVO): CatalogVO {
        this['new_biz'] = newBiz;
        return this;
    }
    public set newBiz(newBiz: BizVersionManageVO  | undefined) {
        this['new_biz'] = newBiz;
    }
    public get newBiz(): BizVersionManageVO | undefined {
        return this['new_biz'];
    }
    public withDataOwner(dataOwner: string): CatalogVO {
        this['data_owner'] = dataOwner;
        return this;
    }
    public set dataOwner(dataOwner: string  | undefined) {
        this['data_owner'] = dataOwner;
    }
    public get dataOwner(): string | undefined {
        return this['data_owner'];
    }
    public withDataOwnerList(dataOwnerList: string): CatalogVO {
        this['data_owner_list'] = dataOwnerList;
        return this;
    }
    public set dataOwnerList(dataOwnerList: string  | undefined) {
        this['data_owner_list'] = dataOwnerList;
    }
    public get dataOwnerList(): string | undefined {
        return this['data_owner_list'];
    }
    public withDataDepartment(dataDepartment: string): CatalogVO {
        this['data_department'] = dataDepartment;
        return this;
    }
    public set dataDepartment(dataDepartment: string  | undefined) {
        this['data_department'] = dataDepartment;
    }
    public get dataDepartment(): string | undefined {
        return this['data_department'];
    }
    public withPath(path: string): CatalogVO {
        this['path'] = path;
        return this;
    }
    public withLevel(level: number): CatalogVO {
        this['level'] = level;
        return this;
    }
    public withOrdinal(ordinal: number): CatalogVO {
        this['ordinal'] = ordinal;
        return this;
    }
    public withOwner(owner: string): CatalogVO {
        this['owner'] = owner;
        return this;
    }
    public withParentId(parentId: string): CatalogVO {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withSwapOrderId(swapOrderId: string): CatalogVO {
        this['swap_order_id'] = swapOrderId;
        return this;
    }
    public set swapOrderId(swapOrderId: string  | undefined) {
        this['swap_order_id'] = swapOrderId;
    }
    public get swapOrderId(): string | undefined {
        return this['swap_order_id'];
    }
    public withId(id: string): CatalogVO {
        this['id'] = id;
        return this;
    }
    public withQualifiedId(qualifiedId: string): CatalogVO {
        this['qualified_id'] = qualifiedId;
        return this;
    }
    public set qualifiedId(qualifiedId: string  | undefined) {
        this['qualified_id'] = qualifiedId;
    }
    public get qualifiedId(): string | undefined {
        return this['qualified_id'];
    }
    public withFromPublic(fromPublic: boolean): CatalogVO {
        this['from_public'] = fromPublic;
        return this;
    }
    public set fromPublic(fromPublic: boolean  | undefined) {
        this['from_public'] = fromPublic;
    }
    public get fromPublic(): boolean | undefined {
        return this['from_public'];
    }
    public withCreateBy(createBy: string): CatalogVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): CatalogVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withCreateTime(createTime: Date): CatalogVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): CatalogVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withChildrenNum(childrenNum: number): CatalogVO {
        this['children_num'] = childrenNum;
        return this;
    }
    public set childrenNum(childrenNum: number  | undefined) {
        this['children_num'] = childrenNum;
    }
    public get childrenNum(): number | undefined {
        return this['children_num'];
    }
    public withChildren(children: Array<CatalogVO>): CatalogVO {
        this['children'] = children;
        return this;
    }
    public withSelfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>): CatalogVO {
        this['self_defined_fields'] = selfDefinedFields;
        return this;
    }
    public set selfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>  | undefined) {
        this['self_defined_fields'] = selfDefinedFields;
    }
    public get selfDefinedFields(): Array<SelfDefinedFieldVO> | undefined {
        return this['self_defined_fields'];
    }
}