

export class DeleteDashboardRequest {
    public id?: string;
    private 'is_delete_charts'?: boolean;
    private 'Content-Type'?: string;
    public constructor(id?: string, isDeleteCharts?: boolean, contentType?: string) { 
        this['id'] = id;
        this['is_delete_charts'] = isDeleteCharts;
        this['Content-Type'] = contentType;
    }
    public withId(id: string): DeleteDashboardRequest {
        this['id'] = id;
        return this;
    }
    public withIsDeleteCharts(isDeleteCharts: boolean): DeleteDashboardRequest {
        this['is_delete_charts'] = isDeleteCharts;
        return this;
    }
    public set isDeleteCharts(isDeleteCharts: boolean  | undefined) {
        this['is_delete_charts'] = isDeleteCharts;
    }
    public get isDeleteCharts(): boolean | undefined {
        return this['is_delete_charts'];
    }
    public withContentType(contentType: string): DeleteDashboardRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}