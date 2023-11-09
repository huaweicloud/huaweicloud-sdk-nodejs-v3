

export class BuildParameters {
    private 'artifact_namespace'?: string;
    private 'build_cmd'?: string;
    private 'cluster_id'?: string;
    private 'dockerfile_path'?: string;
    private 'environment_id'?: string;
    private 'node_label_selector'?: { [key: string]: string; };
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withArtifactNamespace(artifactNamespace: string): BuildParameters {
        this['artifact_namespace'] = artifactNamespace;
        return this;
    }
    public set artifactNamespace(artifactNamespace: string  | undefined) {
        this['artifact_namespace'] = artifactNamespace;
    }
    public get artifactNamespace(): string | undefined {
        return this['artifact_namespace'];
    }
    public withBuildCmd(buildCmd: string): BuildParameters {
        this['build_cmd'] = buildCmd;
        return this;
    }
    public set buildCmd(buildCmd: string  | undefined) {
        this['build_cmd'] = buildCmd;
    }
    public get buildCmd(): string | undefined {
        return this['build_cmd'];
    }
    public withClusterId(clusterId: string): BuildParameters {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withDockerfilePath(dockerfilePath: string): BuildParameters {
        this['dockerfile_path'] = dockerfilePath;
        return this;
    }
    public set dockerfilePath(dockerfilePath: string  | undefined) {
        this['dockerfile_path'] = dockerfilePath;
    }
    public get dockerfilePath(): string | undefined {
        return this['dockerfile_path'];
    }
    public withEnvironmentId(environmentId: string): BuildParameters {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withNodeLabelSelector(nodeLabelSelector: { [key: string]: string; }): BuildParameters {
        this['node_label_selector'] = nodeLabelSelector;
        return this;
    }
    public set nodeLabelSelector(nodeLabelSelector: { [key: string]: string; }  | undefined) {
        this['node_label_selector'] = nodeLabelSelector;
    }
    public get nodeLabelSelector(): { [key: string]: string; } | undefined {
        return this['node_label_selector'];
    }
}