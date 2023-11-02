

export class CodeTableFieldValueVO {
    public id?: number;
    private 'fd_id'?: number;
    private 'fd_value'?: string;
    public ordinal?: number;
    public description?: string;
    public constructor() { 
    }
    public withId(id: number): CodeTableFieldValueVO {
        this['id'] = id;
        return this;
    }
    public withFdId(fdId: number): CodeTableFieldValueVO {
        this['fd_id'] = fdId;
        return this;
    }
    public set fdId(fdId: number  | undefined) {
        this['fd_id'] = fdId;
    }
    public get fdId(): number | undefined {
        return this['fd_id'];
    }
    public withFdValue(fdValue: string): CodeTableFieldValueVO {
        this['fd_value'] = fdValue;
        return this;
    }
    public set fdValue(fdValue: string  | undefined) {
        this['fd_value'] = fdValue;
    }
    public get fdValue(): string | undefined {
        return this['fd_value'];
    }
    public withOrdinal(ordinal: number): CodeTableFieldValueVO {
        this['ordinal'] = ordinal;
        return this;
    }
    public withDescription(description: string): CodeTableFieldValueVO {
        this['description'] = description;
        return this;
    }
}