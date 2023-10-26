

export class CreateHpcCacheTaskReq {
    public type?: CreateHpcCacheTaskReqTypeEnum | string;
    private 'src_target'?: string;
    private 'src_prefix'?: string;
    private 'dest_target'?: string;
    private 'dest_prefix'?: string;
    public constructor(type?: string, srcTarget?: string, destTarget?: string) { 
        this['type'] = type;
        this['src_target'] = srcTarget;
        this['dest_target'] = destTarget;
    }
    public withType(type: CreateHpcCacheTaskReqTypeEnum | string): CreateHpcCacheTaskReq {
        this['type'] = type;
        return this;
    }
    public withSrcTarget(srcTarget: string): CreateHpcCacheTaskReq {
        this['src_target'] = srcTarget;
        return this;
    }
    public set srcTarget(srcTarget: string  | undefined) {
        this['src_target'] = srcTarget;
    }
    public get srcTarget(): string | undefined {
        return this['src_target'];
    }
    public withSrcPrefix(srcPrefix: string): CreateHpcCacheTaskReq {
        this['src_prefix'] = srcPrefix;
        return this;
    }
    public set srcPrefix(srcPrefix: string  | undefined) {
        this['src_prefix'] = srcPrefix;
    }
    public get srcPrefix(): string | undefined {
        return this['src_prefix'];
    }
    public withDestTarget(destTarget: string): CreateHpcCacheTaskReq {
        this['dest_target'] = destTarget;
        return this;
    }
    public set destTarget(destTarget: string  | undefined) {
        this['dest_target'] = destTarget;
    }
    public get destTarget(): string | undefined {
        return this['dest_target'];
    }
    public withDestPrefix(destPrefix: string): CreateHpcCacheTaskReq {
        this['dest_prefix'] = destPrefix;
        return this;
    }
    public set destPrefix(destPrefix: string  | undefined) {
        this['dest_prefix'] = destPrefix;
    }
    public get destPrefix(): string | undefined {
        return this['dest_prefix'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateHpcCacheTaskReqTypeEnum {
    IMPORT = 'import',
    EXPORT = 'export',
    IMPORT_METADATA = 'import_metadata',
    PRELOAD = 'preload'
}
