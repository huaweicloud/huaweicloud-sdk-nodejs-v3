import { AffinityOS } from './AffinityOS';
import { DockerLvmConfig } from './DockerLvmConfig';


export class NodeConfigTemplateSpec {
    public dockerBaseSize?: number;
    public dockerLvmConfig?: DockerLvmConfig;
    public osList?: Array<AffinityOS>;
    public constructor(dockerBaseSize?: number) { 
        this['dockerBaseSize'] = dockerBaseSize;
    }
    public withDockerBaseSize(dockerBaseSize: number): NodeConfigTemplateSpec {
        this['dockerBaseSize'] = dockerBaseSize;
        return this;
    }
    public withDockerLvmConfig(dockerLvmConfig: DockerLvmConfig): NodeConfigTemplateSpec {
        this['dockerLvmConfig'] = dockerLvmConfig;
        return this;
    }
    public withOsList(osList: Array<AffinityOS>): NodeConfigTemplateSpec {
        this['osList'] = osList;
        return this;
    }
}