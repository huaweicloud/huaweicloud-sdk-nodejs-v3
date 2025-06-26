

export class NamespaceMetadata {
    private 'public'?: NamespaceMetadataPublicEnum | string;
    public constructor(_public?: string) { 
        this['public'] = _public;
    }
    public withPublic(_public: NamespaceMetadataPublicEnum | string): NamespaceMetadata {
        this['public'] = _public;
        return this;
    }
    public set _public(_public: NamespaceMetadataPublicEnum | string  | undefined) {
        this['public'] = _public;
    }
    public get _public(): NamespaceMetadataPublicEnum | string | undefined {
        return this['public'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NamespaceMetadataPublicEnum {
    TRUE = 'true',
    FALSE = 'false'
}
