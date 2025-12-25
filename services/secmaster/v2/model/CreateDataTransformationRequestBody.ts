import { IsapJobMode } from './IsapJobMode';
import { IsapJobModeSettingDto } from './IsapJobModeSettingDto';
import { JobEnvironment } from './JobEnvironment';
import { JobStatus } from './JobStatus';


export class CreateDataTransformationRequestBody {
    private 'data_transformation_name'?: string;
    public description?: string;
    public directory?: string;
    public script?: string;
    public status?: JobStatus;
    private 'job_mode'?: IsapJobMode;
    private 'job_mode_setting'?: IsapJobModeSettingDto;
    public environment?: JobEnvironment;
    private 'output_table_id'?: string;
    public belong?: string;
    private 'cu_quota_amount'?: number;
    private 'input_table_id'?: Array<string>;
    private 'input_table_names'?: Array<string>;
    private 'output_table_ids'?: Array<string>;
    private 'output_table_names'?: Array<string>;
    public constructor(dataTransformationName?: string, description?: string, script?: string, status?: JobStatus, jobMode?: IsapJobMode, environment?: JobEnvironment, cuQuotaAmount?: number, outputTableIds?: Array<string>, outputTableNames?: Array<string>) { 
        this['data_transformation_name'] = dataTransformationName;
        this['description'] = description;
        this['script'] = script;
        this['status'] = status;
        this['job_mode'] = jobMode;
        this['environment'] = environment;
        this['cu_quota_amount'] = cuQuotaAmount;
        this['output_table_ids'] = outputTableIds;
        this['output_table_names'] = outputTableNames;
    }
    public withDataTransformationName(dataTransformationName: string): CreateDataTransformationRequestBody {
        this['data_transformation_name'] = dataTransformationName;
        return this;
    }
    public set dataTransformationName(dataTransformationName: string  | undefined) {
        this['data_transformation_name'] = dataTransformationName;
    }
    public get dataTransformationName(): string | undefined {
        return this['data_transformation_name'];
    }
    public withDescription(description: string): CreateDataTransformationRequestBody {
        this['description'] = description;
        return this;
    }
    public withDirectory(directory: string): CreateDataTransformationRequestBody {
        this['directory'] = directory;
        return this;
    }
    public withScript(script: string): CreateDataTransformationRequestBody {
        this['script'] = script;
        return this;
    }
    public withStatus(status: JobStatus): CreateDataTransformationRequestBody {
        this['status'] = status;
        return this;
    }
    public withJobMode(jobMode: IsapJobMode): CreateDataTransformationRequestBody {
        this['job_mode'] = jobMode;
        return this;
    }
    public set jobMode(jobMode: IsapJobMode  | undefined) {
        this['job_mode'] = jobMode;
    }
    public get jobMode(): IsapJobMode | undefined {
        return this['job_mode'];
    }
    public withJobModeSetting(jobModeSetting: IsapJobModeSettingDto): CreateDataTransformationRequestBody {
        this['job_mode_setting'] = jobModeSetting;
        return this;
    }
    public set jobModeSetting(jobModeSetting: IsapJobModeSettingDto  | undefined) {
        this['job_mode_setting'] = jobModeSetting;
    }
    public get jobModeSetting(): IsapJobModeSettingDto | undefined {
        return this['job_mode_setting'];
    }
    public withEnvironment(environment: JobEnvironment): CreateDataTransformationRequestBody {
        this['environment'] = environment;
        return this;
    }
    public withOutputTableId(outputTableId: string): CreateDataTransformationRequestBody {
        this['output_table_id'] = outputTableId;
        return this;
    }
    public set outputTableId(outputTableId: string  | undefined) {
        this['output_table_id'] = outputTableId;
    }
    public get outputTableId(): string | undefined {
        return this['output_table_id'];
    }
    public withBelong(belong: string): CreateDataTransformationRequestBody {
        this['belong'] = belong;
        return this;
    }
    public withCuQuotaAmount(cuQuotaAmount: number): CreateDataTransformationRequestBody {
        this['cu_quota_amount'] = cuQuotaAmount;
        return this;
    }
    public set cuQuotaAmount(cuQuotaAmount: number  | undefined) {
        this['cu_quota_amount'] = cuQuotaAmount;
    }
    public get cuQuotaAmount(): number | undefined {
        return this['cu_quota_amount'];
    }
    public withInputTableId(inputTableId: Array<string>): CreateDataTransformationRequestBody {
        this['input_table_id'] = inputTableId;
        return this;
    }
    public set inputTableId(inputTableId: Array<string>  | undefined) {
        this['input_table_id'] = inputTableId;
    }
    public get inputTableId(): Array<string> | undefined {
        return this['input_table_id'];
    }
    public withInputTableNames(inputTableNames: Array<string>): CreateDataTransformationRequestBody {
        this['input_table_names'] = inputTableNames;
        return this;
    }
    public set inputTableNames(inputTableNames: Array<string>  | undefined) {
        this['input_table_names'] = inputTableNames;
    }
    public get inputTableNames(): Array<string> | undefined {
        return this['input_table_names'];
    }
    public withOutputTableIds(outputTableIds: Array<string>): CreateDataTransformationRequestBody {
        this['output_table_ids'] = outputTableIds;
        return this;
    }
    public set outputTableIds(outputTableIds: Array<string>  | undefined) {
        this['output_table_ids'] = outputTableIds;
    }
    public get outputTableIds(): Array<string> | undefined {
        return this['output_table_ids'];
    }
    public withOutputTableNames(outputTableNames: Array<string>): CreateDataTransformationRequestBody {
        this['output_table_names'] = outputTableNames;
        return this;
    }
    public set outputTableNames(outputTableNames: Array<string>  | undefined) {
        this['output_table_names'] = outputTableNames;
    }
    public get outputTableNames(): Array<string> | undefined {
        return this['output_table_names'];
    }
}