import { Build } from './Build';
import { ResourceLimit } from './ResourceLimit';
import { Source } from './Source';


export class CreateComponentSpec {
    public runtime?: CreateComponentSpecRuntimeEnum | string;
    private 'env_id'?: string;
    public replica?: number;
    public source?: Source;
    public build?: Build;
    private 'resource_limit'?: ResourceLimit;
    private 'available_replica'?: number;
    public status?: string;
    public constructor() { 
    }
    public withRuntime(runtime: CreateComponentSpecRuntimeEnum | string): CreateComponentSpec {
        this['runtime'] = runtime;
        return this;
    }
    public withEnvId(envId: string): CreateComponentSpec {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withReplica(replica: number): CreateComponentSpec {
        this['replica'] = replica;
        return this;
    }
    public withSource(source: Source): CreateComponentSpec {
        this['source'] = source;
        return this;
    }
    public withBuild(build: Build): CreateComponentSpec {
        this['build'] = build;
        return this;
    }
    public withResourceLimit(resourceLimit: ResourceLimit): CreateComponentSpec {
        this['resource_limit'] = resourceLimit;
        return this;
    }
    public set resourceLimit(resourceLimit: ResourceLimit  | undefined) {
        this['resource_limit'] = resourceLimit;
    }
    public get resourceLimit(): ResourceLimit | undefined {
        return this['resource_limit'];
    }
    public withAvailableReplica(availableReplica: number): CreateComponentSpec {
        this['available_replica'] = availableReplica;
        return this;
    }
    public set availableReplica(availableReplica: number  | undefined) {
        this['available_replica'] = availableReplica;
    }
    public get availableReplica(): number | undefined {
        return this['available_replica'];
    }
    public withStatus(status: string): CreateComponentSpec {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateComponentSpecRuntimeEnum {
    DOCKER = 'Docker',
    JAVA8 = 'Java8',
    JAVA11 = 'Java11',
    JAVA17 = 'Java17',
    JAVA21 = 'Java21',
    TOMCAT8 = 'Tomcat8',
    TOMCAT9 = 'Tomcat9',
    PYTHON3 = 'Python3',
    NODEJS8 = 'Nodejs8',
    NODEJS14 = 'Nodejs14',
    NODEJS16 = 'Nodejs16',
    PHP7 = 'Php7',
    PHP8 = 'Php8',
    DOTNET6 = 'Dotnet6',
    DOTNET7 = 'Dotnet7',
    DOTNET8 = 'Dotnet8'
}
