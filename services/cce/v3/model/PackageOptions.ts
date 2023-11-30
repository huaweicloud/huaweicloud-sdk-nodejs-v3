

export class PackageOptions {
    public name?: string;
    private 'default'?: string;
    public validAt?: PackageOptionsValidAtEnum | string;
    public empty?: boolean;
    public schema?: string;
    public type?: string;
    public constructor(name?: string, _default?: string, validAt?: string, empty?: boolean, schema?: string, type?: string) { 
        this['name'] = name;
        this['default'] = _default;
        this['validAt'] = validAt;
        this['empty'] = empty;
        this['schema'] = schema;
        this['type'] = type;
    }
    public withName(name: string): PackageOptions {
        this['name'] = name;
        return this;
    }
    public withDefault(_default: string): PackageOptions {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: string  | undefined) {
        this['default'] = _default;
    }
    public get _default(): string | undefined {
        return this['default'];
    }
    public withValidAt(validAt: PackageOptionsValidAtEnum | string): PackageOptions {
        this['validAt'] = validAt;
        return this;
    }
    public withEmpty(empty: boolean): PackageOptions {
        this['empty'] = empty;
        return this;
    }
    public withSchema(schema: string): PackageOptions {
        this['schema'] = schema;
        return this;
    }
    public withType(type: string): PackageOptions {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PackageOptionsValidAtEnum {
    STATIC = 'static',
    IMMEDIATELY = 'immediately'
}
