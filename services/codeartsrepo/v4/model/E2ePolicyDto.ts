

export class E2ePolicyDto {
    private 'auto_extract'?: boolean;
    private 'prefix_symbol'?: string;
    public separator?: string;
    private 'suffix_symbol'?: string;
    public constructor() { 
    }
    public withAutoExtract(autoExtract: boolean): E2ePolicyDto {
        this['auto_extract'] = autoExtract;
        return this;
    }
    public set autoExtract(autoExtract: boolean  | undefined) {
        this['auto_extract'] = autoExtract;
    }
    public get autoExtract(): boolean | undefined {
        return this['auto_extract'];
    }
    public withPrefixSymbol(prefixSymbol: string): E2ePolicyDto {
        this['prefix_symbol'] = prefixSymbol;
        return this;
    }
    public set prefixSymbol(prefixSymbol: string  | undefined) {
        this['prefix_symbol'] = prefixSymbol;
    }
    public get prefixSymbol(): string | undefined {
        return this['prefix_symbol'];
    }
    public withSeparator(separator: string): E2ePolicyDto {
        this['separator'] = separator;
        return this;
    }
    public withSuffixSymbol(suffixSymbol: string): E2ePolicyDto {
        this['suffix_symbol'] = suffixSymbol;
        return this;
    }
    public set suffixSymbol(suffixSymbol: string  | undefined) {
        this['suffix_symbol'] = suffixSymbol;
    }
    public get suffixSymbol(): string | undefined {
        return this['suffix_symbol'];
    }
}