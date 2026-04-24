

export class EventSearchResultV2Events {
    public id?: string;
    public name?: string;
    public type?: string;
    public status?: string;
    private 'baseline_name'?: string;
    private 'task_name'?: string;
    private 'task_id'?: string;
    private 'task_version'?: number;
    private 'happen_time'?: number;
    private 'owner_name'?: string;
    public constructor() { 
    }
    public withId(id: string): EventSearchResultV2Events {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EventSearchResultV2Events {
        this['name'] = name;
        return this;
    }
    public withType(type: string): EventSearchResultV2Events {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): EventSearchResultV2Events {
        this['status'] = status;
        return this;
    }
    public withBaselineName(baselineName: string): EventSearchResultV2Events {
        this['baseline_name'] = baselineName;
        return this;
    }
    public set baselineName(baselineName: string  | undefined) {
        this['baseline_name'] = baselineName;
    }
    public get baselineName(): string | undefined {
        return this['baseline_name'];
    }
    public withTaskName(taskName: string): EventSearchResultV2Events {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTaskId(taskId: string): EventSearchResultV2Events {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskVersion(taskVersion: number): EventSearchResultV2Events {
        this['task_version'] = taskVersion;
        return this;
    }
    public set taskVersion(taskVersion: number  | undefined) {
        this['task_version'] = taskVersion;
    }
    public get taskVersion(): number | undefined {
        return this['task_version'];
    }
    public withHappenTime(happenTime: number): EventSearchResultV2Events {
        this['happen_time'] = happenTime;
        return this;
    }
    public set happenTime(happenTime: number  | undefined) {
        this['happen_time'] = happenTime;
    }
    public get happenTime(): number | undefined {
        return this['happen_time'];
    }
    public withOwnerName(ownerName: string): EventSearchResultV2Events {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
}