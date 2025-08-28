

export class ExecutionPlan {
    public id?: string;
    private 'select_type'?: string;
    public table?: string;
    public partitions?: string;
    public type?: string;
    private 'possible_keys'?: string;
    public key?: string;
    private 'key_len'?: string;
    public ref?: string;
    public rows?: string;
    public filtered?: string;
    public extra?: string;
    public constructor(id?: string, selectType?: string, table?: string, partitions?: string, type?: string, possibleKeys?: string, key?: string, keyLen?: string, ref?: string, rows?: string, filtered?: string, extra?: string) { 
        this['id'] = id;
        this['select_type'] = selectType;
        this['table'] = table;
        this['partitions'] = partitions;
        this['type'] = type;
        this['possible_keys'] = possibleKeys;
        this['key'] = key;
        this['key_len'] = keyLen;
        this['ref'] = ref;
        this['rows'] = rows;
        this['filtered'] = filtered;
        this['extra'] = extra;
    }
    public withId(id: string): ExecutionPlan {
        this['id'] = id;
        return this;
    }
    public withSelectType(selectType: string): ExecutionPlan {
        this['select_type'] = selectType;
        return this;
    }
    public set selectType(selectType: string  | undefined) {
        this['select_type'] = selectType;
    }
    public get selectType(): string | undefined {
        return this['select_type'];
    }
    public withTable(table: string): ExecutionPlan {
        this['table'] = table;
        return this;
    }
    public withPartitions(partitions: string): ExecutionPlan {
        this['partitions'] = partitions;
        return this;
    }
    public withType(type: string): ExecutionPlan {
        this['type'] = type;
        return this;
    }
    public withPossibleKeys(possibleKeys: string): ExecutionPlan {
        this['possible_keys'] = possibleKeys;
        return this;
    }
    public set possibleKeys(possibleKeys: string  | undefined) {
        this['possible_keys'] = possibleKeys;
    }
    public get possibleKeys(): string | undefined {
        return this['possible_keys'];
    }
    public withKey(key: string): ExecutionPlan {
        this['key'] = key;
        return this;
    }
    public withKeyLen(keyLen: string): ExecutionPlan {
        this['key_len'] = keyLen;
        return this;
    }
    public set keyLen(keyLen: string  | undefined) {
        this['key_len'] = keyLen;
    }
    public get keyLen(): string | undefined {
        return this['key_len'];
    }
    public withRef(ref: string): ExecutionPlan {
        this['ref'] = ref;
        return this;
    }
    public withRows(rows: string): ExecutionPlan {
        this['rows'] = rows;
        return this;
    }
    public withFiltered(filtered: string): ExecutionPlan {
        this['filtered'] = filtered;
        return this;
    }
    public withExtra(extra: string): ExecutionPlan {
        this['extra'] = extra;
        return this;
    }
}