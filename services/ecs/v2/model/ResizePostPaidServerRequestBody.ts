import { ResizePostPaidServerOption } from './ResizePostPaidServerOption';


export class ResizePostPaidServerRequestBody {
    public resize?: ResizePostPaidServerOption;
    private 'dry_run'?: boolean;
    public constructor(resize?: ResizePostPaidServerOption) { 
        this['resize'] = resize;
    }
    public withResize(resize: ResizePostPaidServerOption): ResizePostPaidServerRequestBody {
        this['resize'] = resize;
        return this;
    }
    public withDryRun(dryRun: boolean): ResizePostPaidServerRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
}