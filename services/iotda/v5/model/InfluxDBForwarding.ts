import { ColumnMapping } from './ColumnMapping';
import { NetAddress } from './NetAddress';


export class InfluxDBForwarding {
    public address?: NetAddress;
    private 'db_name'?: string;
    public username?: string;
    public password?: string;
    public measurement?: string;
    private 'column_mappings'?: Array<ColumnMapping>;
    public constructor(address?: NetAddress, dbName?: string, username?: string, password?: string, measurement?: string, columnMappings?: Array<ColumnMapping>) { 
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
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
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
    public set columnMappings(columnMappings: Array<ColumnMapping>  | undefined) {
        this['column_mappings'] = columnMappings;
    }
    public get columnMappings(): Array<ColumnMapping> | undefined {
        return this['column_mappings'];
    }
}