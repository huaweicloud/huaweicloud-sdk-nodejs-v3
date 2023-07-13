import { BuildStep } from './BuildStep';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHistoryDetailsResponse extends SdkResponse {
    private 'job_name'?: string | undefined;
    private 'build_number'?: number | undefined;
    private 'project_id'?: string | undefined;
    private 'project_name'?: string | undefined;
    public parameters?: { [key: string]: string; };
    private 'build_steps'?: Array<BuildStep> | undefined;
    public constructor() { 
        super();
    }
    public withJobName(jobName: string): ShowHistoryDetailsResponse {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName() {
        return this['job_name'];
    }
    public withBuildNumber(buildNumber: number): ShowHistoryDetailsResponse {
        this['build_number'] = buildNumber;
        return this;
    }
    public set buildNumber(buildNumber: number | undefined) {
        this['build_number'] = buildNumber;
    }
    public get buildNumber() {
        return this['build_number'];
    }
    public withProjectId(projectId: string): ShowHistoryDetailsResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withProjectName(projectName: string): ShowHistoryDetailsResponse {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName() {
        return this['project_name'];
    }
    public withParameters(parameters: { [key: string]: string; }): ShowHistoryDetailsResponse {
        this['parameters'] = parameters;
        return this;
    }
    public withBuildSteps(buildSteps: Array<BuildStep>): ShowHistoryDetailsResponse {
        this['build_steps'] = buildSteps;
        return this;
    }
    public set buildSteps(buildSteps: Array<BuildStep> | undefined) {
        this['build_steps'] = buildSteps;
    }
    public get buildSteps() {
        return this['build_steps'];
    }
}