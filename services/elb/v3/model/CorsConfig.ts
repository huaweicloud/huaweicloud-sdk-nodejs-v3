

export class CorsConfig {
    private 'allow_origin'?: Array<string>;
    private 'allow_methods'?: Array<string>;
    private 'allow_headers'?: Array<string>;
    private 'expose_headers'?: Array<string>;
    private 'allow_credentials'?: boolean;
    private 'max_age'?: number;
    public constructor() { 
    }
    public withAllowOrigin(allowOrigin: Array<string>): CorsConfig {
        this['allow_origin'] = allowOrigin;
        return this;
    }
    public set allowOrigin(allowOrigin: Array<string>  | undefined) {
        this['allow_origin'] = allowOrigin;
    }
    public get allowOrigin(): Array<string> | undefined {
        return this['allow_origin'];
    }
    public withAllowMethods(allowMethods: Array<string>): CorsConfig {
        this['allow_methods'] = allowMethods;
        return this;
    }
    public set allowMethods(allowMethods: Array<string>  | undefined) {
        this['allow_methods'] = allowMethods;
    }
    public get allowMethods(): Array<string> | undefined {
        return this['allow_methods'];
    }
    public withAllowHeaders(allowHeaders: Array<string>): CorsConfig {
        this['allow_headers'] = allowHeaders;
        return this;
    }
    public set allowHeaders(allowHeaders: Array<string>  | undefined) {
        this['allow_headers'] = allowHeaders;
    }
    public get allowHeaders(): Array<string> | undefined {
        return this['allow_headers'];
    }
    public withExposeHeaders(exposeHeaders: Array<string>): CorsConfig {
        this['expose_headers'] = exposeHeaders;
        return this;
    }
    public set exposeHeaders(exposeHeaders: Array<string>  | undefined) {
        this['expose_headers'] = exposeHeaders;
    }
    public get exposeHeaders(): Array<string> | undefined {
        return this['expose_headers'];
    }
    public withAllowCredentials(allowCredentials: boolean): CorsConfig {
        this['allow_credentials'] = allowCredentials;
        return this;
    }
    public set allowCredentials(allowCredentials: boolean  | undefined) {
        this['allow_credentials'] = allowCredentials;
    }
    public get allowCredentials(): boolean | undefined {
        return this['allow_credentials'];
    }
    public withMaxAge(maxAge: number): CorsConfig {
        this['max_age'] = maxAge;
        return this;
    }
    public set maxAge(maxAge: number  | undefined) {
        this['max_age'] = maxAge;
    }
    public get maxAge(): number | undefined {
        return this['max_age'];
    }
}