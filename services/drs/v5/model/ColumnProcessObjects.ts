import { AddColumnInfo } from './AddColumnInfo';


export class ColumnProcessObjects {
    private 'object_source_names'?: Array<string>;
    private 'object_alias_name'?: string;
    private 'is_sent'?: boolean;
    private 'extra_column_infos'?: Array<AddColumnInfo>;
    public constructor() { 
    }
    public withObjectSourceNames(objectSourceNames: Array<string>): ColumnProcessObjects {
        this['object_source_names'] = objectSourceNames;
        return this;
    }
    public set objectSourceNames(objectSourceNames: Array<string>  | undefined) {
        this['object_source_names'] = objectSourceNames;
    }
    public get objectSourceNames(): Array<string> | undefined {
        return this['object_source_names'];
    }
    public withObjectAliasName(objectAliasName: string): ColumnProcessObjects {
        this['object_alias_name'] = objectAliasName;
        return this;
    }
    public set objectAliasName(objectAliasName: string  | undefined) {
        this['object_alias_name'] = objectAliasName;
    }
    public get objectAliasName(): string | undefined {
        return this['object_alias_name'];
    }
    public withIsSent(isSent: boolean): ColumnProcessObjects {
        this['is_sent'] = isSent;
        return this;
    }
    public set isSent(isSent: boolean  | undefined) {
        this['is_sent'] = isSent;
    }
    public get isSent(): boolean | undefined {
        return this['is_sent'];
    }
    public withExtraColumnInfos(extraColumnInfos: Array<AddColumnInfo>): ColumnProcessObjects {
        this['extra_column_infos'] = extraColumnInfos;
        return this;
    }
    public set extraColumnInfos(extraColumnInfos: Array<AddColumnInfo>  | undefined) {
        this['extra_column_infos'] = extraColumnInfos;
    }
    public get extraColumnInfos(): Array<AddColumnInfo> | undefined {
        return this['extra_column_infos'];
    }
}