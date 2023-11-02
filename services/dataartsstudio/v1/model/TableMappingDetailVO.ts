

export class TableMappingDetailVO {
    public id?: number;
    private 'mapping_id'?: string;
    private 'target_attr_id'?: number;
    private 'target_attr_name'?: string;
    private 'src_table_ids'?: string;
    private 'src_table_names'?: Array<string>;
    private 'src_table_db_names'?: Array<string>;
    private 'src_table_model_ids'?: Array<number>;
    private 'src_table_id_list'?: Array<number>;
    private 'src_attr_ids'?: string;
    private 'src_attr_names'?: Array<string>;
    private 'src_attr_id_list'?: Array<number>;
    public remark?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'create_by'?: string;
    private 'update_by'?: string;
    private 'target_attr'?: object;
    public constructor(targetAttrName?: string) { 
        this['target_attr_name'] = targetAttrName;
    }
    public withId(id: number): TableMappingDetailVO {
        this['id'] = id;
        return this;
    }
    public withMappingId(mappingId: string): TableMappingDetailVO {
        this['mapping_id'] = mappingId;
        return this;
    }
    public set mappingId(mappingId: string  | undefined) {
        this['mapping_id'] = mappingId;
    }
    public get mappingId(): string | undefined {
        return this['mapping_id'];
    }
    public withTargetAttrId(targetAttrId: number): TableMappingDetailVO {
        this['target_attr_id'] = targetAttrId;
        return this;
    }
    public set targetAttrId(targetAttrId: number  | undefined) {
        this['target_attr_id'] = targetAttrId;
    }
    public get targetAttrId(): number | undefined {
        return this['target_attr_id'];
    }
    public withTargetAttrName(targetAttrName: string): TableMappingDetailVO {
        this['target_attr_name'] = targetAttrName;
        return this;
    }
    public set targetAttrName(targetAttrName: string  | undefined) {
        this['target_attr_name'] = targetAttrName;
    }
    public get targetAttrName(): string | undefined {
        return this['target_attr_name'];
    }
    public withSrcTableIds(srcTableIds: string): TableMappingDetailVO {
        this['src_table_ids'] = srcTableIds;
        return this;
    }
    public set srcTableIds(srcTableIds: string  | undefined) {
        this['src_table_ids'] = srcTableIds;
    }
    public get srcTableIds(): string | undefined {
        return this['src_table_ids'];
    }
    public withSrcTableNames(srcTableNames: Array<string>): TableMappingDetailVO {
        this['src_table_names'] = srcTableNames;
        return this;
    }
    public set srcTableNames(srcTableNames: Array<string>  | undefined) {
        this['src_table_names'] = srcTableNames;
    }
    public get srcTableNames(): Array<string> | undefined {
        return this['src_table_names'];
    }
    public withSrcTableDbNames(srcTableDbNames: Array<string>): TableMappingDetailVO {
        this['src_table_db_names'] = srcTableDbNames;
        return this;
    }
    public set srcTableDbNames(srcTableDbNames: Array<string>  | undefined) {
        this['src_table_db_names'] = srcTableDbNames;
    }
    public get srcTableDbNames(): Array<string> | undefined {
        return this['src_table_db_names'];
    }
    public withSrcTableModelIds(srcTableModelIds: Array<number>): TableMappingDetailVO {
        this['src_table_model_ids'] = srcTableModelIds;
        return this;
    }
    public set srcTableModelIds(srcTableModelIds: Array<number>  | undefined) {
        this['src_table_model_ids'] = srcTableModelIds;
    }
    public get srcTableModelIds(): Array<number> | undefined {
        return this['src_table_model_ids'];
    }
    public withSrcTableIdList(srcTableIdList: Array<number>): TableMappingDetailVO {
        this['src_table_id_list'] = srcTableIdList;
        return this;
    }
    public set srcTableIdList(srcTableIdList: Array<number>  | undefined) {
        this['src_table_id_list'] = srcTableIdList;
    }
    public get srcTableIdList(): Array<number> | undefined {
        return this['src_table_id_list'];
    }
    public withSrcAttrIds(srcAttrIds: string): TableMappingDetailVO {
        this['src_attr_ids'] = srcAttrIds;
        return this;
    }
    public set srcAttrIds(srcAttrIds: string  | undefined) {
        this['src_attr_ids'] = srcAttrIds;
    }
    public get srcAttrIds(): string | undefined {
        return this['src_attr_ids'];
    }
    public withSrcAttrNames(srcAttrNames: Array<string>): TableMappingDetailVO {
        this['src_attr_names'] = srcAttrNames;
        return this;
    }
    public set srcAttrNames(srcAttrNames: Array<string>  | undefined) {
        this['src_attr_names'] = srcAttrNames;
    }
    public get srcAttrNames(): Array<string> | undefined {
        return this['src_attr_names'];
    }
    public withSrcAttrIdList(srcAttrIdList: Array<number>): TableMappingDetailVO {
        this['src_attr_id_list'] = srcAttrIdList;
        return this;
    }
    public set srcAttrIdList(srcAttrIdList: Array<number>  | undefined) {
        this['src_attr_id_list'] = srcAttrIdList;
    }
    public get srcAttrIdList(): Array<number> | undefined {
        return this['src_attr_id_list'];
    }
    public withRemark(remark: string): TableMappingDetailVO {
        this['remark'] = remark;
        return this;
    }
    public withCreateTime(createTime: Date): TableMappingDetailVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): TableMappingDetailVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withCreateBy(createBy: string): TableMappingDetailVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): TableMappingDetailVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withTargetAttr(targetAttr: object): TableMappingDetailVO {
        this['target_attr'] = targetAttr;
        return this;
    }
    public set targetAttr(targetAttr: object  | undefined) {
        this['target_attr'] = targetAttr;
    }
    public get targetAttr(): object | undefined {
        return this['target_attr'];
    }
}