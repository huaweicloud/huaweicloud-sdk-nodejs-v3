import { Config } from './Config';


export class ContainerHooks {
    private 'post_start'?: Config;
    private 'pre_start'?: Config;
    public constructor() { 
    }
    public withPostStart(postStart: Config): ContainerHooks {
        this['post_start'] = postStart;
        return this;
    }
    public set postStart(postStart: Config  | undefined) {
        this['post_start'] = postStart;
    }
    public get postStart(): Config | undefined {
        return this['post_start'];
    }
    public withPreStart(preStart: Config): ContainerHooks {
        this['pre_start'] = preStart;
        return this;
    }
    public set preStart(preStart: Config  | undefined) {
        this['pre_start'] = preStart;
    }
    public get preStart(): Config | undefined {
        return this['pre_start'];
    }
}