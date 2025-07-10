import { RepoHook } from './RepoHook';


export class RepoListHook {
    public hooks?: Array<RepoHook>;
    public constructor() { 
    }
    public withHooks(hooks: Array<RepoHook>): RepoListHook {
        this['hooks'] = hooks;
        return this;
    }
}