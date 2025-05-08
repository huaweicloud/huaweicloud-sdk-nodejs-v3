

export class AtomicModel {
    private 'atomic_unique_key'?: string;
    private 'atomic_name_zh'?: string;
    private 'atomic_name_en'?: string;
    public tags?: Array<string>;
    public constructor() { 
    }
    public withAtomicUniqueKey(atomicUniqueKey: string): AtomicModel {
        this['atomic_unique_key'] = atomicUniqueKey;
        return this;
    }
    public set atomicUniqueKey(atomicUniqueKey: string  | undefined) {
        this['atomic_unique_key'] = atomicUniqueKey;
    }
    public get atomicUniqueKey(): string | undefined {
        return this['atomic_unique_key'];
    }
    public withAtomicNameZh(atomicNameZh: string): AtomicModel {
        this['atomic_name_zh'] = atomicNameZh;
        return this;
    }
    public set atomicNameZh(atomicNameZh: string  | undefined) {
        this['atomic_name_zh'] = atomicNameZh;
    }
    public get atomicNameZh(): string | undefined {
        return this['atomic_name_zh'];
    }
    public withAtomicNameEn(atomicNameEn: string): AtomicModel {
        this['atomic_name_en'] = atomicNameEn;
        return this;
    }
    public set atomicNameEn(atomicNameEn: string  | undefined) {
        this['atomic_name_en'] = atomicNameEn;
    }
    public get atomicNameEn(): string | undefined {
        return this['atomic_name_en'];
    }
    public withTags(tags: Array<string>): AtomicModel {
        this['tags'] = tags;
        return this;
    }
}