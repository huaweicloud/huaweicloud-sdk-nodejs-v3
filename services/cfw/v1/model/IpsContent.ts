

export class IpsContent {
    public content?: string;
    public depth?: number;
    private 'is_hex'?: boolean;
    private 'is_ignore'?: boolean;
    private 'is_uri'?: boolean;
    public offset?: number;
    private 'relative_position'?: number;
    public constructor() { 
    }
    public withContent(content: string): IpsContent {
        this['content'] = content;
        return this;
    }
    public withDepth(depth: number): IpsContent {
        this['depth'] = depth;
        return this;
    }
    public withIsHex(isHex: boolean): IpsContent {
        this['is_hex'] = isHex;
        return this;
    }
    public set isHex(isHex: boolean  | undefined) {
        this['is_hex'] = isHex;
    }
    public get isHex(): boolean | undefined {
        return this['is_hex'];
    }
    public withIsIgnore(isIgnore: boolean): IpsContent {
        this['is_ignore'] = isIgnore;
        return this;
    }
    public set isIgnore(isIgnore: boolean  | undefined) {
        this['is_ignore'] = isIgnore;
    }
    public get isIgnore(): boolean | undefined {
        return this['is_ignore'];
    }
    public withIsUri(isUri: boolean): IpsContent {
        this['is_uri'] = isUri;
        return this;
    }
    public set isUri(isUri: boolean  | undefined) {
        this['is_uri'] = isUri;
    }
    public get isUri(): boolean | undefined {
        return this['is_uri'];
    }
    public withOffset(offset: number): IpsContent {
        this['offset'] = offset;
        return this;
    }
    public withRelativePosition(relativePosition: number): IpsContent {
        this['relative_position'] = relativePosition;
        return this;
    }
    public set relativePosition(relativePosition: number  | undefined) {
        this['relative_position'] = relativePosition;
    }
    public get relativePosition(): number | undefined {
        return this['relative_position'];
    }
}