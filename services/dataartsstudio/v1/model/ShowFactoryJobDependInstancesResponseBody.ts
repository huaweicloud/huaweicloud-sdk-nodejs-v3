

export class ShowFactoryJobDependInstancesResponseBody {
    private 'job_name'?: string;
    private 'job_path'?: string;
    private 'depend_layer'?: ShowFactoryJobDependInstancesResponseBodyDependLayerEnum | string;
    private 'workspace_name'?: string;
    public owner?: string;
    public constructor() { 
    }
    public withJobName(jobName: string): ShowFactoryJobDependInstancesResponseBody {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobPath(jobPath: string): ShowFactoryJobDependInstancesResponseBody {
        this['job_path'] = jobPath;
        return this;
    }
    public set jobPath(jobPath: string  | undefined) {
        this['job_path'] = jobPath;
    }
    public get jobPath(): string | undefined {
        return this['job_path'];
    }
    public withDependLayer(dependLayer: ShowFactoryJobDependInstancesResponseBodyDependLayerEnum | string): ShowFactoryJobDependInstancesResponseBody {
        this['depend_layer'] = dependLayer;
        return this;
    }
    public set dependLayer(dependLayer: ShowFactoryJobDependInstancesResponseBodyDependLayerEnum | string  | undefined) {
        this['depend_layer'] = dependLayer;
    }
    public get dependLayer(): ShowFactoryJobDependInstancesResponseBodyDependLayerEnum | string | undefined {
        return this['depend_layer'];
    }
    public withWorkspaceName(workspaceName: string): ShowFactoryJobDependInstancesResponseBody {
        this['workspace_name'] = workspaceName;
        return this;
    }
    public set workspaceName(workspaceName: string  | undefined) {
        this['workspace_name'] = workspaceName;
    }
    public get workspaceName(): string | undefined {
        return this['workspace_name'];
    }
    public withOwner(owner: string): ShowFactoryJobDependInstancesResponseBody {
        this['owner'] = owner;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowFactoryJobDependInstancesResponseBodyDependLayerEnum {
    PARENT = 'parent',
    CHILD = 'child'
}
