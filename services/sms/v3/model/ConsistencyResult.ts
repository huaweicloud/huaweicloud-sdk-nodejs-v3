

export class ConsistencyResult {
    private 'dir_check'?: string;
    private 'num_total_files'?: number;
    private 'num_different_files'?: number;
    private 'num_target_miss_files'?: number;
    private 'num_target_more_files'?: number;
    public constructor(dirCheck?: string, numTotalFiles?: number, numDifferentFiles?: number, numTargetMissFiles?: number, numTargetMoreFiles?: number) { 
        this['dir_check'] = dirCheck;
        this['num_total_files'] = numTotalFiles;
        this['num_different_files'] = numDifferentFiles;
        this['num_target_miss_files'] = numTargetMissFiles;
        this['num_target_more_files'] = numTargetMoreFiles;
    }
    public withDirCheck(dirCheck: string): ConsistencyResult {
        this['dir_check'] = dirCheck;
        return this;
    }
    public set dirCheck(dirCheck: string  | undefined) {
        this['dir_check'] = dirCheck;
    }
    public get dirCheck(): string | undefined {
        return this['dir_check'];
    }
    public withNumTotalFiles(numTotalFiles: number): ConsistencyResult {
        this['num_total_files'] = numTotalFiles;
        return this;
    }
    public set numTotalFiles(numTotalFiles: number  | undefined) {
        this['num_total_files'] = numTotalFiles;
    }
    public get numTotalFiles(): number | undefined {
        return this['num_total_files'];
    }
    public withNumDifferentFiles(numDifferentFiles: number): ConsistencyResult {
        this['num_different_files'] = numDifferentFiles;
        return this;
    }
    public set numDifferentFiles(numDifferentFiles: number  | undefined) {
        this['num_different_files'] = numDifferentFiles;
    }
    public get numDifferentFiles(): number | undefined {
        return this['num_different_files'];
    }
    public withNumTargetMissFiles(numTargetMissFiles: number): ConsistencyResult {
        this['num_target_miss_files'] = numTargetMissFiles;
        return this;
    }
    public set numTargetMissFiles(numTargetMissFiles: number  | undefined) {
        this['num_target_miss_files'] = numTargetMissFiles;
    }
    public get numTargetMissFiles(): number | undefined {
        return this['num_target_miss_files'];
    }
    public withNumTargetMoreFiles(numTargetMoreFiles: number): ConsistencyResult {
        this['num_target_more_files'] = numTargetMoreFiles;
        return this;
    }
    public set numTargetMoreFiles(numTargetMoreFiles: number  | undefined) {
        this['num_target_more_files'] = numTargetMoreFiles;
    }
    public get numTargetMoreFiles(): number | undefined {
        return this['num_target_more_files'];
    }
}