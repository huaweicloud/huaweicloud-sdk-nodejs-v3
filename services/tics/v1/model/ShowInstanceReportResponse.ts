import { JobReportBaseInfoVo } from './JobReportBaseInfoVo';
import { JobReportEnvVo } from './JobReportEnvVo';
import { JobReportOutputVo } from './JobReportOutputVo';
import { JobReportPartnerVo } from './JobReportPartnerVo';
import { RoundDeployVo } from './RoundDeployVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceReportResponse extends SdkResponse {
    private 'job_report_base_info'?: JobReportBaseInfoVo;
    private 'job_report_env'?: JobReportEnvVo;
    private 'job_report_output'?: JobReportOutputVo;
    private 'job_report_partners'?: Array<JobReportPartnerVo>;
    private 'round_deploys'?: Array<RoundDeployVo>;
    public constructor() { 
        super();
    }
    public withJobReportBaseInfo(jobReportBaseInfo: JobReportBaseInfoVo): ShowInstanceReportResponse {
        this['job_report_base_info'] = jobReportBaseInfo;
        return this;
    }
    public set jobReportBaseInfo(jobReportBaseInfo: JobReportBaseInfoVo  | undefined) {
        this['job_report_base_info'] = jobReportBaseInfo;
    }
    public get jobReportBaseInfo(): JobReportBaseInfoVo | undefined {
        return this['job_report_base_info'];
    }
    public withJobReportEnv(jobReportEnv: JobReportEnvVo): ShowInstanceReportResponse {
        this['job_report_env'] = jobReportEnv;
        return this;
    }
    public set jobReportEnv(jobReportEnv: JobReportEnvVo  | undefined) {
        this['job_report_env'] = jobReportEnv;
    }
    public get jobReportEnv(): JobReportEnvVo | undefined {
        return this['job_report_env'];
    }
    public withJobReportOutput(jobReportOutput: JobReportOutputVo): ShowInstanceReportResponse {
        this['job_report_output'] = jobReportOutput;
        return this;
    }
    public set jobReportOutput(jobReportOutput: JobReportOutputVo  | undefined) {
        this['job_report_output'] = jobReportOutput;
    }
    public get jobReportOutput(): JobReportOutputVo | undefined {
        return this['job_report_output'];
    }
    public withJobReportPartners(jobReportPartners: Array<JobReportPartnerVo>): ShowInstanceReportResponse {
        this['job_report_partners'] = jobReportPartners;
        return this;
    }
    public set jobReportPartners(jobReportPartners: Array<JobReportPartnerVo>  | undefined) {
        this['job_report_partners'] = jobReportPartners;
    }
    public get jobReportPartners(): Array<JobReportPartnerVo> | undefined {
        return this['job_report_partners'];
    }
    public withRoundDeploys(roundDeploys: Array<RoundDeployVo>): ShowInstanceReportResponse {
        this['round_deploys'] = roundDeploys;
        return this;
    }
    public set roundDeploys(roundDeploys: Array<RoundDeployVo>  | undefined) {
        this['round_deploys'] = roundDeploys;
    }
    public get roundDeploys(): Array<RoundDeployVo> | undefined {
        return this['round_deploys'];
    }
}