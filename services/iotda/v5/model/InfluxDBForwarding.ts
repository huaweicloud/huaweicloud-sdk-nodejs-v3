import { ColumnMapping } from './ColumnMapping';
import { NetAddress } from './NetAddress';


export class InfluxDBForwarding {
    public address: NetAddress;
    private 'db_name': string | undefined;
    public username: string;
    public password: string;
    public measurement: string;
    private 'column_mappings': Array<ColumnMapping> | undefined;
    public constructor(address?: any, dbName?: any, username?: any, password?: any, measurement?: any, columnMappings?: any) { 
        this['address'] = address;
        this['db_name'] = dbName;
        this['username'] = username;
        this['password'] = password;
        this['measurement'] = measurement;
        this['column_mappings'] = columnMappings;
    }
    public withAddress(address: NetAddress): InfluxDBForwarding {
        this['address'] = address;
        return this;
    }
    public withDbName(dbName: string): InfluxDBForwarding {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName() {
        return this['db_name'];
    }
    public withUsername(username: string): InfluxDBForwarding {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): InfluxDBForwarding {
        this['password'] = password;
        return this;
    }
    public withMeasurement(measurement: string): InfluxDBForwarding {
        this['measurement'] = measurement;
        return this;
    }
    public withColumnMappings(columnMappings: Array<ColumnMapping>): InfluxDBForwarding {
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