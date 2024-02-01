

export class ListFile {
    private 'list_file_key'?: string;
    private 'obs_bucket'?: string;
    private 'list_file_num'?: string;
    public constructor(listFileKey?: string, obsBucket?: string) { 
        this['list_file_key'] = listFileKey;
        this['obs_bucket'] = obsBucket;
    }
    public withListFileKey(listFileKey: string): ListFile {
        this['list_file_key'] = listFileKey;
        return this;
    }
    public set listFileKey(listFileKey: string  | undefined) {
        this['list_file_key'] = listFileKey;
    }
    public get listFileKey(): string | undefined {
        return this['list_file_key'];
    }
    public withObsBucket(obsBucket: string): ListFile {
        this['obs_bucket'] = obsBucket;
        return this;
    }
    public set obsBucket(obsBucket: string  | undefined) {
        this['obs_bucket'] = obsBucket;
    }
    public get obsBucket(): string | undefined {
        return this['obs_bucket'];
    }
    public withListFileNum(listFileNum: string): ListFile {
        this['list_file_num'] = listFileNum;
        return this;
    }
    public set listFileNum(listFileNum: string  | undefined) {
        this['list_file_num'] = listFileNum;
    }
    public get listFileNum(): string | undefined {
        return this['list_file_num'];
    }
}