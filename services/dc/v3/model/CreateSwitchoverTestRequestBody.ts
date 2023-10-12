import { CreateSwitchoverTest } from './CreateSwitchoverTest';


export class CreateSwitchoverTestRequestBody {
    private 'switchover_test_record'?: CreateSwitchoverTest;
    public constructor() { 
    }
    public withSwitchoverTestRecord(switchoverTestRecord: CreateSwitchoverTest): CreateSwitchoverTestRequestBody {
        this['switchover_test_record'] = switchoverTestRecord;
        return this;
    }
    public set switchoverTestRecord(switchoverTestRecord: CreateSwitchoverTest  | undefined) {
        this['switchover_test_record'] = switchoverTestRecord;
    }
    public get switchoverTestRecord(): CreateSwitchoverTest | undefined {
        return this['switchover_test_record'];
    }
}