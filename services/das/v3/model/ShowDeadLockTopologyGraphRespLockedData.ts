

export class ShowDeadLockTopologyGraphRespLockedData {
    private 'field_index'?: number;
    public hex?: string;
    public decoded?: string;
    private 'column_name'?: string;
    public constructor(fieldIndex?: number, hex?: string, decoded?: string, columnName?: string) { 
        this['field_index'] = fieldIndex;
        this['hex'] = hex;
        this['decoded'] = decoded;
        this['column_name'] = columnName;
    }
    public withFieldIndex(fieldIndex: number): ShowDeadLockTopologyGraphRespLockedData {
        this['field_index'] = fieldIndex;
        return this;
    }
    public set fieldIndex(fieldIndex: number  | undefined) {
        this['field_index'] = fieldIndex;
    }
    public get fieldIndex(): number | undefined {
        return this['field_index'];
    }
    public withHex(hex: string): ShowDeadLockTopologyGraphRespLockedData {
        this['hex'] = hex;
        return this;
    }
    public withDecoded(decoded: string): ShowDeadLockTopologyGraphRespLockedData {
        this['decoded'] = decoded;
        return this;
    }
    public withColumnName(columnName: string): ShowDeadLockTopologyGraphRespLockedData {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
}