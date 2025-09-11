

export class Accessory {
    public id?: number;
    private 'artifact_id'?: number;
    private 'subject_artifact_id'?: number;
    public size?: number;
    public digest?: string;
    public type?: AccessoryTypeEnum | string;
    private 'created_at'?: string;
    public constructor() { 
    }
    public withId(id: number): Accessory {
        this['id'] = id;
        return this;
    }
    public withArtifactId(artifactId: number): Accessory {
        this['artifact_id'] = artifactId;
        return this;
    }
    public set artifactId(artifactId: number  | undefined) {
        this['artifact_id'] = artifactId;
    }
    public get artifactId(): number | undefined {
        return this['artifact_id'];
    }
    public withSubjectArtifactId(subjectArtifactId: number): Accessory {
        this['subject_artifact_id'] = subjectArtifactId;
        return this;
    }
    public set subjectArtifactId(subjectArtifactId: number  | undefined) {
        this['subject_artifact_id'] = subjectArtifactId;
    }
    public get subjectArtifactId(): number | undefined {
        return this['subject_artifact_id'];
    }
    public withSize(size: number): Accessory {
        this['size'] = size;
        return this;
    }
    public withDigest(digest: string): Accessory {
        this['digest'] = digest;
        return this;
    }
    public withType(type: AccessoryTypeEnum | string): Accessory {
        this['type'] = type;
        return this;
    }
    public withCreatedAt(createdAt: string): Accessory {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessoryTypeEnum {
    SIGNATURE_COSIGN = 'signature.cosign'
}
