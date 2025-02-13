import { Build } from './Build';
import { ResourceLimit } from './ResourceLimit';
import { Source } from './Source';


export class UpdateComponentRequestSpec {
    public runtime?: UpdateComponentRequestSpecRuntimeEnum | string;
    public source?: Source;
    public build?: Build;
    private 'resource_limit'?: ResourceLimit;
    public replica?: number;
    public constructor(resourceLimit?: ResourceLimit) { 
        this['resource_limit'] = resourceLimit;
    }
    public withRuntime(runtime: UpdateComponentRequestSpecRuntimeEnum | string): UpdateComponentRequestSpec {
        this['runtime'] = runtime;
        return this;
    }
    public withSource(source: Source): UpdateComponentRequestSpec {
        this['source'] = source;
        return this;
    }
    public withBuild(build: Build): UpdateComponentRequestSpec {
        this['build'] = build;
        return this;
    }
    public withResourceLimit(resourceLimit: ResourceLimit): UpdateComponentRequestSpec {
        this['resource_limit'] = resourceLimit;
        return this;
    }
    public set resourceLimit(resourceLimit: ResourceLimit  | undefined) {
        this['resource_limit'] = resourceLimit;
    }
    public get resourceLimit(): ResourceLimit | undefined {
        return this['resource_limit'];
    }
    public withReplica(replica: number): UpdateComponentRequestSpec {
        this['replica'] = replica;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateComponentRequestSpecRuntimeEnum {
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
