import { ExportFilterInfo } from './ExportFilterInfo';


export class ExportBinlogRequestBody {
    private 'bucket_name'?: string;
    private 'task_id'?: number;
    public info?: ExportFilterInfo;
    public constructor(bucketName?: string, taskId?: number) { 
        this['bucket_name'] = bucketName;
        this['task_id'] = taskId;
    }
    public withBucketName(bucketName: string): ExportBinlogRequestBody {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withTaskId(taskId: number): ExportBinlogRequestBody {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
    public withInfo(info: ExportFilterInfo): ExportBinlogRequestBody {
        this['info'] = info;
        return this;
    }
}