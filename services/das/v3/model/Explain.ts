

export class Explain {
    public id?: number;
    private 'select_type'?: string;
    public table?: string;
    public type?: string;
    private 'possible_keys'?: string;
    public key?: string;
    private 'key_len'?: string;
    public ref?: string;
    public rows?: number;
    public filtered?: number;
    public extra?: string;
    public constructor() { 
    }
    public withId(id: number): Explain {
        this['id'] = id;
        return this;
    }
    public withSelectType(selectType: string): Explain {
        this['select_type'] = selectType;
        return this;
    }
    public set selectType(selectType: string  | undefined) {
        this['select_type'] = selectType;
    }
    public get selectType(): string | undefined {
        return this['select_type'];
    }
    public withTable(table: string): Explain {
        this['table'] = table;
        return this;
    }
    public withType(type: string): Explain {
        this['type'] = type;
        return this;
    }
    public withPossibleKeys(possibleKeys: string): Explain {
        this['possible_keys'] = possibleKeys;
        return this;
    }
    public set possibleKeys(possibleKeys: string  | undefined) {
        this['possible_keys'] = possibleKeys;
    }
    public get possibleKeys(): string | undefined {
        return this['possible_keys'];
    }
    public withKey(key: string): Explain {
        this['key'] = key;
        return this;
    }
    public withKeyLen(keyLen: string): Explain {
        this['key_len'] = keyLen;
        return this;
    }
    public set keyLen(keyLen: string  | undefined) {
        this['key_len'] = keyLen;
    }
    public get keyLen(): string | undefined {
        return this['key_len'];
    }
    public withRef(ref: string): Explain {
        this['ref'] = ref;
        return this;
    }
    public withRows(rows: number): Explain {
        this['rows'] = rows;
        return this;
    }
    public withFiltered(filtered: number): Explain {
        this['filtered'] = filtered;
        return this;
    }
    public withExtra(extra: string): Explain {
        this['extra'] = extra;
        return this;
    }
}