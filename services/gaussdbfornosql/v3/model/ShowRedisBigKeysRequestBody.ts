

export class ShowRedisBigKeysRequestBody {
    public offset?: number;
    public limit?: number;
    private 'key_types'?: Array<string>;
    public constructor() { 
    }
    public withOffset(offset: number): ShowRedisBigKeysRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowRedisBigKeysRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withKeyTypes(keyTypes: Array<string>): ShowRedisBigKeysRequestBody {
        this['key_types'] = keyTypes;
        return this;
    }
    public set keyTypes(keyTypes: Array<string>  | undefined) {
        this['key_types'] = keyTypes;
    }
    public get keyTypes(): Array<string> | undefined {
        return this['key_types'];
    }
}