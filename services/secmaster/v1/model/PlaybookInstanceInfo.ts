import { DataclassInfoRef } from './DataclassInfoRef';
import { DataobjectRef } from './DataobjectRef';
import { PlaybookInfoRef } from './PlaybookInfoRef';


export class PlaybookInstanceInfo {
    public id?: string;
    public name?: string;
    private 'project_id'?: string;
    public playbook?: PlaybookInfoRef;
    public dataclass?: DataclassInfoRef;
    public dataobject?: DataobjectRef;
    public status?: string;
    private 'trigger_type'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withId(id: string): PlaybookInstanceInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PlaybookInstanceInfo {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): PlaybookInstanceInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPlaybook(playbook: PlaybookInfoRef): PlaybookInstanceInfo {
        this['playbook'] = playbook;
        return this;
    }
    public withDataclass(dataclass: DataclassInfoRef): PlaybookInstanceInfo {
        this['dataclass'] = dataclass;
        return this;
    }
    public withDataobject(dataobject: DataobjectRef): PlaybookInstanceInfo {
        this['dataobject'] = dataobject;
        return this;
    }
    public withStatus(status: string): PlaybookInstanceInfo {
        this['status'] = status;
        return this;
    }
    public withTriggerType(triggerType: string): PlaybookInstanceInfo {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withStartTime(startTime: string): PlaybookInstanceInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): PlaybookInstanceInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}