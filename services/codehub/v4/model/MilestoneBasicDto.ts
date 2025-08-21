

export class MilestoneBasicDto {
    public id?: number;
    public iid?: number;
    private 'repository_id'?: number;
    public title?: string;
    public description?: string;
    public state?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'due_date'?: string;
    private 'start_date'?: string;
    private 'repository_path'?: string;
    private 'web_url'?: string;
    public constructor() { 
    }
    public withId(id: number): MilestoneBasicDto {
        this['id'] = id;
        return this;
    }
    public withIid(iid: number): MilestoneBasicDto {
        this['iid'] = iid;
        return this;
    }
    public withRepositoryId(repositoryId: number): MilestoneBasicDto {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withTitle(title: string): MilestoneBasicDto {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): MilestoneBasicDto {
        this['description'] = description;
        return this;
    }
    public withState(state: string): MilestoneBasicDto {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: string): MilestoneBasicDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): MilestoneBasicDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withDueDate(dueDate: string): MilestoneBasicDto {
        this['due_date'] = dueDate;
        return this;
    }
    public set dueDate(dueDate: string  | undefined) {
        this['due_date'] = dueDate;
    }
    public get dueDate(): string | undefined {
        return this['due_date'];
    }
    public withStartDate(startDate: string): MilestoneBasicDto {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withRepositoryPath(repositoryPath: string): MilestoneBasicDto {
        this['repository_path'] = repositoryPath;
        return this;
    }
    public set repositoryPath(repositoryPath: string  | undefined) {
        this['repository_path'] = repositoryPath;
    }
    public get repositoryPath(): string | undefined {
        return this['repository_path'];
    }
    public withWebUrl(webUrl: string): MilestoneBasicDto {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
}