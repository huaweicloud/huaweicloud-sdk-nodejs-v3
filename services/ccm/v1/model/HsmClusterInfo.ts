

export class HsmClusterInfo {
    private 'hsm_project'?: string;
    private 'hsm_cluster_id'?: string;
    private 'hsm_ca_cert'?: string;
    public constructor(hsmProject?: string, hsmClusterId?: string, hsmCaCert?: string) { 
        this['hsm_project'] = hsmProject;
        this['hsm_cluster_id'] = hsmClusterId;
        this['hsm_ca_cert'] = hsmCaCert;
    }
    public withHsmProject(hsmProject: string): HsmClusterInfo {
        this['hsm_project'] = hsmProject;
        return this;
    }
    public set hsmProject(hsmProject: string  | undefined) {
        this['hsm_project'] = hsmProject;
    }
    public get hsmProject(): string | undefined {
        return this['hsm_project'];
    }
    public withHsmClusterId(hsmClusterId: string): HsmClusterInfo {
        this['hsm_cluster_id'] = hsmClusterId;
        return this;
    }
    public set hsmClusterId(hsmClusterId: string  | undefined) {
        this['hsm_cluster_id'] = hsmClusterId;
    }
    public get hsmClusterId(): string | undefined {
        return this['hsm_cluster_id'];
    }
    public withHsmCaCert(hsmCaCert: string): HsmClusterInfo {
        this['hsm_ca_cert'] = hsmCaCert;
        return this;
    }
    public set hsmCaCert(hsmCaCert: string  | undefined) {
        this['hsm_ca_cert'] = hsmCaCert;
    }
    public get hsmCaCert(): string | undefined {
        return this['hsm_ca_cert'];
    }
}