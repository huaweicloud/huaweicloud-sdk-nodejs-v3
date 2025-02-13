

export class Archive {
    private 'artifact_namespace'?: string;
    public constructor() { 
    }
    public withArtifactNamespace(artifactNamespace: string): Archive {
        this['artifact_namespace'] = artifactNamespace;
        return this;
    }
    public set artifactNamespace(artifactNamespace: string  | undefined) {
        this['artifact_namespace'] = artifactNamespace;
    }
    public get artifactNamespace(): string | undefined {
        return this['artifact_namespace'];
    }
}