

export class TmlogInfo {
    private 'node_id'?: string;
    private 'file_list'?: Array<string>;
    private 'tmlog_size'?: number;
    public constructor() { 
    }
    public withNodeId(nodeId: string): TmlogInfo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withFileList(fileList: Array<string>): TmlogInfo {
        this['file_list'] = fileList;
        return this;
    }
    public set fileList(fileList: Array<string>  | undefined) {
        this['file_list'] = fileList;
    }
    public get fileList(): Array<string> | undefined {
        return this['file_list'];
    }
    public withTmlogSize(tmlogSize: number): TmlogInfo {
        this['tmlog_size'] = tmlogSize;
        return this;
    }
    public set tmlogSize(tmlogSize: number  | undefined) {
        this['tmlog_size'] = tmlogSize;
    }
    public get tmlogSize(): number | undefined {
        return this['tmlog_size'];
    }
}