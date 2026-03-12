import { DeployedResource } from './DeployedResource';


export class DeployCertificateRequestBody {
    private 'project_name'?: string;
    private 'service_name'?: string;
    public resources?: Array<DeployedResource>;
    public constructor(serviceName?: string, resources?: Array<DeployedResource>) { 
        this['service_name'] = serviceName;
        this['resources'] = resources;
    }
    public withProjectName(projectName: string): DeployCertificateRequestBody {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withServiceName(serviceName: string): DeployCertificateRequestBody {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withResources(resources: Array<DeployedResource>): DeployCertificateRequestBody {
        this['resources'] = resources;
        return this;
    }
}