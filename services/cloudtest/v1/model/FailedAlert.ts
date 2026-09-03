import { CloudAlarmDto } from './CloudAlarmDto';
import { TaskPolicy } from './TaskPolicy';
import { TestCasePolicy } from './TestCasePolicy';
import { WiseEye } from './WiseEye';


export class FailedAlert {
    public cloudAlarm?: CloudAlarmDto;
    public taskPolicy?: TaskPolicy;
    public testCasePolicy?: TestCasePolicy;
    public wiseEye?: WiseEye;
    public constructor() { 
    }
    public withCloudAlarm(cloudAlarm: CloudAlarmDto): FailedAlert {
        this['cloudAlarm'] = cloudAlarm;
        return this;
    }
    public withTaskPolicy(taskPolicy: TaskPolicy): FailedAlert {
        this['taskPolicy'] = taskPolicy;
        return this;
    }
    public withTestCasePolicy(testCasePolicy: TestCasePolicy): FailedAlert {
        this['testCasePolicy'] = testCasePolicy;
        return this;
    }
    public withWiseEye(wiseEye: WiseEye): FailedAlert {
        this['wiseEye'] = wiseEye;
        return this;
    }
}