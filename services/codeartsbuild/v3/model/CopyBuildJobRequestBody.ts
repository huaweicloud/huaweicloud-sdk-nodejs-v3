import { CreateBuildJobParameter } from './CreateBuildJobParameter';
import { CreateBuildJobScm } from './CreateBuildJobScm';
import { CreateBuildJobSteps } from './CreateBuildJobSteps';
import { Trigger } from './Trigger';


export class CopyBuildJobRequestBody {
    public arch?: string;
    private 'project_id'?: string;
    private 'job_name'?: string;
    private 'copy_job_id'?: string;
    private 'auto_update_sub_module'?: string;
    public flavor?: string;
    public parameters?: Array<CreateBuildJobParameter>;
    public scms?: Array<CreateBuildJobScm>;
    public steps?: Array<CreateBuildJobSteps>;
    private 'host_type'?: string;
    private 'build_config_type'?: string;
    public triggers?: Array<Trigger>;
    public constructor(arch?: string, projectId?: string, jobName?: string, copyJobId?: string, steps?: Array<CreateBuildJobSteps>) { 
        this['arch'] = arch;
        this['project_id'] = projectId;
        this['job_name'] = jobName;
        this['copy_job_id'] = copyJobId;
        this['steps'] = steps;
    }
    public withArch(arch: string): CopyBuildJobRequestBody {
        this['arch'] = arch;
        return this;
    }
    public withProjectId(projectId: string): CopyBuildJobRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withJobName(jobName: string): CopyBuildJobRequestBody {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withCopyJobId(copyJobId: string): CopyBuildJobRequestBody {
        this['copy_job_id'] = copyJobId;
        return this;
    }
    public set copyJobId(copyJobId: string  | undefined) {
        this['copy_job_id'] = copyJobId;
    }
    public get copyJobId(): string | undefined {
        return this['copy_job_id'];
    }
    public withAutoUpdateSubModule(autoUpdateSubModule: string): CopyBuildJobRequestBody {
        this['auto_update_sub_module'] = autoUpdateSubModule;
        return this;
    }
    public set autoUpdateSubModule(autoUpdateSubModule: string  | undefined) {
        this['auto_update_sub_module'] = autoUpdateSubModule;
    }
    public get autoUpdateSubModule(): string | undefined {
        return this['auto_update_sub_module'];
    }
    public withFlavor(flavor: string): CopyBuildJobRequestBody {
        this['flavor'] = flavor;
        return this;
    }
    public withParameters(parameters: Array<CreateBuildJobParameter>): CopyBuildJobRequestBody {
        this['parameters'] = parameters;
        return this;
    }
    public withScms(scms: Array<CreateBuildJobScm>): CopyBuildJobRequestBody {
        this['scms'] = scms;
        return this;
    }
    public withSteps(steps: Array<CreateBuildJobSteps>): CopyBuildJobRequestBody {
        this['steps'] = steps;
        return this;
    }
    public withHostType(hostType: string): CopyBuildJobRequestBody {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): string | undefined {
        return this['host_type'];
    }
    public withBuildConfigType(buildConfigType: string): CopyBuildJobRequestBody {
        this['build_config_type'] = buildConfigType;
        return this;
    }
    public set buildConfigType(buildConfigType: string  | undefined) {
        this['build_config_type'] = buildConfigType;
    }
    public get buildConfigType(): string | undefined {
        return this['build_config_type'];
    }
    public withTriggers(triggers: Array<Trigger>): CopyBuildJobRequestBody {
        this['triggers'] = triggers;
        return this;
    }
}