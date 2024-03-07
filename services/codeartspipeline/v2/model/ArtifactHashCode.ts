

export class ArtifactHashCode {
    private 'hash_type'?: string;
    private 'hash_value'?: string;
    public constructor() { 
    }
    public withHashType(hashType: string): ArtifactHashCode {
        this['hash_type'] = hashType;
        return this;
    }
    public set hashType(hashType: string  | undefined) {
        this['hash_type'] = hashType;
    }
    public get hashType(): string | undefined {
        return this['hash_type'];
    }
    public withHashValue(hashValue: string): ArtifactHashCode {
        this['hash_value'] = hashValue;
        return this;
    }
    public set hashValue(hashValue: string  | undefined) {
        this['hash_value'] = hashValue;
    }
    public get hashValue(): string | undefined {
        return this['hash_value'];
    }
}