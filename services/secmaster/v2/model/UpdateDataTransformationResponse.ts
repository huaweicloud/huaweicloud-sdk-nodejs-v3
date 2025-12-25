import { DataTransformationProcessError } from './DataTransformationProcessError';
import { IsapJobMode } from './IsapJobMode';
import { IsapJobModeSettingVo } from './IsapJobModeSettingVo';
import { JobEnvironment } from './JobEnvironment';
import { JobProcessStatus } from './JobProcessStatus';
import { JobStatus } from './JobStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDataTransformationResponse extends SdkResponse {
    private 'data_transformation_id'?: string;
    private 'data_transformation_name'?: string;
    public script?: string;
    public status?: JobStatus;
    public directory?: string;
    public description?: string;
    private 'job_mode'?: IsapJobMode;
    private 'job_mode_setting'?: IsapJobModeSettingVo;
    private 'process_status'?: JobProcessStatus;
    private 'process_error'?: DataTransformationProcessError;
    public environment?: JobEnvironment;
    private 'output_table_id'?: string;
    private 'output_table_name'?: string;
    private 'output_table_ids'?: Array<string>;
    private 'output_table_names'?: Array<string>;
    private 'create_by'?: string;
    private 'create_time'?: number;
    private 'update_by'?: string;
    private 'update_time'?: number;
    private 'delete_time'?: number;
    public constructor() { 
        super();
    }
    public withDataTransformationId(dataTransformationId: string): UpdateDataTransformationResponse {
        this['data_transformation_id'] = dataTransformationId;
        return this;
    }
    public set dataTransformationId(dataTransformationId: string  | undefined) {
        this['data_transformation_id'] = dataTransformationId;
    }
    public get dataTransformationId(): string | undefined {
        return this['data_transformation_id'];
    }
    public withDataTransformationName(dataTransformationName: string): UpdateDataTransformationResponse {
        this['data_transformation_name'] = dataTransformationName;
        return this;
    }
    public set dataTransformationName(dataTransformationName: string  | undefined) {
        this['data_transformation_name'] = dataTransformationName;
    }
    public get dataTransformationName(): string | undefined {
        return this['data_transformation_name'];
    }
    public withScript(script: string): UpdateDataTransformationResponse {
        this['script'] = script;
        return this;
    }
    public withStatus(status: JobStatus): UpdateDataTransformationResponse {
        this['status'] = status;
        return this;
    }
    public withDirectory(directory: string): UpdateDataTransformationResponse {
        this['directory'] = directory;
        return this;
    }
    public withDescription(description: string): UpdateDataTransformationResponse {
        this['description'] = description;
        return this;
    }
    public withJobMode(jobMode: IsapJobMode): UpdateDataTransformationResponse {
        this['job_mode'] = jobMode;
        return this;
    }
    public set jobMode(jobMode: IsapJobMode  | undefined) {
        this['job_mode'] = jobMode;
    }
    public get jobMode(): IsapJobMode | undefined {
        return this['job_mode'];
    }
    public withJobModeSetting(jobModeSetting: IsapJobModeSettingVo): UpdateDataTransformationResponse {
        this['job_mode_setting'] = jobModeSetting;
        return this;
    }
    public set jobModeSetting(jobModeSetting: IsapJobModeSettingVo  | undefined) {
        this['job_mode_setting'] = jobModeSetting;
    }
    public get jobModeSetting(): IsapJobModeSettingVo | undefined {
        return this['job_mode_setting'];
    }
    public withProcessStatus(processStatus: JobProcessStatus): UpdateDataTransformationResponse {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: JobProcessStatus  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): JobProcessStatus | undefined {
        return this['process_status'];
    }
    public withProcessError(processError: DataTransformationProcessError): UpdateDataTransformationResponse {
        this['process_error'] = processError;
        return this;
    }
    public set processError(processError: DataTransformationProcessError  | undefined) {
        this['process_error'] = processError;
    }
    public get processError(): DataTransformationProcessError | undefined {
        return this['process_error'];
    }
    public withEnvironment(environment: JobEnvironment): UpdateDataTransformationResponse {
        this['environment'] = environment;
        return this;
    }
    public withOutputTableId(outputTableId: string): UpdateDataTransformationResponse {
        this['output_table_id'] = outputTableId;
        return this;
    }
    public set outputTableId(outputTableId: string  | undefined) {
        this['output_table_id'] = outputTableId;
    }
    public get outputTableId(): string | undefined {
        return this['output_table_id'];
    }
    public withOutputTableName(outputTableName: string): UpdateDataTransformationResponse {
        this['output_table_name'] = outputTableName;
        return this;
    }
    public set outputTableName(outputTableName: string  | undefined) {
        this['output_table_name'] = outputTableName;
    }
    public get outputTableName(): string | undefined {
        return this['output_table_name'];
    }
    public withOutputTableIds(outputTableIds: Array<string>): UpdateDataTransformationResponse {
        this['output_table_ids'] = outputTableIds;
        return this;
    }
    public set outputTableIds(outputTableIds: Array<string>  | undefined) {
        this['output_table_ids'] = outputTableIds;
    }
    public get outputTableIds(): Array<string> | undefined {
        return this['output_table_ids'];
    }
    public withOutputTableNames(outputTableNames: Array<string>): UpdateDataTransformationResponse {
        this['output_table_names'] = outputTableNames;
        return this;
    }
    public set outputTableNames(outputTableNames: Array<string>  | undefined) {
        this['output_table_names'] = outputTableNames;
    }
    public get outputTableNames(): Array<string> | undefined {
        return this['output_table_names'];
    }
    public withCreateBy(createBy: string): UpdateDataTransformationResponse {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): UpdateDataTransformationResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateBy(updateBy: string): UpdateDataTransformationResponse {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withUpdateTime(updateTime: number): UpdateDataTransformationResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withDeleteTime(deleteTime: number): UpdateDataTransformationResponse {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: number  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): number | undefined {
        return this['delete_time'];
    }
}