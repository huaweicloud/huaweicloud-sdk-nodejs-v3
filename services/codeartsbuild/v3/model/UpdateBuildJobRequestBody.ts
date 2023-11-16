import { UpdateBuildJobParameter } from './UpdateBuildJobParameter';
import { UpdateBuildJobScm } from './UpdateBuildJobScm';
import { UpdateBuildJobSteps } from './UpdateBuildJobSteps';


export class UpdateBuildJobRequestBody {
    public arch?: string;
    private 'project_id'?: string;
    private 'job_name'?: string;
    private 'job_id'?: string;
    private 'auto_update_sub_module'?: string;
    public flavor?: string;
    public parameters?: Array<UpdateBuildJobParameter>;
    public scms?: Array<UpdateBuildJobScm>;
    public steps?: Array<UpdateBuildJobSteps>;
    private 'host_type'?: string;
    private 'build_config_type'?: string;
    public constructor(arch?: string, projectId?: string, jobName?: string, jobId?: string, steps?: Array<UpdateBuildJobSteps>) { 
        this['arch'] = arch;
        this['project_id'] = projectId;
        this['job_name'] = jobName;
        this['job_id'] = jobId;
        this['steps'] = steps;
    }
    public withArch(arch: string): UpdateBuildJobRequestBody {
        this['arch'] = arch;
        return this;
    }
    public withProjectId(projectId: string): UpdateBuildJobRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withJobName(jobName: string): UpdateBuildJobRequestBody {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobId(jobId: string): UpdateBuildJobRequestBody {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withAutoUpdateSubModule(autoUpdateSubModule: string): UpdateBuildJobRequestBody {
        this['auto_update_sub_module'] = autoUpdateSubModule;
        return this;
    }
    public set autoUpdateSubModule(autoUpdateSubModule: string  | undefined) {
        this['auto_update_sub_module'] = autoUpdateSubModule;
    }
    public get autoUpdateSubModule(): string | undefined {
        return this['auto_update_sub_module'];
    }
    public withFlavor(flavor: string): UpdateBuildJobRequestBody {
        this['flavor'] = flavor;
        return this;
    }
    public withParameters(parameters: Array<UpdateBuildJobParameter>): UpdateBuildJobRequestBody {
        this['parameters'] = parameters;
        return this;
    }
    public withScms(scms: Array<UpdateBuildJobScm>): UpdateBuildJobRequestBody {
        this['scms'] = scms;
        return this;
    }
    public withSteps(steps: Array<UpdateBuildJobSteps>): UpdateBuildJobRequestBody {
        this['steps'] = steps;
        return this;
    }
    public withHostType(hostType: string): UpdateBuildJobRequestBody {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): string | undefined {
        return this['host_type'];
    }
    public withBuildConfigType(buildConfigType: string): UpdateBuildJobRequestBody {
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