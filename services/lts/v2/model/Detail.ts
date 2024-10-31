

export class Detail {
    private 'source_key'?: string;
    public regex?: string;
    public keys?: Array<string>;
    private 'multi_line_regex'?: string;
    private 'keep_source'?: boolean;
    private 'keep_source_if_parse_error'?: boolean;
    private 'split_sep'?: string;
    private 'split_type'?: string;
    public fields?: { [key: string]: string; };
    private 'drop_keys'?: Array<string>;
    private 'source_keys'?: Array<string>;
    private 'dest_keys'?: Array<string>;
    private 'expand_depth'?: number;
    private 'expand_connector'?: string;
    private 'source_format'?: string;
    private 'source_value'?: string;
    private 'set_time'?: boolean;
    public include?: { [key: string]: string; };
    public exclude?: { [key: string]: string; };
    public constructor() { 
    }
    public withSourceKey(sourceKey: string): Detail {
        this['source_key'] = sourceKey;
        return this;
    }
    public set sourceKey(sourceKey: string  | undefined) {
        this['source_key'] = sourceKey;
    }
    public get sourceKey(): string | undefined {
        return this['source_key'];
    }
    public withRegex(regex: string): Detail {
        this['regex'] = regex;
        return this;
    }
    public withKeys(keys: Array<string>): Detail {
        this['keys'] = keys;
        return this;
    }
    public withMultiLineRegex(multiLineRegex: string): Detail {
        this['multi_line_regex'] = multiLineRegex;
        return this;
    }
    public set multiLineRegex(multiLineRegex: string  | undefined) {
        this['multi_line_regex'] = multiLineRegex;
    }
    public get multiLineRegex(): string | undefined {
        return this['multi_line_regex'];
    }
    public withKeepSource(keepSource: boolean): Detail {
        this['keep_source'] = keepSource;
        return this;
    }
    public set keepSource(keepSource: boolean  | undefined) {
        this['keep_source'] = keepSource;
    }
    public get keepSource(): boolean | undefined {
        return this['keep_source'];
    }
    public withKeepSourceIfParseError(keepSourceIfParseError: boolean): Detail {
        this['keep_source_if_parse_error'] = keepSourceIfParseError;
        return this;
    }
    public set keepSourceIfParseError(keepSourceIfParseError: boolean  | undefined) {
        this['keep_source_if_parse_error'] = keepSourceIfParseError;
    }
    public get keepSourceIfParseError(): boolean | undefined {
        return this['keep_source_if_parse_error'];
    }
    public withSplitSep(splitSep: string): Detail {
        this['split_sep'] = splitSep;
        return this;
    }
    public set splitSep(splitSep: string  | undefined) {
        this['split_sep'] = splitSep;
    }
    public get splitSep(): string | undefined {
        return this['split_sep'];
    }
    public withSplitType(splitType: string): Detail {
        this['split_type'] = splitType;
        return this;
    }
    public set splitType(splitType: string  | undefined) {
        this['split_type'] = splitType;
    }
    public get splitType(): string | undefined {
        return this['split_type'];
    }
    public withFields(fields: { [key: string]: string; }): Detail {
        this['fields'] = fields;
        return this;
    }
    public withDropKeys(dropKeys: Array<string>): Detail {
        this['drop_keys'] = dropKeys;
        return this;
    }
    public set dropKeys(dropKeys: Array<string>  | undefined) {
        this['drop_keys'] = dropKeys;
    }
    public get dropKeys(): Array<string> | undefined {
        return this['drop_keys'];
    }
    public withSourceKeys(sourceKeys: Array<string>): Detail {
        this['source_keys'] = sourceKeys;
        return this;
    }
    public set sourceKeys(sourceKeys: Array<string>  | undefined) {
        this['source_keys'] = sourceKeys;
    }
    public get sourceKeys(): Array<string> | undefined {
        return this['source_keys'];
    }
    public withDestKeys(destKeys: Array<string>): Detail {
        this['dest_keys'] = destKeys;
        return this;
    }
    public set destKeys(destKeys: Array<string>  | undefined) {
        this['dest_keys'] = destKeys;
    }
    public get destKeys(): Array<string> | undefined {
        return this['dest_keys'];
    }
    public withExpandDepth(expandDepth: number): Detail {
        this['expand_depth'] = expandDepth;
        return this;
    }
    public set expandDepth(expandDepth: number  | undefined) {
        this['expand_depth'] = expandDepth;
    }
    public get expandDepth(): number | undefined {
        return this['expand_depth'];
    }
    public withExpandConnector(expandConnector: string): Detail {
        this['expand_connector'] = expandConnector;
        return this;
    }
    public set expandConnector(expandConnector: string  | undefined) {
        this['expand_connector'] = expandConnector;
    }
    public get expandConnector(): string | undefined {
        return this['expand_connector'];
    }
    public withSourceFormat(sourceFormat: string): Detail {
        this['source_format'] = sourceFormat;
        return this;
    }
    public set sourceFormat(sourceFormat: string  | undefined) {
        this['source_format'] = sourceFormat;
    }
    public get sourceFormat(): string | undefined {
        return this['source_format'];
    }
    public withSourceValue(sourceValue: string): Detail {
        this['source_value'] = sourceValue;
        return this;
    }
    public set sourceValue(sourceValue: string  | undefined) {
        this['source_value'] = sourceValue;
    }
    public get sourceValue(): string | undefined {
        return this['source_value'];
    }
    public withSetTime(setTime: boolean): Detail {
        this['set_time'] = setTime;
        return this;
    }
    public set setTime(setTime: boolean  | undefined) {
        this['set_time'] = setTime;
    }
    public get setTime(): boolean | undefined {
        return this['set_time'];
    }
    public withInclude(include: { [key: string]: string; }): Detail {
        this['include'] = include;
        return this;
    }
    public withExclude(exclude: { [key: string]: string; }): Detail {
        this['exclude'] = exclude;
        return this;
    }
}