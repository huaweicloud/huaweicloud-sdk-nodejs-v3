

export class HstsQuery {
    public status?: string;
    private 'max_age'?: number;
    private 'include_subdomains'?: string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): HstsQuery {
        this['status'] = status;
        return this;
    }
    public withMaxAge(maxAge: number): HstsQuery {
        this['max_age'] = maxAge;
        return this;
    }
    public set maxAge(maxAge: number  | undefined) {
        this['max_age'] = maxAge;
    }
    public get maxAge(): number | undefined {
        return this['max_age'];
    }
    public withIncludeSubdomains(includeSubdomains: string): HstsQuery {
        this['include_subdomains'] = includeSubdomains;
        return this;
    }
    public set includeSubdomains(includeSubdomains: string  | undefined) {
        this['include_subdomains'] = includeSubdomains;
    }
    public get includeSubdomains(): string | undefined {
        return this['include_subdomains'];
    }
}