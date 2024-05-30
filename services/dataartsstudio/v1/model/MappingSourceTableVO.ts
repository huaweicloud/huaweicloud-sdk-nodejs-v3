import { MappingJoinFieldVO } from './MappingJoinFieldVO';


export class MappingSourceTableVO {
    private 'table1_id'?: string;
    private 'table2_id'?: string;
    private 'table1_name'?: string;
    private 'table2_name'?: string;
    private 'join_type'?: MappingSourceTableVOJoinTypeEnum | string;
    private 'join_fields'?: Array<MappingJoinFieldVO>;
    public constructor(table1Id?: string, table1Name?: string, joinType?: string, joinFields?: Array<MappingJoinFieldVO>) { 
        this['table1_id'] = table1Id;
        this['table1_name'] = table1Name;
        this['join_type'] = joinType;
        this['join_fields'] = joinFields;
    }
    public withTable1Id(table1Id: string): MappingSourceTableVO {
        this['table1_id'] = table1Id;
        return this;
    }
    public set table1Id(table1Id: string  | undefined) {
        this['table1_id'] = table1Id;
    }
    public get table1Id(): string | undefined {
        return this['table1_id'];
    }
    public withTable2Id(table2Id: string): MappingSourceTableVO {
        this['table2_id'] = table2Id;
        return this;
    }
    public set table2Id(table2Id: string  | undefined) {
        this['table2_id'] = table2Id;
    }
    public get table2Id(): string | undefined {
        return this['table2_id'];
    }
    public withTable1Name(table1Name: string): MappingSourceTableVO {
        this['table1_name'] = table1Name;
        return this;
    }
    public set table1Name(table1Name: string  | undefined) {
        this['table1_name'] = table1Name;
    }
    public get table1Name(): string | undefined {
        return this['table1_name'];
    }
    public withTable2Name(table2Name: string): MappingSourceTableVO {
        this['table2_name'] = table2Name;
        return this;
    }
    public set table2Name(table2Name: string  | undefined) {
        this['table2_name'] = table2Name;
    }
    public get table2Name(): string | undefined {
        return this['table2_name'];
    }
    public withJoinType(joinType: MappingSourceTableVOJoinTypeEnum | string): MappingSourceTableVO {
        this['join_type'] = joinType;
        return this;
    }
    public set joinType(joinType: MappingSourceTableVOJoinTypeEnum | string  | undefined) {
        this['join_type'] = joinType;
    }
    public get joinType(): MappingSourceTableVOJoinTypeEnum | string | undefined {
        return this['join_type'];
    }
    public withJoinFields(joinFields: Array<MappingJoinFieldVO>): MappingSourceTableVO {
        this['join_fields'] = joinFields;
        return this;
    }
    public set joinFields(joinFields: Array<MappingJoinFieldVO>  | undefined) {
        this['join_fields'] = joinFields;
    }
    public get joinFields(): Array<MappingJoinFieldVO> | undefined {
        return this['join_fields'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MappingSourceTableVOJoinTypeEnum {
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    INNER = 'INNER',
    FULL = 'FULL'
}
