import { ResizePrePaidServerOption } from './ResizePrePaidServerOption';


export class ResizeServerRequestBody {
    public resize: ResizePrePaidServerOption;
    private 'dry_run'?: boolean | undefined;
    public constructor(resize?: any) { 
        this['resize'] = resize;
    }
    public withResize(resize: ResizePrePaidServerOption): ResizeServerRequestBody {
        this['resize'] = resize;
        return this;
    }
    public withDryRun(dryRun: boolean): ResizeServerRequestBody {
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