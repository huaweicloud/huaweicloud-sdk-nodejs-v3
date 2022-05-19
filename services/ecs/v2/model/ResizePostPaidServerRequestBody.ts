import { ResizePostPaidServerOption } from './ResizePostPaidServerOption';


export class ResizePostPaidServerRequestBody {
    public resize: ResizePostPaidServerOption;
    private 'dry_run'?: boolean | undefined;
    public constructor(resize?: any) { 
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
    public set dryRun(dryRun: boolean | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun() {
        return this['dry_run'];
    }
}