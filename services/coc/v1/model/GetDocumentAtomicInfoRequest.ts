

export class GetDocumentAtomicInfoRequest {
    private 'atomic_unique_key'?: string;
    public constructor(atomicUniqueKey?: string) { 
        this['atomic_unique_key'] = atomicUniqueKey;
    }
    public withAtomicUniqueKey(atomicUniqueKey: string): GetDocumentAtomicInfoRequest {
        this['atomic_unique_key'] = atomicUniqueKey;
        return this;
    }
    public set atomicUniqueKey(atomicUniqueKey: string  | undefined) {
        this['atomic_unique_key'] = atomicUniqueKey;
    }
    public get atomicUniqueKey(): string | undefined {
        return this['atomic_unique_key'];
    }
}