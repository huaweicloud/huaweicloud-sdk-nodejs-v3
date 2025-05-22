

export class BucketSplitInfo {
    private 'current_dn_num'?: number;
    private 'after_scale_out_dn_num'?: number;
    private 'current_bucket_num'?: number;
    private 'after_scale_out_bucket_num'?: number;
    private 'is_bucket_split'?: boolean;
    private 'bucket_tilt_rate'?: string;
    private 'after_scale_out_bucket_tilt_rate'?: string;
    public constructor() { 
    }
    public withCurrentDnNum(currentDnNum: number): BucketSplitInfo {
        this['current_dn_num'] = currentDnNum;
        return this;
    }
    public set currentDnNum(currentDnNum: number  | undefined) {
        this['current_dn_num'] = currentDnNum;
    }
    public get currentDnNum(): number | undefined {
        return this['current_dn_num'];
    }
    public withAfterScaleOutDnNum(afterScaleOutDnNum: number): BucketSplitInfo {
        this['after_scale_out_dn_num'] = afterScaleOutDnNum;
        return this;
    }
    public set afterScaleOutDnNum(afterScaleOutDnNum: number  | undefined) {
        this['after_scale_out_dn_num'] = afterScaleOutDnNum;
    }
    public get afterScaleOutDnNum(): number | undefined {
        return this['after_scale_out_dn_num'];
    }
    public withCurrentBucketNum(currentBucketNum: number): BucketSplitInfo {
        this['current_bucket_num'] = currentBucketNum;
        return this;
    }
    public set currentBucketNum(currentBucketNum: number  | undefined) {
        this['current_bucket_num'] = currentBucketNum;
    }
    public get currentBucketNum(): number | undefined {
        return this['current_bucket_num'];
    }
    public withAfterScaleOutBucketNum(afterScaleOutBucketNum: number): BucketSplitInfo {
        this['after_scale_out_bucket_num'] = afterScaleOutBucketNum;
        return this;
    }
    public set afterScaleOutBucketNum(afterScaleOutBucketNum: number  | undefined) {
        this['after_scale_out_bucket_num'] = afterScaleOutBucketNum;
    }
    public get afterScaleOutBucketNum(): number | undefined {
        return this['after_scale_out_bucket_num'];
    }
    public withIsBucketSplit(isBucketSplit: boolean): BucketSplitInfo {
        this['is_bucket_split'] = isBucketSplit;
        return this;
    }
    public set isBucketSplit(isBucketSplit: boolean  | undefined) {
        this['is_bucket_split'] = isBucketSplit;
    }
    public get isBucketSplit(): boolean | undefined {
        return this['is_bucket_split'];
    }
    public withBucketTiltRate(bucketTiltRate: string): BucketSplitInfo {
        this['bucket_tilt_rate'] = bucketTiltRate;
        return this;
    }
    public set bucketTiltRate(bucketTiltRate: string  | undefined) {
        this['bucket_tilt_rate'] = bucketTiltRate;
    }
    public get bucketTiltRate(): string | undefined {
        return this['bucket_tilt_rate'];
    }
    public withAfterScaleOutBucketTiltRate(afterScaleOutBucketTiltRate: string): BucketSplitInfo {
        this['after_scale_out_bucket_tilt_rate'] = afterScaleOutBucketTiltRate;
        return this;
    }
    public set afterScaleOutBucketTiltRate(afterScaleOutBucketTiltRate: string  | undefined) {
        this['after_scale_out_bucket_tilt_rate'] = afterScaleOutBucketTiltRate;
    }
    public get afterScaleOutBucketTiltRate(): string | undefined {
        return this['after_scale_out_bucket_tilt_rate'];
    }
}