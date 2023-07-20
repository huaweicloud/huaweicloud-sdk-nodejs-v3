

export class MetadataTask {
    public id?: string;
    public name?: string;
    private 'start_date'?: string;
    public status?: string;
    public type?: string;
    public constructor() { 
    }
    public withId(id: string): MetadataTask {
        this['id'] = id;
        return this;
    }
    public withName(name: string): MetadataTask {
        this['name'] = name;
        return this;
    }
    public withStartDate(startDate: string): MetadataTask {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withStatus(status: string): MetadataTask {
        this['status'] = status;
        return this;
    }
    public withType(type: string): MetadataTask {
        this['type'] = type;
        return this;
    }
}