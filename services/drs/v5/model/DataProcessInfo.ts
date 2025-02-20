import { AddColumnInfo } from './AddColumnInfo';
import { DataFilteringCondition } from './DataFilteringCondition';
import { DbObject } from './DbObject';
import { DbObjectColumnInfo } from './DbObjectColumnInfo';
import { DbOrTableRenameRule } from './DbOrTableRenameRule';


export class DataProcessInfo {
    private 'filter_conditions'?: Array<DataFilteringCondition>;
    private 'is_batch_process'?: boolean;
    private 'add_columns'?: Array<AddColumnInfo>;
    private 'ddl_operation'?: { [key: string]: string; };
    private 'dml_operation'?: string;
    private 'db_object_column_info'?: DbObjectColumnInfo;
    private 'db_or_table_rename_rule'?: DbOrTableRenameRule;
    private 'db_object'?: DbObject;
    private 'is_synchronized'?: boolean;
    public source?: DataProcessInfoSourceEnum | string;
    private 'process_rule_level'?: DataProcessInfoProcessRuleLevelEnum | string;
    public constructor() { 
    }
    public withFilterConditions(filterConditions: Array<DataFilteringCondition>): DataProcessInfo {
        this['filter_conditions'] = filterConditions;
        return this;
    }
    public set filterConditions(filterConditions: Array<DataFilteringCondition>  | undefined) {
        this['filter_conditions'] = filterConditions;
    }
    public get filterConditions(): Array<DataFilteringCondition> | undefined {
        return this['filter_conditions'];
    }
    public withIsBatchProcess(isBatchProcess: boolean): DataProcessInfo {
        this['is_batch_process'] = isBatchProcess;
        return this;
    }
    public set isBatchProcess(isBatchProcess: boolean  | undefined) {
        this['is_batch_process'] = isBatchProcess;
    }
    public get isBatchProcess(): boolean | undefined {
        return this['is_batch_process'];
    }
    public withAddColumns(addColumns: Array<AddColumnInfo>): DataProcessInfo {
        this['add_columns'] = addColumns;
        return this;
    }
    public set addColumns(addColumns: Array<AddColumnInfo>  | undefined) {
        this['add_columns'] = addColumns;
    }
    public get addColumns(): Array<AddColumnInfo> | undefined {
        return this['add_columns'];
    }
    public withDdlOperation(ddlOperation: { [key: string]: string; }): DataProcessInfo {
        this['ddl_operation'] = ddlOperation;
        return this;
    }
    public set ddlOperation(ddlOperation: { [key: string]: string; }  | undefined) {
        this['ddl_operation'] = ddlOperation;
    }
    public get ddlOperation(): { [key: string]: string; } | undefined {
        return this['ddl_operation'];
    }
    public withDmlOperation(dmlOperation: string): DataProcessInfo {
        this['dml_operation'] = dmlOperation;
        return this;
    }
    public set dmlOperation(dmlOperation: string  | undefined) {
        this['dml_operation'] = dmlOperation;
    }
    public get dmlOperation(): string | undefined {
        return this['dml_operation'];
    }
    public withDbObjectColumnInfo(dbObjectColumnInfo: DbObjectColumnInfo): DataProcessInfo {
        this['db_object_column_info'] = dbObjectColumnInfo;
        return this;
    }
    public set dbObjectColumnInfo(dbObjectColumnInfo: DbObjectColumnInfo  | undefined) {
        this['db_object_column_info'] = dbObjectColumnInfo;
    }
    public get dbObjectColumnInfo(): DbObjectColumnInfo | undefined {
        return this['db_object_column_info'];
    }
    public withDbOrTableRenameRule(dbOrTableRenameRule: DbOrTableRenameRule): DataProcessInfo {
        this['db_or_table_rename_rule'] = dbOrTableRenameRule;
        return this;
    }
    public set dbOrTableRenameRule(dbOrTableRenameRule: DbOrTableRenameRule  | undefined) {
        this['db_or_table_rename_rule'] = dbOrTableRenameRule;
    }
    public get dbOrTableRenameRule(): DbOrTableRenameRule | undefined {
        return this['db_or_table_rename_rule'];
    }
    public withDbObject(dbObject: DbObject): DataProcessInfo {
        this['db_object'] = dbObject;
        return this;
    }
    public set dbObject(dbObject: DbObject  | undefined) {
        this['db_object'] = dbObject;
    }
    public get dbObject(): DbObject | undefined {
        return this['db_object'];
    }
    public withIsSynchronized(isSynchronized: boolean): DataProcessInfo {
        this['is_synchronized'] = isSynchronized;
        return this;
    }
    public set isSynchronized(isSynchronized: boolean  | undefined) {
        this['is_synchronized'] = isSynchronized;
    }
    public get isSynchronized(): boolean | undefined {
        return this['is_synchronized'];
    }
    public withSource(source: DataProcessInfoSourceEnum | string): DataProcessInfo {
        this['source'] = source;
        return this;
    }
    public withProcessRuleLevel(processRuleLevel: DataProcessInfoProcessRuleLevelEnum | string): DataProcessInfo {
        this['process_rule_level'] = processRuleLevel;
        return this;
    }
    public set processRuleLevel(processRuleLevel: DataProcessInfoProcessRuleLevelEnum | string  | undefined) {
        this['process_rule_level'] = processRuleLevel;
    }
    public get processRuleLevel(): DataProcessInfoProcessRuleLevelEnum | string | undefined {
        return this['process_rule_level'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataProcessInfoSourceEnum {
    JOB = 'job',
    COMPARE = 'compare'
}
/**
    * @export
    * @enum {string}
    */
export enum DataProcessInfoProcessRuleLevelEnum {
    TABLE = 'table',
    COMBINATIONS = 'combinations'
}
