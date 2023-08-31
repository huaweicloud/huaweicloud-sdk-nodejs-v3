

export class ExportGraphReqPaginate {
    public enable?: boolean;
    private 'row_count_per_file'?: number;
    private 'num_thread'?: number;
    public constructor() { 
    }
    public withEnable(enable: boolean): ExportGraphReqPaginate {
        this['enable'] = enable;
        return this;
    }
    public withRowCountPerFile(rowCountPerFile: number): ExportGraphReqPaginate {
        this['row_count_per_file'] = rowCountPerFile;
        return this;
    }
    public set rowCountPerFile(rowCountPerFile: number  | undefined) {
        this['row_count_per_file'] = rowCountPerFile;
    }
    public get rowCountPerFile(): number | undefined {
        return this['row_count_per_file'];
    }
    public withNumThread(numThread: number): ExportGraphReqPaginate {
        this['num_thread'] = numThread;
        return this;
    }
    public set numThread(numThread: number  | undefined) {
        this['num_thread'] = numThread;
    }
    public get numThread(): number | undefined {
        return this['num_thread'];
    }
}