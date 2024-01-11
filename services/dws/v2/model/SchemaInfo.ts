

export class SchemaInfo {
    private 'schema_name'?: string;
    private 'database_name'?: string;
    private 'total_value'?: number;
    private 'perm_space'?: number;
    private 'skew_percent'?: number;
    private 'min_value'?: number;
    private 'max_value'?: number;
    private 'min_dn'?: string;
    private 'max_dn'?: string;
    private 'dn_num'?: number;
    public constructor(schemaName?: string, databaseName?: string, totalValue?: number, permSpace?: number, skewPercent?: number, minValue?: number, maxValue?: number, minDn?: string, maxDn?: string, dnNum?: number) { 
        this['schema_name'] = schemaName;
        this['database_name'] = databaseName;
        this['total_value'] = totalValue;
        this['perm_space'] = permSpace;
        this['skew_percent'] = skewPercent;
        this['min_value'] = minValue;
        this['max_value'] = maxValue;
        this['min_dn'] = minDn;
        this['max_dn'] = maxDn;
        this['dn_num'] = dnNum;
    }
    public withSchemaName(schemaName: string): SchemaInfo {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withDatabaseName(databaseName: string): SchemaInfo {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTotalValue(totalValue: number): SchemaInfo {
        this['total_value'] = totalValue;
        return this;
    }
    public set totalValue(totalValue: number  | undefined) {
        this['total_value'] = totalValue;
    }
    public get totalValue(): number | undefined {
        return this['total_value'];
    }
    public withPermSpace(permSpace: number): SchemaInfo {
        this['perm_space'] = permSpace;
        return this;
    }
    public set permSpace(permSpace: number  | undefined) {
        this['perm_space'] = permSpace;
    }
    public get permSpace(): number | undefined {
        return this['perm_space'];
    }
    public withSkewPercent(skewPercent: number): SchemaInfo {
        this['skew_percent'] = skewPercent;
        return this;
    }
    public set skewPercent(skewPercent: number  | undefined) {
        this['skew_percent'] = skewPercent;
    }
    public get skewPercent(): number | undefined {
        return this['skew_percent'];
    }
    public withMinValue(minValue: number): SchemaInfo {
        this['min_value'] = minValue;
        return this;
    }
    public set minValue(minValue: number  | undefined) {
        this['min_value'] = minValue;
    }
    public get minValue(): number | undefined {
        return this['min_value'];
    }
    public withMaxValue(maxValue: number): SchemaInfo {
        this['max_value'] = maxValue;
        return this;
    }
    public set maxValue(maxValue: number  | undefined) {
        this['max_value'] = maxValue;
    }
    public get maxValue(): number | undefined {
        return this['max_value'];
    }
    public withMinDn(minDn: string): SchemaInfo {
        this['min_dn'] = minDn;
        return this;
    }
    public set minDn(minDn: string  | undefined) {
        this['min_dn'] = minDn;
    }
    public get minDn(): string | undefined {
        return this['min_dn'];
    }
    public withMaxDn(maxDn: string): SchemaInfo {
        this['max_dn'] = maxDn;
        return this;
    }
    public set maxDn(maxDn: string  | undefined) {
        this['max_dn'] = maxDn;
    }
    public get maxDn(): string | undefined {
        return this['max_dn'];
    }
    public withDnNum(dnNum: number): SchemaInfo {
        this['dn_num'] = dnNum;
        return this;
    }
    public set dnNum(dnNum: number  | undefined) {
        this['dn_num'] = dnNum;
    }
    public get dnNum(): number | undefined {
        return this['dn_num'];
    }
}