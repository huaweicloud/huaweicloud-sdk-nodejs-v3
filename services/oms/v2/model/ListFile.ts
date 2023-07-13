

export class ListFile {
    private 'list_file_key': string | undefined;
    private 'obs_bucket': string | undefined;
    public constructor(listFileKey?: any, obsBucket?: any) { 
        this['list_file_key'] = listFileKey;
        this['obs_bucket'] = obsBucket;
    }
    public withListFileKey(listFileKey: string): ListFile {
        this['list_file_key'] = listFileKey;
        return this;
    }
    public set listFileKey(listFileKey: string | undefined) {
        this['list_file_key'] = listFileKey;
    }
    public get listFileKey() {
        return this['list_file_key'];
    }
    public withObsBucket(obsBucket: string): ListFile {
        this['obs_bucket'] = obsBucket;
        return this;
    }
    public set obsBucket(obsBucket: string | undefined) {
        this['obs_bucket'] = obsBucket;
    }
    public get obsBucket() {
        return this['obs_bucket'];
    }
}