import { ImageScanTaskInfoFailedImages } from './ImageScanTaskInfoFailedImages';


export class ImageScanTaskInfo {
    private 'task_id'?: string;
    private 'policy_id'?: string;
    private 'task_name'?: string;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    private 'remain_min'?: number;
    private 'task_type'?: string;
    private 'image_type'?: string;
    private 'task_status'?: number;
    private 'scan_scope'?: number;
    private 'rate_limit'?: number;
    private 'is_all'?: boolean;
    private 'failed_num'?: number;
    private 'success_num'?: number;
    private 'total_num'?: number;
    private 'risky_num'?: number;
    private 'sync_task_type'?: string;
    private 'failed_reason'?: string;
    private 'failed_images'?: Array<ImageScanTaskInfoFailedImages>;
    public constructor() { 
    }
    public withTaskId(taskId: string): ImageScanTaskInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withPolicyId(policyId: string): ImageScanTaskInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withTaskName(taskName: string): ImageScanTaskInfo {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withBeginTime(beginTime: number): ImageScanTaskInfo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): ImageScanTaskInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withRemainMin(remainMin: number): ImageScanTaskInfo {
        this['remain_min'] = remainMin;
        return this;
    }
    public set remainMin(remainMin: number  | undefined) {
        this['remain_min'] = remainMin;
    }
    public get remainMin(): number | undefined {
        return this['remain_min'];
    }
    public withTaskType(taskType: string): ImageScanTaskInfo {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withImageType(imageType: string): ImageScanTaskInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withTaskStatus(taskStatus: number): ImageScanTaskInfo {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: number  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): number | undefined {
        return this['task_status'];
    }
    public withScanScope(scanScope: number): ImageScanTaskInfo {
        this['scan_scope'] = scanScope;
        return this;
    }
    public set scanScope(scanScope: number  | undefined) {
        this['scan_scope'] = scanScope;
    }
    public get scanScope(): number | undefined {
        return this['scan_scope'];
    }
    public withRateLimit(rateLimit: number): ImageScanTaskInfo {
        this['rate_limit'] = rateLimit;
        return this;
    }
    public set rateLimit(rateLimit: number  | undefined) {
        this['rate_limit'] = rateLimit;
    }
    public get rateLimit(): number | undefined {
        return this['rate_limit'];
    }
    public withIsAll(isAll: boolean): ImageScanTaskInfo {
        this['is_all'] = isAll;
        return this;
    }
    public set isAll(isAll: boolean  | undefined) {
        this['is_all'] = isAll;
    }
    public get isAll(): boolean | undefined {
        return this['is_all'];
    }
    public withFailedNum(failedNum: number): ImageScanTaskInfo {
        this['failed_num'] = failedNum;
        return this;
    }
    public set failedNum(failedNum: number  | undefined) {
        this['failed_num'] = failedNum;
    }
    public get failedNum(): number | undefined {
        return this['failed_num'];
    }
    public withSuccessNum(successNum: number): ImageScanTaskInfo {
        this['success_num'] = successNum;
        return this;
    }
    public set successNum(successNum: number  | undefined) {
        this['success_num'] = successNum;
    }
    public get successNum(): number | undefined {
        return this['success_num'];
    }
    public withTotalNum(totalNum: number): ImageScanTaskInfo {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withRiskyNum(riskyNum: number): ImageScanTaskInfo {
        this['risky_num'] = riskyNum;
        return this;
    }
    public set riskyNum(riskyNum: number  | undefined) {
        this['risky_num'] = riskyNum;
    }
    public get riskyNum(): number | undefined {
        return this['risky_num'];
    }
    public withSyncTaskType(syncTaskType: string): ImageScanTaskInfo {
        this['sync_task_type'] = syncTaskType;
        return this;
    }
    public set syncTaskType(syncTaskType: string  | undefined) {
        this['sync_task_type'] = syncTaskType;
    }
    public get syncTaskType(): string | undefined {
        return this['sync_task_type'];
    }
    public withFailedReason(failedReason: string): ImageScanTaskInfo {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
    public withFailedImages(failedImages: Array<ImageScanTaskInfoFailedImages>): ImageScanTaskInfo {
        this['failed_images'] = failedImages;
        return this;
    }
    public set failedImages(failedImages: Array<ImageScanTaskInfoFailedImages>  | undefined) {
        this['failed_images'] = failedImages;
    }
    public get failedImages(): Array<ImageScanTaskInfoFailedImages> | undefined {
        return this['failed_images'];
    }
}