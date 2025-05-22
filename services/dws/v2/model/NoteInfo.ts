import { BucketSplitInfo } from './BucketSplitInfo';


export class NoteInfo {
    private 'bucket_split_info'?: BucketSplitInfo;
    public constructor() { 
    }
    public withBucketSplitInfo(bucketSplitInfo: BucketSplitInfo): NoteInfo {
        this['bucket_split_info'] = bucketSplitInfo;
        return this;
    }
    public set bucketSplitInfo(bucketSplitInfo: BucketSplitInfo  | undefined) {
        this['bucket_split_info'] = bucketSplitInfo;
    }
    public get bucketSplitInfo(): BucketSplitInfo | undefined {
        return this['bucket_split_info'];
    }
}