

export class PFSSummaryResp {
    private 'pfs_path'?: string;
    public constructor(pfsPath?: string) { 
        this['pfs_path'] = pfsPath;
    }
    public withPfsPath(pfsPath: string): PFSSummaryResp {
        this['pfs_path'] = pfsPath;
        return this;
    }
    public set pfsPath(pfsPath: string  | undefined) {
        this['pfs_path'] = pfsPath;
    }
    public get pfsPath(): string | undefined {
        return this['pfs_path'];
    }
}