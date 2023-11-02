

export class ShowFactorySupplementDataRequest {
    public workspace?: string;
    public sort?: string;
    public page?: string;
    public size?: string;
    public name?: string;
    private 'user_name'?: string;
    public status?: string;
    private 'start_date'?: string;
    private 'end_date'?: string;
    public constructor() { 
    }
    public withWorkspace(workspace: string): ShowFactorySupplementDataRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withSort(sort: string): ShowFactorySupplementDataRequest {
        this['sort'] = sort;
        return this;
    }
    public withPage(page: string): ShowFactorySupplementDataRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: string): ShowFactorySupplementDataRequest {
        this['size'] = size;
        return this;
    }
    public withName(name: string): ShowFactorySupplementDataRequest {
        this['name'] = name;
        return this;
    }
    public withUserName(userName: string): ShowFactorySupplementDataRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withStatus(status: string): ShowFactorySupplementDataRequest {
        this['status'] = status;
        return this;
    }
    public withStartDate(startDate: string): ShowFactorySupplementDataRequest {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withEndDate(endDate: string): ShowFactorySupplementDataRequest {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): string | undefined {
        return this['end_date'];
    }
}