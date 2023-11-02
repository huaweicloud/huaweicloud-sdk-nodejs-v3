import { RelationMappingVO } from './RelationMappingVO';
import { RelationType } from './RelationType';


export class RelationVO {
    public id?: number;
    private 'source_table_id'?: number;
    private 'target_table_id'?: number;
    public name?: string;
    private 'source_table_name'?: string;
    private 'target_table_name'?: string;
    public role?: string;
    private 'tenant_id'?: string;
    private 'source_type'?: RelationType;
    private 'target_type'?: RelationType;
    private 'create_by'?: string;
    private 'update_by'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public mappings?: Array<RelationMappingVO>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withId(id: number): RelationVO {
        this['id'] = id;
        return this;
    }
    public withSourceTableId(sourceTableId: number): RelationVO {
        this['source_table_id'] = sourceTableId;
        return this;
    }
    public set sourceTableId(sourceTableId: number  | undefined) {
        this['source_table_id'] = sourceTableId;
    }
    public get sourceTableId(): number | undefined {
        return this['source_table_id'];
    }
    public withTargetTableId(targetTableId: number): RelationVO {
        this['target_table_id'] = targetTableId;
        return this;
    }
    public set targetTableId(targetTableId: number  | undefined) {
        this['target_table_id'] = targetTableId;
    }
    public get targetTableId(): number | undefined {
        return this['target_table_id'];
    }
    public withName(name: string): RelationVO {
        this['name'] = name;
        return this;
    }
    public withSourceTableName(sourceTableName: string): RelationVO {
        this['source_table_name'] = sourceTableName;
        return this;
    }
    public set sourceTableName(sourceTableName: string  | undefined) {
        this['source_table_name'] = sourceTableName;
    }
    public get sourceTableName(): string | undefined {
        return this['source_table_name'];
    }
    public withTargetTableName(targetTableName: string): RelationVO {
        this['target_table_name'] = targetTableName;
        return this;
    }
    public set targetTableName(targetTableName: string  | undefined) {
        this['target_table_name'] = targetTableName;
    }
    public get targetTableName(): string | undefined {
        return this['target_table_name'];
    }
    public withRole(role: string): RelationVO {
        this['role'] = role;
        return this;
    }
    public withTenantId(tenantId: string): RelationVO {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withSourceType(sourceType: RelationType): RelationVO {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: RelationType  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): RelationType | undefined {
        return this['source_type'];
    }
    public withTargetType(targetType: RelationType): RelationVO {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: RelationType  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): RelationType | undefined {
        return this['target_type'];
    }
    public withCreateBy(createBy: string): RelationVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): RelationVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withCreateTime(createTime: Date): RelationVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): RelationVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withMappings(mappings: Array<RelationMappingVO>): RelationVO {
        this['mappings'] = mappings;
        return this;
    }
}