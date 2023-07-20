

export class ExportFlinkJobRequestBody {
    private 'obs_dir'?: string;
    private 'is_selected'?: boolean;
    private 'job_selected'?: Array<number>;
    public constructor(obsDir?: string, isSelected?: boolean) { 
        this['obs_dir'] = obsDir;
        this['is_selected'] = isSelected;
    }
    public withObsDir(obsDir: string): ExportFlinkJobRequestBody {
        this['obs_dir'] = obsDir;
        return this;
    }
    public set obsDir(obsDir: string  | undefined) {
        this['obs_dir'] = obsDir;
    }
    public get obsDir(): string | undefined {
        return this['obs_dir'];
    }
    public withIsSelected(isSelected: boolean): ExportFlinkJobRequestBody {
        this['is_selected'] = isSelected;
        return this;
    }
    public set isSelected(isSelected: boolean  | undefined) {
        this['is_selected'] = isSelected;
    }
    public get isSelected(): boolean | undefined {
        return this['is_selected'];
    }
    public withJobSelected(jobSelected: Array<number>): ExportFlinkJobRequestBody {
        this['job_selected'] = jobSelected;
        return this;
    }
    public set jobSelected(jobSelected: Array<number>  | undefined) {
        this['job_selected'] = jobSelected;
    }
    public get jobSelected(): Array<number> | undefined {
        return this['job_selected'];
    }
}