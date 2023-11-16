import { CreateBuildJobParameter } from './CreateBuildJobParameter';
import { CreateBuildJobScm } from './CreateBuildJobScm';
import { CreateBuildJobSteps } from './CreateBuildJobSteps';


export class CreateBuildJobRequestBody {
    public arch?: string;
    private 'project_id'?: string;
    private 'job_name'?: string;
    private 'auto_update_sub_module'?: string;
    public flavor?: string;
    public parameters?: Array<CreateBuildJobParameter>;
    public scms?: Array<CreateBuildJobScm>;
    public steps?: Array<CreateBuildJobSteps>;
    private 'host_type'?: string;
    private 'build_config_type'?: string;
    public constructor(arch?: string, projectId?: string, jobName?: string, steps?: Array<CreateBuildJobSteps>) { 
        this['arch'] = arch;
        this['project_id'] = projectId;
        this['job_name'] = jobName;
        this['steps'] = steps;
    }
    public withArch(arch: string): CreateBuildJobRequestBody {
        this['arch'] = arch;
        return this;
    }
    public withProjectId(projectId: string): CreateBuildJobRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withJobName(jobName: string): CreateBuildJobRequestBody {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withAutoUpdateSubModule(autoUpdateSubModule: string): CreateBuildJobRequestBody {
        this['auto_update_sub_module'] = autoUpdateSubModule;
        return this;
    }
    public set autoUpdateSubModule(autoUpdateSubModule: string  | undefined) {
        this['auto_update_sub_module'] = autoUpdateSubModule;
    }
    public get autoUpdateSubModule(): string | undefined {
        return this['auto_update_sub_module'];
    }
    public withFlavor(flavor: string): CreateBuildJobRequestBody {
        this['flavor'] = flavor;
        return this;
    }
    public withParameters(parameters: Array<CreateBuildJobParameter>): CreateBuildJobRequestBody {
        this['parameters'] = parameters;
        return this;
    }
    public withScms(scms: Array<CreateBuildJobScm>): CreateBuildJobRequestBody {
        this['scms'] = scms;
        return this;
    }
    public withSteps(steps: Array<CreateBuildJobSteps>): CreateBuildJobRequestBody {
        this['steps'] = steps;
        return this;
    }
    public withHostType(hostType: string): CreateBuildJobRequestBody {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): string | undefined {
        return this['host_type'];
    }
    public withBuildConfigType(buildConfigType: string): CreateBuildJobRequestBody {
        this['build_config_type'] = buildConfigType;
        return this;
    }
    public set buildConfigType(buildConfigType: string  | undefined) {
        this['build_config_type'] = buildConfigType;
    }
    public get buildConfigType(): string | undefined {
        return this['build_config_type'];
    }
}