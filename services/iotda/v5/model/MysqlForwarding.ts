import { ColumnMapping } from './ColumnMapping';
import { NetAddress } from './NetAddress';


export class MysqlForwarding {
    public address: NetAddress;
    private 'db_name': string | undefined;
    public username: string;
    public password: string;
    private 'table_name': string | undefined;
    private 'column_mappings': Array<ColumnMapping> | undefined;
    public constructor(address?: any, dbName?: any, username?: any, password?: any, tableName?: any, columnMappings?: any) { 
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
    public set dbName(dbName: string | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName() {
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
    public withTableName(tableName: string): MysqlForwarding {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName() {
        return this['table_name'];
    }
    public withColumnMappings(columnMappings: Array<ColumnMapping>): MysqlForwarding {
        this['column_mappings'] = columnMappings;
        return this;
    }
    public set columnMappings(columnMappings: Array<ColumnMapping> | undefined) {
        this['column_mappings'] = columnMappings;
    }
    public get columnMappings() {
        return this['column_mappings'];
    }
}