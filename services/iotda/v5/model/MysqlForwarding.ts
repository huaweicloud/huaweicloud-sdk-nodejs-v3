import { ColumnMapping } from './ColumnMapping';
import { NetAddress } from './NetAddress';


export class MysqlForwarding {
    public address?: NetAddress;
    private 'db_name'?: string;
    public username?: string;
    public password?: string;
    private 'enable_ssl'?: boolean;
    private 'table_name'?: string;
    private 'column_mappings'?: Array<ColumnMapping>;
    public constructor(address?: NetAddress, dbName?: string, username?: string, password?: string, tableName?: string, columnMappings?: Array<ColumnMapping>) { 
        this['address'] = address;
        this['db_name'] = dbName;
        this['username'] = username;
        this['password'] = password;
        this['table_name'] = tableName;
        this['column_mappings'] = columnMappings;
    }
    public withAddress(address: NetAddress): MysqlForwarding {
        this['address'] = address;
        return this;
    }
    public withDbName(dbName: string): MysqlForwarding {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withUsername(username: string): MysqlForwarding {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): MysqlForwarding {
        this['password'] = password;
        return this;
    }
    public withEnableSsl(enableSsl: boolean): MysqlForwarding {
        this['enable_ssl'] = enableSsl;
        return this;
    }
    public set enableSsl(enableSsl: boolean  | undefined) {
        this['enable_ssl'] = enableSsl;
    }
    public get enableSsl(): boolean | undefined {
        return this['enable_ssl'];
    }
    public withTableName(tableName: string): MysqlForwarding {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withColumnMappings(columnMappings: Array<ColumnMapping>): MysqlForwarding {
        this['column_mappings'] = columnMappings;
        return this;
    }
    public set columnMappings(columnMappings: Array<ColumnMapping>  | undefined) {
        this['column_mappings'] = columnMappings;
    }
    public get columnMappings(): Array<ColumnMapping> | undefined {
        return this['column_mappings'];
    }
}