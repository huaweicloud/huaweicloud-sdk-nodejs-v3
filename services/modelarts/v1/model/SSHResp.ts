import { TaskUrls } from './TaskUrls';


export class SSHResp {
    private 'key_pair_names'?: Array<string>;
    private 'task_urls'?: Array<TaskUrls>;
    public constructor(keyPairNames?: Array<string>) { 
        this['key_pair_names'] = keyPairNames;
    }
    public withKeyPairNames(keyPairNames: Array<string>): SSHResp {
        this['key_pair_names'] = keyPairNames;
        return this;
    }
    public set keyPairNames(keyPairNames: Array<string>  | undefined) {
        this['key_pair_names'] = keyPairNames;
    }
    public get keyPairNames(): Array<string> | undefined {
        return this['key_pair_names'];
    }
    public withTaskUrls(taskUrls: Array<TaskUrls>): SSHResp {
        this['task_urls'] = taskUrls;
        return this;
    }
    public set taskUrls(taskUrls: Array<TaskUrls>  | undefined) {
        this['task_urls'] = taskUrls;
    }
    public get taskUrls(): Array<TaskUrls> | undefined {
        return this['task_urls'];
    }
}