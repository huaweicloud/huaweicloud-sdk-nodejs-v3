

export class DockerLvmConfig {
    public dockerThinPool?: number;
    public kubernetesLV?: number;
    public dockerDiskType?: string;
    public lvType?: string;
    public constructor(dockerThinPool?: number, kubernetesLV?: number, dockerDiskType?: string) { 
        this['dockerThinPool'] = dockerThinPool;
        this['kubernetesLV'] = kubernetesLV;
        this['dockerDiskType'] = dockerDiskType;
    }
    public withDockerThinPool(dockerThinPool: number): DockerLvmConfig {
        this['dockerThinPool'] = dockerThinPool;
        return this;
    }
    public withKubernetesLV(kubernetesLV: number): DockerLvmConfig {
        this['kubernetesLV'] = kubernetesLV;
        return this;
    }
    public withDockerDiskType(dockerDiskType: string): DockerLvmConfig {
        this['dockerDiskType'] = dockerDiskType;
        return this;
    }
    public withLvType(lvType: string): DockerLvmConfig {
        this['lvType'] = lvType;
        return this;
    }
}