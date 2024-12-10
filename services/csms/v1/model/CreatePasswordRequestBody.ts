

export class CreatePasswordRequestBody {
    private 'password_policy_name'?: string;
    public length?: number;
    private 'exclude_characters'?: string;
    private 'exclude_lowercase'?: boolean;
    private 'exclude_uppercase'?: boolean;
    private 'exclude_numbers'?: boolean;
    private 'exclude_punctuation'?: boolean;
    private 'include_space'?: boolean;
    private 'require_each_included_type'?: boolean;
    public constructor() { 
    }
    public withPasswordPolicyName(passwordPolicyName: string): CreatePasswordRequestBody {
        this['password_policy_name'] = passwordPolicyName;
        return this;
    }
    public set passwordPolicyName(passwordPolicyName: string  | undefined) {
        this['password_policy_name'] = passwordPolicyName;
    }
    public get passwordPolicyName(): string | undefined {
        return this['password_policy_name'];
    }
    public withLength(length: number): CreatePasswordRequestBody {
        this['length'] = length;
        return this;
    }
    public withExcludeCharacters(excludeCharacters: string): CreatePasswordRequestBody {
        this['exclude_characters'] = excludeCharacters;
        return this;
    }
    public set excludeCharacters(excludeCharacters: string  | undefined) {
        this['exclude_characters'] = excludeCharacters;
    }
    public get excludeCharacters(): string | undefined {
        return this['exclude_characters'];
    }
    public withExcludeLowercase(excludeLowercase: boolean): CreatePasswordRequestBody {
        this['exclude_lowercase'] = excludeLowercase;
        return this;
    }
    public set excludeLowercase(excludeLowercase: boolean  | undefined) {
        this['exclude_lowercase'] = excludeLowercase;
    }
    public get excludeLowercase(): boolean | undefined {
        return this['exclude_lowercase'];
    }
    public withExcludeUppercase(excludeUppercase: boolean): CreatePasswordRequestBody {
        this['exclude_uppercase'] = excludeUppercase;
        return this;
    }
    public set excludeUppercase(excludeUppercase: boolean  | undefined) {
        this['exclude_uppercase'] = excludeUppercase;
    }
    public get excludeUppercase(): boolean | undefined {
        return this['exclude_uppercase'];
    }
    public withExcludeNumbers(excludeNumbers: boolean): CreatePasswordRequestBody {
        this['exclude_numbers'] = excludeNumbers;
        return this;
    }
    public set excludeNumbers(excludeNumbers: boolean  | undefined) {
        this['exclude_numbers'] = excludeNumbers;
    }
    public get excludeNumbers(): boolean | undefined {
        return this['exclude_numbers'];
    }
    public withExcludePunctuation(excludePunctuation: boolean): CreatePasswordRequestBody {
        this['exclude_punctuation'] = excludePunctuation;
        return this;
    }
    public set excludePunctuation(excludePunctuation: boolean  | undefined) {
        this['exclude_punctuation'] = excludePunctuation;
    }
    public get excludePunctuation(): boolean | undefined {
        return this['exclude_punctuation'];
    }
    public withIncludeSpace(includeSpace: boolean): CreatePasswordRequestBody {
        this['include_space'] = includeSpace;
        return this;
    }
    public set includeSpace(includeSpace: boolean  | undefined) {
        this['include_space'] = includeSpace;
    }
    public get includeSpace(): boolean | undefined {
        return this['include_space'];
    }
    public withRequireEachIncludedType(requireEachIncludedType: boolean): CreatePasswordRequestBody {
        this['require_each_included_type'] = requireEachIncludedType;
        return this;
    }
    public set requireEachIncludedType(requireEachIncludedType: boolean  | undefined) {
        this['require_each_included_type'] = requireEachIncludedType;
    }
    public get requireEachIncludedType(): boolean | undefined {
        return this['require_each_included_type'];
    }
}