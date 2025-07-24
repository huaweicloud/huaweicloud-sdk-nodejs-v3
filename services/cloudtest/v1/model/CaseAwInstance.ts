import { AwInstance } from './AwInstance';


export class CaseAwInstance {
    private 'setup_aw_list'?: Array<AwInstance>;
    private 'teardown_aw_list'?: Array<AwInstance>;
    private 'test_aw_list'?: Array<AwInstance>;
    public constructor() { 
    }
    public withSetupAwList(setupAwList: Array<AwInstance>): CaseAwInstance {
        this['setup_aw_list'] = setupAwList;
        return this;
    }
    public set setupAwList(setupAwList: Array<AwInstance>  | undefined) {
        this['setup_aw_list'] = setupAwList;
    }
    public get setupAwList(): Array<AwInstance> | undefined {
        return this['setup_aw_list'];
    }
    public withTeardownAwList(teardownAwList: Array<AwInstance>): CaseAwInstance {
        this['teardown_aw_list'] = teardownAwList;
        return this;
    }
    public set teardownAwList(teardownAwList: Array<AwInstance>  | undefined) {
        this['teardown_aw_list'] = teardownAwList;
    }
    public get teardownAwList(): Array<AwInstance> | undefined {
        return this['teardown_aw_list'];
    }
    public withTestAwList(testAwList: Array<AwInstance>): CaseAwInstance {
        this['test_aw_list'] = testAwList;
        return this;
    }
    public set testAwList(testAwList: Array<AwInstance>  | undefined) {
        this['test_aw_list'] = testAwList;
    }
    public get testAwList(): Array<AwInstance> | undefined {
        return this['test_aw_list'];
    }
}