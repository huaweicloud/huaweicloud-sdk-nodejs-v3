import { IsapJobMode } from './IsapJobMode';
import { IsapJobModeSettingDto } from './IsapJobModeSettingDto';
import { JobEnvironment } from './JobEnvironment';
import { JobStatus } from './JobStatus';


export class UpdateDataTransformationRequestBody {
    private 'data_transformation_name'?: string;
    public description?: string;
    public directory?: string;
    public script?: string;
    public status?: JobStatus;
    public belong?: string;
    private 'job_mode'?: IsapJobMode;
    private 'cu_quota_amount'?: number;
    private 'job_mode_setting'?: IsapJobModeSettingDto;
    public environment?: JobEnvironment;
    private 'output_table_id'?: string;
    private 'output_table_ids'?: Array<string>;
    private 'output_table_names'?: Array<string>;
    public constructor() { 
    }
    public withDataTransformationName(dataTransformationName: string): UpdateDataTransformationRequestBody {
        this['data_transformation_name'] = dataTransformationName;
        return this;
    }
    public set dataTransformationName(dataTransformationName: string  | undefined) {
        this['data_transformation_name'] = dataTransformationName;
    }
    public get dataTransformationName(): string | undefined {
        return this['data_transformation_name'];
    }
    public withDescription(description: string): UpdateDataTransformationRequestBody {
        this['description'] = description;
        return this;
    }
    public withDirectory(directory: string): UpdateDataTransformationRequestBody {
        this['directory'] = directory;
        return this;
    }
    public withScript(script: string): UpdateDataTransformationRequestBody {
        this['script'] = script;
        return this;
    }
    public withStatus(status: JobStatus): UpdateDataTransformationRequestBody {
        this['status'] = status;
        return this;
    }
    public withBelong(belong: string): UpdateDataTransformationRequestBody {
        this['belong'] = belong;
        return this;
    }
    public withJobMode(jobMode: IsapJobMode): UpdateDataTransformationRequestBody {
        this['job_mode'] = jobMode;
        return this;
    }
    public set jobMode(jobMode: IsapJobMode  | undefined) {
        this['job_mode'] = jobMode;
    }
    public get jobMode(): IsapJobMode | undefined {
        return this['job_mode'];
    }
    public withCuQuotaAmount(cuQuotaAmount: number): UpdateDataTransformationRequestBody {
        this['cu_quota_amount'] = cuQuotaAmount;
        return this;
    }
    public set cuQuotaAmount(cuQuotaAmount: number  | undefined) {
        this['cu_quota_amount'] = cuQuotaAmount;
    }
    public get cuQuotaAmount(): number | undefined {
        return this['cu_quota_amount'];
    }
    public withJobModeSetting(jobModeSetting: IsapJobModeSettingDto): UpdateDataTransformationRequestBody {
        this['job_mode_setting'] = jobModeSetting;
        return this;
    }
    public set jobModeSetting(jobModeSetting: IsapJobModeSettingDto  | undefined) {
        this['job_mode_setting'] = jobModeSetting;
    }
    public get jobModeSetting(): IsapJobModeSettingDto | undefined {
        return this['job_mode_setting'];
    }
    public withEnvironment(environment: JobEnvironment): UpdateDataTransformationRequestBody {
        this['environment'] = environment;
        return this;
    }
    public withOutputTableId(outputTableId: string): UpdateDataTransformationRequestBody {
        this['output_table_id'] = outputTableId;
        return this;
    }
    public set outputTableId(outputTableId: string  | undefined) {
        this['output_table_id'] = outputTableId;
    }
    public get outputTableId(): string | undefined {
        return this['output_table_id'];
    }
    public withOutputTableIds(outputTableIds: Array<string>): UpdateDataTransformationRequestBody {
        this['output_table_ids'] = outputTableIds;
        return this;
    }
    public set outputTableIds(outputTableIds: Array<string>  | undefined) {
        this['output_table_ids'] = outputTableIds;
    }
    public get outputTableIds(): Array<string> | undefined {
        return this['output_table_ids'];
    }
    public withOutputTableNames(outputTableNames: Array<string>): UpdateDataTransformationRequestBody {
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