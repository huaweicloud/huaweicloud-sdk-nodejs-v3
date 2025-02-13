import { Build } from './Build';
import { ResourceLimit } from './ResourceLimit';
import { Source } from './Source';


export class CreateComponentWithConfigurationRequestBodySpec {
    public runtime?: CreateComponentWithConfigurationRequestBodySpecRuntimeEnum | string;
    public replica?: number;
    public build?: Build;
    public source?: Source;
    private 'resource_limit'?: ResourceLimit;
    private 'image_url'?: string;
    public constructor(runtime?: string, replica?: number, source?: Source, resourceLimit?: ResourceLimit) { 
        this['runtime'] = runtime;
        this['replica'] = replica;
        this['source'] = source;
        this['resource_limit'] = resourceLimit;
    }
    public withRuntime(runtime: CreateComponentWithConfigurationRequestBodySpecRuntimeEnum | string): CreateComponentWithConfigurationRequestBodySpec {
        this['runtime'] = runtime;
        return this;
    }
    public withReplica(replica: number): CreateComponentWithConfigurationRequestBodySpec {
        this['replica'] = replica;
        return this;
    }
    public withBuild(build: Build): CreateComponentWithConfigurationRequestBodySpec {
        this['build'] = build;
        return this;
    }
    public withSource(source: Source): CreateComponentWithConfigurationRequestBodySpec {
        this['source'] = source;
        return this;
    }
    public withResourceLimit(resourceLimit: ResourceLimit): CreateComponentWithConfigurationRequestBodySpec {
        this['resource_limit'] = resourceLimit;
        return this;
    }
    public set resourceLimit(resourceLimit: ResourceLimit  | undefined) {
        this['resource_limit'] = resourceLimit;
    }
    public get resourceLimit(): ResourceLimit | undefined {
        return this['resource_limit'];
    }
    public withImageUrl(imageUrl: string): CreateComponentWithConfigurationRequestBodySpec {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string  | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl(): string | undefined {
        return this['image_url'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateComponentWithConfigurationRequestBodySpecRuntimeEnum {
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
