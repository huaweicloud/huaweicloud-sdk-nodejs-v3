

export class BuildParameters {
    private 'build_cmd'?: string;
    private 'dockerfile_path'?: string;
    private 'artifact_namespace'?: string;
    private 'cluster_id'?: string;
    private 'node_label_selector'?: object;
    public constructor() { 
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
    public withNodeLabelSelector(nodeLabelSelector: object): BuildParameters {
        this['node_label_selector'] = nodeLabelSelector;
        return this;
    }
    public set nodeLabelSelector(nodeLabelSelector: object  | undefined) {
        this['node_label_selector'] = nodeLabelSelector;
    }
    public get nodeLabelSelector(): object | undefined {
        return this['node_label_selector'];
    }
}