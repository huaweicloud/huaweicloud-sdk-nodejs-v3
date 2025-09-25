

export class ListDictionariesRequest {
    public offset?: number;
    public limit?: number;
    public scene?: string;
    private 'group_code'?: string;
    public code?: string;
    public constructor(offset?: number, limit?: number, groupCode?: string) { 
        this['offset'] = offset;
        this['limit'] = limit;
        this['group_code'] = groupCode;
    }
    public withOffset(offset: number): ListDictionariesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDictionariesRequest {
        this['limit'] = limit;
        return this;
    }
    public withScene(scene: string): ListDictionariesRequest {
        this['scene'] = scene;
        return this;
    }
    public withGroupCode(groupCode: string): ListDictionariesRequest {
        this['group_code'] = groupCode;
        return this;
    }
    public set groupCode(groupCode: string  | undefined) {
        this['group_code'] = groupCode;
    }
    public get groupCode(): string | undefined {
        return this['group_code'];
    }
    public withCode(code: string): ListDictionariesRequest {
        this['code'] = code;
        return this;
    }
}