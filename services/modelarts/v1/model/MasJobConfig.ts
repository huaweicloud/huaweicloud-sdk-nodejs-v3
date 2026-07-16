import { CheckpointConf } from './CheckpointConf';
import { TaskEnv } from './TaskEnv';


export class MasJobConfig {
    private 'ft_job_uuid'?: string;
    private 'ft_train_type'?: string;
    private 'model_type'?: string;
    private 'train_output_path'?: string;
    private 'train_process'?: number;
    private 'checkpoint_id'?: string;
    private 'task_env'?: TaskEnv;
    private 'checkpoint_config'?: CheckpointConf;
    public constructor() { 
    }
    public withFtJobUuid(ftJobUuid: string): MasJobConfig {
        this['ft_job_uuid'] = ftJobUuid;
        return this;
    }
    public set ftJobUuid(ftJobUuid: string  | undefined) {
        this['ft_job_uuid'] = ftJobUuid;
    }
    public get ftJobUuid(): string | undefined {
        return this['ft_job_uuid'];
    }
    public withFtTrainType(ftTrainType: string): MasJobConfig {
        this['ft_train_type'] = ftTrainType;
        return this;
    }
    public set ftTrainType(ftTrainType: string  | undefined) {
        this['ft_train_type'] = ftTrainType;
    }
    public get ftTrainType(): string | undefined {
        return this['ft_train_type'];
    }
    public withModelType(modelType: string): MasJobConfig {
        this['model_type'] = modelType;
        return this;
    }
    public set modelType(modelType: string  | undefined) {
        this['model_type'] = modelType;
    }
    public get modelType(): string | undefined {
        return this['model_type'];
    }
    public withTrainOutputPath(trainOutputPath: string): MasJobConfig {
        this['train_output_path'] = trainOutputPath;
        return this;
    }
    public set trainOutputPath(trainOutputPath: string  | undefined) {
        this['train_output_path'] = trainOutputPath;
    }
    public get trainOutputPath(): string | undefined {
        return this['train_output_path'];
    }
    public withTrainProcess(trainProcess: number): MasJobConfig {
        this['train_process'] = trainProcess;
        return this;
    }
    public set trainProcess(trainProcess: number  | undefined) {
        this['train_process'] = trainProcess;
    }
    public get trainProcess(): number | undefined {
        return this['train_process'];
    }
    public withCheckpointId(checkpointId: string): MasJobConfig {
        this['checkpoint_id'] = checkpointId;
        return this;
    }
    public set checkpointId(checkpointId: string  | undefined) {
        this['checkpoint_id'] = checkpointId;
    }
    public get checkpointId(): string | undefined {
        return this['checkpoint_id'];
    }
    public withTaskEnv(taskEnv: TaskEnv): MasJobConfig {
        this['task_env'] = taskEnv;
        return this;
    }
    public set taskEnv(taskEnv: TaskEnv  | undefined) {
        this['task_env'] = taskEnv;
    }
    public get taskEnv(): TaskEnv | undefined {
        return this['task_env'];
    }
    public withCheckpointConfig(checkpointConfig: CheckpointConf): MasJobConfig {
        this['checkpoint_config'] = checkpointConfig;
        return this;
    }
    public set checkpointConfig(checkpointConfig: CheckpointConf  | undefined) {
        this['checkpoint_config'] = checkpointConfig;
    }
    public get checkpointConfig(): CheckpointConf | undefined {
        return this['checkpoint_config'];
    }
}