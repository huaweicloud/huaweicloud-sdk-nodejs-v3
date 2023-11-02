import { MappingSourceFieldVO } from './MappingSourceFieldVO';
import { MappingSourceTableVO } from './MappingSourceTableVO';
import { TableMappingDetailVO } from './TableMappingDetailVO';


export class TableMappingVO {
    public id?: number;
    public name?: string;
    public description?: string;
    private 'target_table_id'?: number;
    private 'src_model_id'?: number;
    private 'src_model_name'?: string;
    private 'view_text'?: string;
    private 'target_table_name'?: string;
    public details?: Array<TableMappingDetailVO>;
    private 'source_tables'?: Array<MappingSourceTableVO>;
    private 'source_fields'?: Array<MappingSourceFieldVO>;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'create_by'?: string;
    private 'update_by'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withId(id: number): TableMappingVO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TableMappingVO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): TableMappingVO {
        this['description'] = description;
        return this;
    }
    public withTargetTableId(targetTableId: number): TableMappingVO {
        this['target_table_id'] = targetTableId;
        return this;
    }
    public set targetTableId(targetTableId: number  | undefined) {
        this['target_table_id'] = targetTableId;
    }
    public get targetTableId(): number | undefined {
        return this['target_table_id'];
    }
    public withSrcModelId(srcModelId: number): TableMappingVO {
        this['src_model_id'] = srcModelId;
        return this;
    }
    public set srcModelId(srcModelId: number  | undefined) {
        this['src_model_id'] = srcModelId;
    }
    public get srcModelId(): number | undefined {
        return this['src_model_id'];
    }
    public withSrcModelName(srcModelName: string): TableMappingVO {
        this['src_model_name'] = srcModelName;
        return this;
    }
    public set srcModelName(srcModelName: string  | undefined) {
        this['src_model_name'] = srcModelName;
    }
    public get srcModelName(): string | undefined {
        return this['src_model_name'];
    }
    public withViewText(viewText: string): TableMappingVO {
        this['view_text'] = viewText;
        return this;
    }
    public set viewText(viewText: string  | undefined) {
        this['view_text'] = viewText;
    }
    public get viewText(): string | undefined {
        return this['view_text'];
    }
    public withTargetTableName(targetTableName: string): TableMappingVO {
        this['target_table_name'] = targetTableName;
        return this;
    }
    public set targetTableName(targetTableName: string  | undefined) {
        this['target_table_name'] = targetTableName;
    }
    public get targetTableName(): string | undefined {
        return this['target_table_name'];
    }
    public withDetails(details: Array<TableMappingDetailVO>): TableMappingVO {
        this['details'] = details;
        return this;
    }
    public withSourceTables(sourceTables: Array<MappingSourceTableVO>): TableMappingVO {
        this['source_tables'] = sourceTables;
        return this;
    }
    public set sourceTables(sourceTables: Array<MappingSourceTableVO>  | undefined) {
        this['source_tables'] = sourceTables;
    }
    public get sourceTables(): Array<MappingSourceTableVO> | undefined {
        return this['source_tables'];
    }
    public withSourceFields(sourceFields: Array<MappingSourceFieldVO>): TableMappingVO {
        this['source_fields'] = sourceFields;
        return this;
    }
    public set sourceFields(sourceFields: Array<MappingSourceFieldVO>  | undefined) {
        this['source_fields'] = sourceFields;
    }
    public get sourceFields(): Array<MappingSourceFieldVO> | undefined {
        return this['source_fields'];
    }
    public withCreateTime(createTime: Date): TableMappingVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): TableMappingVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withCreateBy(createBy: string): TableMappingVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): TableMappingVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
}